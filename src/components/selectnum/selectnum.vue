 <template>
    <div class="p-r">
        <mt-header :title="gameclassname" ref="selectNumHeader" style="touch-action:none;">
            <div slot="left">
                <mt-button icon="back">返回</mt-button>
                </div>
            </mt-header>
            <div class="news">
                <span class="f-12 margin-l">距离第 {{newTitles}} 期截止 <span v-if="showHours">{{countdown.hours}}：</span>{{countdown.minute}}：{{countdown.second}}</span>
            </div>
            <div class="game-class"  @touchstart.stop.prevent="popupVisible=!popupVisible">
                <span class="margin-l f-15 ">
                    <span>玩法：</span>
                    <span class="red-color">{{userMethod}}{{userGameMethod}}</span>
                </span>
                <img src="../../images/daosanjiao.png" class="daosanjiao">
            </div>
            <mt-popup v-model="popupVisible" position="bottom">
                <mt-picker :slots="slots" @change="onValuesChange" show-toolbar>
                    <span class="picker-toolbar-yiwei" ref="pickerToolbarYiwei">关闭</span>
                </mt-picker>
            </mt-popup>

            <loadmore ref="numLoadMore" :style="{height : contentheight +'px' }"  class="backcolor p-r">
                <ball v-if="showSelectUnit"></ball>
                <common-num :yilou="yilouData" :datas="item" v-for="item in numBarData" v-if="noliuhecai"></common-num>
                <liuhe-color :datas="items" v-for="items in numBarData" v-if="!noliuhecai"></liuhe-color>
                <div style="height: 15px;"></div>
            </loadmore>

            <div class="buy-multiple" :style="{top : contentBuy +'px' }">
                <div class="bottom-select">
                    <input type="checkbox" v-if="showYilouCheckbox" name="selectMissValue" class="check-box needsclick" value=1 @touchend.prevent="isShowNum=!isShowNum"
                    :checked="isShowNum"><label v-if="showYilouCheckbox" for="selectMissValue" @touchstart.prevent="isShowNum=!isShowNum">显示遗漏值</label>
                    <span> <a ref="bettingRules">玩法规则</a> <a ref="bettingRecord">投注记录</a> <a ref="openHistRecord">开奖历史</a></span>
                </div>
                <span class="bottom-font f-13 graycolors">单注奖金 {{bonus}} 元</span>
            </div>
            <div :style="{top : contentBtn +'px' }" class="bottom-btn-cls">
                <mt-button class="my-btn-stl-left" @touchstart.native.prevent="random" type="danger" size="large">机选一注</mt-button>
                <mt-button class="my-btn-stl-right" @touchstart.native.prevent="gotobuy" type="danger" size="large">添加号码</mt-button>
            </div>
        </div>
    </template>
    <script lang="babel">
        import api from '../../api'
        import { mapActions } from 'vuex'
        import { winHeight ,isPassive, closest} from "../../tools/command"
        import { MessageBox, Toast } from 'mint-ui'
        import loadmore from '../common/loadmore'
        import commonNum from './common-num'
        import liuheColor from './liuhe-color'
        import ball from './ball'
        import { Popup } from 'mint-ui'
        import constants from './constants'
        import { Picker } from 'mint-ui'
        import cai from './lottery-data'
        import bet from './betting'
        import ballPosi from './data/ball-position'
        import yilou from './data/yilou'
        import Hammer from 'hammerjs'
        import randomBet from '../buy/random-bet.js'
        import pei from './order-type-constants'
        import lhc_tm_data from './data/lhc'
        export default {
            mounted: function () {
                let row = this.$store.state.lottery.currentLottery;
                this.gameclassname = constants[row];
                this.methods();
                this.$root.$on("betting", this.bettings)
                this.findCurrentInfo()
                this.orderTmIntervalId = setInterval(this.orderTmInterval, 1000)
                this.orderTmcheckId = setInterval(this.findCurrentInfo, 30000)
                this.getLeak()
                var header = new Hammer(this.$refs.selectNumHeader.$el)
                header.on('tap',(e) => {
                    var target = e.target
                    if(closest(target, "div.is-left")){
                        this.$router.push({name : "home"})               
                    }
                })
                var pickerToolbarYiwei = new Hammer(this.$refs.pickerToolbarYiwei)
                pickerToolbarYiwei.on('tap',() => {
                    this.popupVisible = false           
                })
                this.$refs.numLoadMore.scrollReresh()
                this.isShowNum = this.$store.state.lottery.isShowYilou;
                this.getLiuhecaiData(row)
                this.goToBettingRules()
                this.goToBettingRecord()
                this.goToOpenHistRecord()
            },
            beforeDestroy(){
                this.$root.$off("betting", this.bettings)
                clearInterval(this.orderTmIntervalId)
                clearInterval(this.orderTmcheckId)
            },
            components : {
                loadmore, commonNum, ball, liuheColor
            },
            data() {
                return {
                 count: 0,
                 lhcBetnumbers: [],
                 betnumbers: '',
                 tzbs: '',
                 betData: [],
                 newTitles: '',
                 orderTM: '',
                 countdown: {
                    hours: '',
                    minute: '',
                    second: '',
                },
                showHours: false,
                gameclassname: '',
                userMethod: '',
                userGameMethod: '',
                index : 0,
                noliuhecai: true,
                isShowNum: true,
                popupVisible: false,
                showSelectUnit: false,
                slots: [{
                  flex: 1,
                  values: [],
                  className: 'slot1',
                  textAlign: 'right'
              }, {
                  divider: true,
                  content: '-',
                  className: 'slot2'
              }, {
                  flex: 1,
                  values: [],
                  className: 'slot3',
                  textAlign: 'left'
              }],
              allPlayMethods: [],
              allGamePlayMethods: [],
              orderTmIntervalId: null,
              orderTmcheckId: null,
              showYilouCheckbox : false,
              yilouData : [],
              bonus: '',
          }
      },
      watch: {
        isShowNum(){
            this.setYilouType(this.isShowNum)
        }
    },
    computed : {
        contentBtn() {
            return winHeight() - 51
        },
        contentBuy(){
            return winHeight() - 119
        },
        contentheight() {
            return winHeight() - 235
        },

        //获取按钮数据
        numBarData(){
            var curLottery = this.$store.state.lottery.currentLottery;
            var gamePlayMethod = this.$store.state.lottery.gamePlayMethod;
            var playMethodType = this.$store.state.lottery.playMethodType;
            var typeArray = cai[curLottery].methodType[gamePlayMethod];
            if(ballPosi.indexOf(playMethodType) > -1){
                this.showSelectUnit = true
            } else {
                this.showSelectUnit = false
            }
            if(!playMethodType){
                return
            }
            if(typeArray && typeArray.length > 0){
                return typeArray[0].selectPlate[playMethodType];
            }
            return
        },
    },
    methods: {
        ...mapActions({
          updateUserName: 'updateUserName',
          updateLoginStatus : 'updateLoginStatus',
          setPlayMethod : 'setPlayMethod',
          setPlayMethodType : 'setPlayMethodType',
          setYilouType : 'setYilouType',
          clearSelected : 'clearSelected',
          setBetList : 'setBetList',
          clearBetList : 'clearBetList',
          setRouterHist : 'setRouterHist',
          setUserMethod : 'setUserMethod',
          setUserGameMethod : 'setUserGameMethod',
      }),
        async findCurrentInfo() {
            var curLottery = this.$store.state.lottery.currentLottery
            var parameter = {}
            parameter.classId = curLottery.slice(3)
            var data = await api.ajax('lottery/findCurrentInfo', parameter)
            if(data && data.code == '0'){
                if(data.data.orderTM == '0'){
                    this.findCurrentCanBet()
                } else {
                    this.orderTM = data.data.orderTM;
                    console.log(this.orderTM)
                    if(this.orderTM > 3600){
                        this.showHours = true;
                    }else{
                        this.showHours = false;
                    }
                    this.newTitles = data.data.title + '-' +data.data.titleCode;
                }
            } else {
                Toast({
                  message: '操作失败，'+data.msg,
                  position: 'middle',
                  duration: 2000
              })
            }
        },
        async findCurrentCanBet() {
            var curLottery = this.$store.state.lottery.currentLottery
            var parameter = {}
            parameter.classId = curLottery.slice(3)
            var data = await api.ajax('lottery/findCurrentCanBet', parameter)
            if(data && data.code == '0'){
                if(!data.data){
                    return
                }
                this.orderTM = data.data.orderTM;
                console.log(this.orderTM)
                if(this.orderTM > 3600){
                    this.showHours = true;
                }else{
                    this.showHours = false;
                }
                this.newTitles = data.data.titleCode;
            } else {
                Toast({
                  message: '操作失败，'+data.msg,
                  position: 'middle',
                  duration: 2000
              })
            }
        },
        confirm(){
            // console.log('confirm')
        },

        //玩法选值改变事件,改变store的状态
        onValuesChange(picker, values) {
            let playType = values[0];
            let gamePlayType ="";
            this.userMethod = playType;
            let allPlayClass = picker.getSlotValues(0);
            let savePlayClass = '';
            for(var index in allPlayClass){
                if(allPlayClass[index] == playType){
                    savePlayClass = this.allPlayMethods[index].name
                    break
                }
            }
            if (this.$store.state.lottery.gamePlayMethod != savePlayClass) {
                this.setPlayMethod(savePlayClass);
                this.methodsClass()
                picker.setSlotValue(1,picker.getSlotValues(1)[0])
            } 
            gamePlayType = values[1];
            this.userGameMethod = gamePlayType;
            let allGameClass = picker.getSlotValues(1);
            let saveGameClass = '';
            for(var index in allGameClass){
                if(allGameClass[index] == gamePlayType){
                    saveGameClass = this.allGamePlayMethods[index] ? this.allGamePlayMethods[index].name : ''
                }
            }
            if(saveGameClass){
                this.setPlayMethodType(saveGameClass);
            }
            const ssc = ['cai1','cai2','cai3','cai6','cai7','cai11','cai12','cai15']
            const curLottery = this.$store.state.lottery.currentLottery;
            const playMethodType = this.$store.state.lottery.playMethodType
            playMethodType=='lhc_tmsx_type'||playMethodType=='lhc_tmsb_type'? this.noliuhecai=false:this.noliuhecai=true;
            if(ssc.indexOf(curLottery) > -1 && yilou.indexOf(playMethodType) > -1){
                this.isShowNum = true
                this.showYilouCheckbox = true
            } else {
                this.isShowNum = false
                this.showYilouCheckbox = false
            }
            this.$refs.numLoadMore.scrollReresh()
            this.clearSelected();
            this.betnumbers = '';
            this.lhcBetnumbers = [];
            this.count = 0;
            this.findBonus()
        },

        //玩法获取
        methods(){
            let curLottery = this.$store.state.lottery.currentLottery;
            let playtype = cai[curLottery].playMethod;
            let playMethods = [];
            let savePlayMethods = [];
            for(var index in playtype){
                playMethods.push(playtype[index].value)
                savePlayMethods.push(playtype[index])
            };
            this.slots[0].values = playMethods;
            this.allPlayMethods = savePlayMethods;
            this.setPlayMethod(savePlayMethods[0].name);
            this.methodsClass();
        },

        //获取具体玩法类别
        methodsClass(){
            let gamePlayMethod = this.$store.state.lottery.gamePlayMethod;
            let curLottery = this.$store.state.lottery.currentLottery;
            let PlayMethodType = cai[curLottery].methodType[gamePlayMethod];
            let gameMethods = [];
            let saveGamePlayMethods = [];
            for(var index in PlayMethodType[0].items){
                gameMethods.push(PlayMethodType[0].items[index].value)
                saveGamePlayMethods.push(PlayMethodType[0].items[index])
            };
            this.slots[2].values = gameMethods;
            this.allGamePlayMethods = saveGamePlayMethods;
            this.setPlayMethodType(saveGamePlayMethods[0].name);
        },

        //计算注数金额
        bettings(){
            var curLottery = this.$store.state.lottery.currentLottery
            var gamePlayMethod = this.$store.state.lottery.gamePlayMethod
            var playMethodType = this.$store.state.lottery.playMethodType
            var selected = this.$store.state.lottery.selected
            if(curLottery == 'cai14'){
                if(selected.tm && selected.tm.length > 0){
                    this.count = 1
                    this.lhcBetnumbers = []
                    this.tzbs = "0"
                    for (var i = 0; i < selected.tm.length; i++) {
                        this.lhcBetnumbers.push(selected.tm[i].slice(2)) 
                    }
                }
                if(selected.da_xiao && selected.da_xiao.length > 0){
                    this.count = 1
                    this.lhcBetnumbers = []
                    this.tzbs = "0"
                    for (var i = 0; i < selected.da_xiao.length; i++) {
                        this.lhcBetnumbers.push(selected.da_xiao[i].slice(2)) 
                    }
                }
                if (gamePlayMethod == "lhc_tmsx" || gamePlayMethod == "lhc_tmsb") {
                    this.count = 1 
                    this.lhcBetnumbers = []
                    this.tzbs = "0"
                    for(var key in selected){    
                        this.lhcBetnumbers.push(key)
                    }  
                }
            } else{
                if(gamePlayMethod && curLottery && playMethodType && selected){
                    var rst = bet[curLottery][gamePlayMethod][playMethodType](selected)
                }
                rst = rst || {}
                this.count = rst.count || 0
                if(rst.msg){
                    MessageBox.alert(rst.msg).then(action => {
                        console.log(rst.msg)
                    })
                } else if(this.count > 0){
                    this.betnumbers = rst.numbers
                    if(rst.tzbs){
                        this.tzbs = rst.tzbs
                    } else {
                        this.tzbs = "0"
                    }
                }
            }
        },

        //机选一注
        random(){
            //const rdNo = randomBet['cai14']['lhc_tmsb']['lhc_tmsb_type']()
            var curLottery = this.$store.state.lottery.currentLottery
            var gamePlayMethod = this.$store.state.lottery.gamePlayMethod
            var playMethodType = this.$store.state.lottery.playMethodType
            this.setUserMethod(this.userMethod)
            this.setUserGameMethod(this.userGameMethod)
            const rdNo = randomBet[curLottery][gamePlayMethod][playMethodType]()
            console.log('rdNo', rdNo)
            this.betData = this.$store.state.lottery.betList;
            var selected = this.$store.state.lottery.selected;
            if (selected.ballposi) {
                this.tzbs = selected.ballposi
            } else {
                if (rdNo.tzbs) {
                    this.tzbs = rdNo.tzbs
                } else {
                    this.tzbs = "0"
                }
            }
            this.count = rdNo.count
            var parameter = {};
            parameter.userMethod = this.userMethod;
            parameter.userGameMethod = this.userGameMethod;
            if (typeof(rdNo) === "object") {
                if (!rdNo.count) {
                    this.count = 1
                }
                parameter.count = this.count;
                parameter.betnumbers = rdNo.numbers;
                parameter.tzbs = this.tzbs;
            } else {
                parameter.count = 1;
                parameter.tzbs = "0";
                if (gamePlayMethod == "pk10_guess_daxiao" || gamePlayMethod == "pk10_guess_danshuang" || gamePlayMethod == "lhc_tmdxds") {
                    parameter.betnumbers = "0" + rdNo 
                } else {
                    parameter.betnumbers = rdNo;
                } 
            }
            parameter.lottery = curLottery;
            parameter.playMethod = gamePlayMethod;
            parameter.methodType = playMethodType;
            this.betData.push(parameter);
            this.setBetList(this.betData);
            this.clearSelected();
            this.$router.push({name : "buy"});
        },

        //购买页面
        gotobuy(){
            if(this.count === 0){
                this.bettings()
            }
            var gamePlayMethod = this.$store.state.lottery.gamePlayMethod
            var playMethodType = this.$store.state.lottery.playMethodType
            var selected = this.$store.state.lottery.selected
            if (selected.ballposi && selected.ballposi.length !== 3 && playMethodType ==="direct_any_three_sum") {
                MessageBox('注意', '任三玩法是任意选择三个球位，请重新选择');
                return
            } else if (selected.ballposi && selected.ballposi.length !== 2 && playMethodType ==="direct_any_two_sum"){
                MessageBox('注意', '任2玩法必须投注2位数的球位，请重新选择');
                return
            } else if (selected.ballposi && selected.ballposi.length !== 3 && playMethodType ==="group_any_three_three_duplex"){
                MessageBox('注意', '任3玩法必须投注3位数的球位，请重新选择');
                return
            } else if (selected.ballposi && selected.ballposi.length !== 3 && playMethodType ==="group_any_three_six_duplex"){
                MessageBox('注意', '任三玩法是任意选择三个球位，请重新选择');
                return
            } else if (selected.ballposi && selected.ballposi.length !== 2 && playMethodType ==="group_any_two_duplex"){
                MessageBox('注意', '任2玩法必须投注2位数的球位，请重新选择');
                return
            } else if (selected.sum && selected.sum.length > 1 && gamePlayMethod ==="select_three_direct_sum"){
                MessageBox('注意', '只能选择一位号码！');
                return
            } else {
                if (this.count === 0 || !this.$store.state.lottery.betList) {
                    MessageBox('注意', '请先正确选择号码！');
                } else{
                    this.betData = this.$store.state.lottery.betList;
                    if (selected.ballposi) {
                        this.tzbs = ""
                        for (var i = 0; i < selected.ballposi.length; i++) {
                            this.tzbs += selected.ballposi[i]
                        }
                    } 
                    var parameter = {};
                    parameter.userMethod = this.userMethod;
                    parameter.userGameMethod = this.userGameMethod;
                    this.setUserMethod(this.userMethod);
                    this.setUserGameMethod(this.userGameMethod);
                    parameter.count = this.count;
                    if (gamePlayMethod =="lhc_tm" || gamePlayMethod == "lhc_zm" || gamePlayMethod == "lhc_zmt" || gamePlayMethod == "lhc_tmdxds" || gamePlayMethod == "lhc_tmsx" || gamePlayMethod == "lhc_tmsb") {
                        for (var i = 0; i <this.lhcBetnumbers.length; i++) {
                            var parameter = {};
                            parameter.userMethod = this.userMethod;
                            parameter.userGameMethod = this.userGameMethod;
                            parameter.count = this.count;
                            parameter.betnumbers = this.lhcBetnumbers[i]
                            parameter.tzbs = this.tzbs;
                            parameter.lottery = this.$store.state.lottery.currentLottery;
                            parameter.playMethod = this.$store.state.lottery.gamePlayMethod;
                            parameter.methodType = this.$store.state.lottery.playMethodType;
                            this.betData.push(parameter);
                            this.setBetList(this.betData);
                        }
                    } else {
                        parameter.betnumbers = this.betnumbers;
                        parameter.tzbs = this.tzbs;
                        parameter.lottery = this.$store.state.lottery.currentLottery;
                        parameter.playMethod = this.$store.state.lottery.gamePlayMethod;
                        parameter.methodType = this.$store.state.lottery.playMethodType;
                        this.betData.push(parameter);
                        this.setBetList(this.betData);
                    }
                    this.clearSelected();
                    this.$router.push({name : "buy"});
                }
            }
        },

        //定时倒计时
        orderTmInterval(){
            this.orderTM--
            var orderTM = this.orderTM
            let h, m, s;
            if(orderTM > 0) {
                if(orderTM > 3600){
                    h = Math.floor(orderTM/60/60%24);
                }
                m = Math.floor(orderTM/60%60);
                s = Math.floor(orderTM%60);
                this.countdown.hours = this.addzero(h);
                this.countdown.minute = this.addzero(m);
                this.countdown.second = this.addzero(s);
            } else {
                // this.findCurrentInfo()
            }
        },

        //时间补零
        addzero(value){
            let nums = Number(value)
            if(nums>9){
                return nums+''
            }else{
                return '0'+nums
            }
        },
        async getLeak(){
            var curLottery = this.$store.state.lottery.currentLottery
            var parameter = {}
            parameter.classId = curLottery.slice(3)
            var data = await api.ajax('lottery/listMaxLeak', parameter)
            if(data && data.code == '0'){
                this.yilouData = data.data || []
            }
        },
        //六合彩生肖色波数据
        getLiuhecaiData(row){
            if (row == "cai14"){
                this.LiuhecaiData()
            } 
        },
        async LiuhecaiData(){
            var data = await api.ajax('lottery/type/findNumLHC', {})
            if(data && data.code == '0'){
                var datalist = data.data
                var typeArray = cai['cai14'].methodType['lhc_tmsx'];
                var sx = typeArray[0].selectPlate['lhc_tmsx_type']
                for(var index in datalist){
                    for(var number in sx){
                        if(sx[number].type == index){
                            sx[number].values.vulues = datalist[index]
                        }
                    }
                }
                var sebo = cai['cai14'].methodType['lhc_tmsb'][0].selectPlate['lhc_tmsb_type'];
                for(var index in datalist){
                    for(var number in sebo){
                        if(sebo[number].type == index){
                            sebo[number].values.vulues = datalist[index]
                        }
                    }
                }
            }
        },

        //获取赔率
        findBonus(){
            var playMethodType = this.$store.state.lottery.playMethodType;
            if (!playMethodType) {return}
            var curLottery = this.$store.state.lottery.currentLottery;
            var classId = curLottery.slice(3)
            var gamePlayMethod = this.$store.state.lottery.gamePlayMethod;
            var lotteryType = pei[curLottery][gamePlayMethod][playMethodType]
            var data = {
                lotteryType:lotteryType,
                classId:classId,
            }
            this.findBonusData(data)
        },
        //获取赔率数据
        async findBonusData(value){
            var data = await api.ajax('lottery/type/findBonus', value)
            if(data && data.code == '0'){
                this.bonus = (data.data.bonus/100).toFixed(2)
            }
        },

        //进入游戏规则页面
        goToBettingRules(){
            var goRules = new Hammer(this.$refs.bettingRules)
                goRules.on('tap',(e) => {
                 this.$router.push({name: 'rules'})              
                })
        },

        //进入投注记录页面
        goToBettingRecord(){
            var goRecord = new Hammer(this.$refs.bettingRecord)
                goRecord.on('tap',(e) => {
                 var para = {}
                 para.name = 'betting_record'
                 para.from = this.$route.path
                 this.setRouterHist(para)
                 this.$router.push({name: 'betting_record'})              
                })
        }, 
        //进入投注记录页面
        goToOpenHistRecord(){
            var goRecord = new Hammer(this.$refs.openHistRecord)
                goRecord.on('tap',(e) => {
                 var para = {}
                 para.name = 'look_past'
                 para.from = this.$route.path
                 this.setRouterHist(para)
                 this.$router.push({name: 'look_past'})              
                })
        },
    },
}
</script>
<style scoped>
    .margin-l{
        margin-left: 2.5%;
    }
    .bottom-btn-cls {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 51px;
    }
    .my-btn-stl-left {
        width: 32%;
        float: left;
        margin-left: 2%;
        background-color: white;
        color: red;
        border: 1px solid rgb(221, 221, 221);
    }
    .my-btn-stl-right {
        width: 62%;
        float: right;
        margin-right: 2%;
    }
    .add-num{
        height: 59px;
        position: relative;
    }
    .buy-multiple{
        height: 64px;
        width: 100%;
        position: absolute;
        overflow: hidden;
        text-align: center;
    }
    .bottom-select{
        height: 34px;
        width: 100%;
        text-align: left;
        font-size: 12px;
        line-height: 34px;
        padding-left: 2%;
        border-top: 1px solid rgb(221, 221, 221);
        border-bottom: 1px solid rgb(221, 221, 221);
        color: rgb(105, 105, 105);
    }
    .bottom-select span{
        float: right;
        margin-right: 4%;
    }
    .check-box{
        position: relative; 
        top: 1px; 
        margin-right: 4px;
    }
    .bottom-select a{
        color: rgb(26, 118, 204);
        border-bottom: 1px solid rgb(26, 118, 204);
    }
    .bottom-font{
        line-height: 10px;
    }
    .news{
        height: 30px;
        line-height: 30px;
        background-color: rgb(242, 231, 209);
    }
    .select-num-loadmore {
        position: absolute;
        top: 75px;
        height: 465px;
    }
    .game-class{
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid  rgb(221, 221, 221);
    }
    .red-color{
        color: red;
    }
    .daosanjiao{
        width: 14px;
        float: right;
        margin: 16px 5% 0 0;
    }
    .xiajiantou{
        height: 5px;
    }
    .history-open{
        width: 100%;
        text-align: center;
        padding-top: 2px;
    }
    .history-open img{
        position: relative;
        bottom: 2px;
        left: 2px;
    }
    .graycolors{
        color: rgb(105, 105, 105);
    }

    .picker-toolbar-yiwei {
        line-height: 40px;
        font-size: 16px;
        color: #26a2ff;
        width: 100%;
        text-align: center;
        display: block;
    }
</style>
