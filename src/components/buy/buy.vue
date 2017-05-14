 <template>
    <div class="p-r">
     <v-touch v-on:tap="headerTap">
         <mt-header :title="gameclassname" >
             <div slot="left">
                <mt-button icon="back">返回</mt-button>
             </div>
         </mt-header>
     </v-touch>   
     <loadmore ref="loadMoreEl" :style="{height : contentheight +'px' }" class="p-r">
        <div class="add-num">
            <div class="add-num-left" ref="pageBack">
                <img src="../../images/dajiahao.png" > 自选号码
            </div>
            <v-touch class="add-num-left" @tap="random">
                <img src="../../images/dajiahao.png"> 机选一注
            </v-touch>
            <div class="line-bottom"></div>
        </div>
        <div ref="betListRef">
            <ul style="text-align:center" class="num-list" v-for="(item,index) in betList" >
                <li>
                    <span>{{item.userMethod}}{{item.userGameMethod}}</span>
                    <div>
                    <span v-if="item.playMethod === 'big_little_odd_even'" class="betNumber">{{filter(item.betnumbers)}}</span>
                    <span v-if="item.playMethod === 'pk10_guess_daxiao'" class="betNumber">{{filter(item.betnumbers)}}</span>
                    <span v-if="item.playMethod === 'pk10_guess_danshuang'" class="betNumber">{{filter(item.betnumbers)}}</span>
                    <span v-if="item.playMethod === 'lhc_tmdxds'" class="betNumber">{{filter(item.betnumbers)}}</span>
                    <span v-if="item.playMethod === 'lhc_tmsx'" class="betNumber">{{filterShengxiao(item.betnumbers)}}</span>
                    <span v-if="item.playMethod === 'lhc_tmsb'" class="betNumber">{{filterShengxiao(item.betnumbers)}}</span>
                    <span v-if="item.playMethod !== 'big_little_odd_even' && item.playMethod !== 'pk10_guess_daxiao' && item.playMethod !== 'pk10_guess_danshuang' && item.playMethod !== 'lhc_tmdxds' && item.playMethod !== 'lhc_tmsx' && item.playMethod !== 'lhc_tmsb'" class="betNumber">{{item.betnumbers}}</span>
                    </div>
                    <span>共{{item.count}}注</span><img :name="index" class="li-img" src="../../images/quxiao.png">
                </li>
            </ul>
        </div>
    </loadmore>
    <div class="buy-multiple" :style="{top : contentBuy +'px' }">
        <div class="bottom-buy">
            <span class="descrip-left">追</span>
            <div class="add-button">
                <div class="add-button-left left" @click.stop="zuihao(0)">
                    <img src="../../images/jianhao.png">
                    <div class="vertical-line"></div>
                </div>
                <div class="add-button-left middle">
                    {{zuihaoNumber}}
                    <div class="vertical-line"></div>
                </div>
                <div class="add-button-left right" @click.stop="zuihao(1)">
                    <img src="../../images/xiaojiahao.png">
                </div>
            </div>
            <span class="descrip-right">期</span>
            <div class="vertical-line"></div>
        </div>
        <div class="bottom-buy">
            <span class="descrip-left">投</span>
            <div class="add-button">
                <div class="add-button-left left" @click.stop="beishu(0)">
                    <img src="../../images/jianhao.png">
                    <div class="vertical-line"></div>
                </div>
                <div class="add-button-left middle">
                    {{beishuNumber}}
                    <div class="vertical-line"></div>
                </div>
                <div class="add-button-left right" @click.stop="beishu(1)">
                    <img src="../../images/xiaojiahao.png">
                </div>
            </div>
            <span class="descrip-right">倍</span>
        </div>
    </div>
    <div :style="{top : contentCount +'px' }" class="count">你选择了{{countTotal*zuihaoNumber*beishuNumber+countTotal*beishuNumber}}注，共{{(countTotal*zuihaoNumber*beishuNumber+countTotal*beishuNumber)*2}}元
    </div>
    <div :style="{top : contentBtn +'px' }" class="bottom-btn-cls"><mt-button class="my-btn-stl" @click.native="confirm" type="danger" size="large">立即投注</mt-button>
    </div>
</div>
</template>
<script lang="babel">
    import api from '../../api'
    import { mapActions } from 'vuex'
    import { winHeight,randomTz,exchange,exchange_shengxiao,closest } from "../../tools/command"
    import { MessageBox,Toast } from 'mint-ui'
    import loadmore from '../common/loadmore'
    import randomBet from './random-bet.js'
    import cai from '../selectnum/lottery-data'
    import * as constants from '../selectnum/data/betting-constants'
    import lotteryType from '../selectnum/order-type-constants'
    import Hammer from 'hammerjs'
    import lotteryName from '../selectnum/constants'
    export default {
        components : {
            loadmore
        },
        mounted(){
            let row = this.$store.state.lottery.currentLottery;
            this.gameclassname = lotteryName[row];
            this.betList = this.$store.state.lottery.betList;
            this.filterList(row,this.betList)
            console.log(this.$refs.loadMoreEl)
            this.submitLogin()
            var pageBack = new Hammer(this.$refs.pageBack)
            pageBack.on('tap',() => {
                this.$router.push({name : "selectnum"})         
            })
            var betListRef = new Hammer(this.$refs.betListRef)
            betListRef.on('tap',(e) => {
                 const target = e.target
                 if(target){
                    const tagName = target.tagName.toLowerCase()
                    if(tagName == "img"){
                        this.deleteBetLog(target.getAttribute("name"))
                        this.reloadBetList()
                    }
                 }
            })
            this.$refs.loadMoreEl.scrollReresh()
        },
        updated(){
        },
        data() {
            return {
                count: 0,
                tzbs: '',
                gameclassname: '',
                list : [],
                index : 0,
                zuihaoNumber : 0,
                beishuNumber : 1,
                betList: [],
                lotteryId: '',
            }
        },
        watch: {
        },
        computed : {
            contentheight() {
                return winHeight() - 170
            },
            contentBtn() {
                return winHeight() - 51
            },
            contentBuy(){
                return winHeight() - 128
            },
            contentCount(){
                return winHeight() - 75
            },
            countTotal(){
                var total = 0;
                for (var i = 0; i < this.betList.length; i++) {
                    total += this.betList[i].count
                }
                return total
            },
            currentLottery(){
                return this.$store.state.lottery.currentLottery
            },
            betList_filter(){
                return this.$store.state.lottery.betList
            }
        },
        methods: {
            ...mapActions({
                clearBetList : 'clearBetList',
                setBetList : 'setBetList',
            }),
            reloadBetList(){
                this.setBetList(this.betList)
            },
            async submitLogin() {
                var curLottery = this.$store.state.lottery.currentLottery
                var parameter = {}
                parameter.classId = curLottery.slice(3)
                var data = await api.ajax('lottery/findCurrentInfo', parameter)
                if(data && data.code == '0'){
                    this.lotteryId = data.data.lotteryId;
                } else {
                    Toast({
                      message: '操作失败，'+data.msg,
                      position: 'middle',
                      duration: 2000
                  })
                }
            },
            async order(parameter) {
                var parameter = {}
                parameter.point = 0
                var data = await api.ajax('order/save', parameter)
                if(data && data.code == '0'){
                    this.betList = [];
                    this.clearBetList();
                    Toast({
                      message: data.msg,
                      position: 'middle',
                      duration: 3000
                  })
                } else {
                    Toast({
                      message: '操作失败，'+data.msg,
                      position: 'middle',
                      duration: 2000
                  })
                }
            },
            async chaseNumber(parameter){
                var parameter = {}
                parameter.point = 0
                var data = await api.ajax('order/follow', parameter)
                if(data && data.code == '0'){
                    this.betList = [];
                    this.clearBetList();
                    Toast({
                        message: data.msg,
                        position: 'middle',
                        duration: 3000
                    })
                } else {
                    Toast({
                      message: '操作失败，'+data.msg,
                      position: 'middle',
                      duration: 2000
                  })
                }
            },
            bet(){
                var para = []
                var curLottery = this.$store.state.lottery.currentLottery
                if(this.betList.length == 0){
                   return MessageBox('注意',"请先正确选择号码！")
                }
                var that = this
                this.betList.forEach(function(value, index) {
                    var item = {}
                    item.gid = value.lottery.slice(3)
                    item.gmcid = lotteryType[value.lottery][value.playMethod][value.methodType]
                    item.contents = value.betnumbers
                    item.lid = that.lotteryId
                    item.zs = value.count
                    item.bs = that.beishuNumber
                    item.model = 1
                    item.amount = (value.count)*(that.beishuNumber)*2
                    item.tzbs = value.tzbs
                    para.push(item)
                })
                var curLottery = this.$store.state.lottery.currentLottery
                var parameter = {}
                if (this.zuihaoNumber > 0) {
                    if (curLottery == "cai14") {
                        return MessageBox('注意',"香港六合彩不能追号！")
                    }
                    if (this.betList.length === 1) {
                        parameter.classId = curLottery.slice(3)
                        parameter.actCount = this.zuihaoNumber
                        parameter.orderCount = this.countTotal
                        parameter.singleMoney = 1
                        parameter.sumMoney = this.countTotal*this.zuihaoNumber*2
                        this.lotteryId++
                        var lotteryIds = "" + this.lotteryId
                        var multiples = "1"
                        for (var i = 1; i < this.zuihaoNumber; i++) {
                            this.lotteryId++
                            lotteryIds += "," + this.lotteryId 
                            multiples += "," + "1"
                        }
                        parameter.bingoIsStop = 1
                        parameter.lotteryIds = lotteryIds
                        parameter.multiples = multiples
                        parameter.strJson = JSON.stringify(para)
                        this.chaseNumber(parameter) 
                    } else {
                        MessageBox('注意',"追号只能投注单注！")
                    }
                } else {
                    parameter.classId = curLottery.slice(3)
                    parameter.lotteryId = this.lotteryId
                    parameter.amountTotal = this.countTotal*2
                    parameter.strJson = JSON.stringify(para)
                    this.order(parameter) 
                }
            },
            confirm(){
                console.log('confirm')
                MessageBox.confirm('您确认要提交本次的订单记录吗？').then(action => {
                  this.bet()
                },() => {
                    console.log("cancel")
                });
            },
            zuihao(para){
                if(para == 0 && this.zuihaoNumber > 0){
                    --this.zuihaoNumber
                } else if(para == 1 && this.zuihaoNumber < 100){
                    ++this.zuihaoNumber
                }
            },
            beishu(para){
                if(para == 0 && this.beishuNumber > 1){
                    --this.beishuNumber
                } else if(para == 1 && this.beishuNumber < 100){
                    ++this.beishuNumber
                }
            },
            filterList (type,value) {
                //过滤购买页的投注列表
                var orderValue = [];
                for (var i = 0; i < value.length; i++) {
                    if (type == value[i].lottery) {
                        orderValue.push(value[i])
                    }
                }
                return this.betList=orderValue
            },
            filter (val) {
                return exchange(val)
            },
            filterShengxiao (val) {
                return exchange_shengxiao(val)
            },
            random(){
                //const rdNo = randomBet['cai14']['lhc_tmsb']['lhc_tmsb_type']()
                var curLottery = this.$store.state.lottery.currentLottery
                var gamePlayMethod = this.$store.state.lottery.gamePlayMethod
                var playMethodType = this.$store.state.lottery.playMethodType
                var userMethod = this.$store.state.lottery.userMethod
                var userGameMethod = this.$store.state.lottery.userGameMethod
                const rdNo = randomBet[curLottery][gamePlayMethod][playMethodType]()
                console.log('rdNo', rdNo)
                this.count = rdNo.count
                var newPro = {}
                newPro.userMethod = userMethod;
                newPro.userGameMethod = userGameMethod;
                newPro.lottery = curLottery;
                newPro.playMethod = gamePlayMethod;
                newPro.methodType = playMethodType;
                if (typeof(rdNo) === "object") {
                    if (!rdNo.count) {
                        this.count = 1
                    }
                    newPro.count = this.count;
                    newPro.betnumbers = rdNo.numbers;
                    newPro.tzbs = this.tzbs;
                } else {
                    newPro.count = 1;
                    newPro.tzbs = "0";
                    if (gamePlayMethod == "pk10_guess_daxiao" || gamePlayMethod == "pk10_guess_danshuang" || gamePlayMethod == "lhc_tmdxds") {
                        newPro.betnumbers = "0" + rdNo 
                    } else {
                        newPro.betnumbers = rdNo;
                    } 
                }
                this.betList.push(newPro)
                this.$refs.loadMoreEl.scrollReresh()
                this.reloadBetList()
            },
            deleteBetLog(index){
                this.betList.splice(index,1)
                this.$refs.loadMoreEl.scrollReresh()
            },
            headerTap(e){
                var target = e.target
                if(closest(target, "div.is-left")){
                    this.$router.push({name : "selectnum"})         
                }
            },
        },
    }
</script>
<style scoped>
    .mint-popup-2 {
        width: 100%;
        height: 40px;
        text-align: center;
        background-color: rgba(0,0,0,.7);
    }
    .count {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 15px;
        font-size: 12px;
        padding-left: 10px;
        border-bottom: 1px solid rgb(221, 221, 221);
    }
    .bottom-btn-cls {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100px;
    }
    .my-btn-stl {
        width: 95%;
        margin: auto;
    }
    .add-num{
        height: 59px;
        position: relative;
    }
    .buy-multiple{
        height: 51px;
        width: 100%;
        border-top: 1px solid rgb(221, 221, 221);
        border-bottom: 1px solid rgb(221, 221, 221);
        position: absolute;
        overflow: hidden;
    }
    .bottom-buy{
        width: 50%;
        height: 100%;
        float: left;
        position: relative;
        line-height: 51px;
        font-size: 12px;
    }
    .vertical-line{
        height: 100%;
        width: 1px;
        position: absolute;
        right: 0;
        top: 0;
        background-color: rgb(221, 221, 221);
    }
    .add-num-left{
        width: 45.7%;
        margin-left: 2.6%;
        height: 36px;
        border: 1px solid rgb(221, 221, 221);
        text-align: center;
        line-height: 36px;
        float: left;
        margin-top: 11px;
        font-size: 13px;
    }
    .add-num-left img {
        width: 12px;
    }
    .line-bottom{
        height: 1px;
        width: 95%;
        background-color: rgb(221, 221, 221);
        position: absolute;
        bottom: 0;
        left: 2.5%;
    }
    .num-list{
        width: 95%;
        margin: auto;
    }
    .num-list li{
        list-style: none;
        width: 100%;
        border-bottom: 1px solid rgb(221, 221, 221);
        text-align: left;
        font-size: 15px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        word-break: break-word;
    }
    .add-button{
        height: 41px;
        width: 64%;
        border: 1px solid rgb(221, 221, 221);
        position: absolute;
        left: 18%;
        top: 5px;
        border-radius: 5px;
    }
    .descrip-left{
        float: left;
        margin-left: 10%
    }
    .descrip-right{
        float: right;
        margin-right: 10%
    }
    .add-button-left{
        width: 33%;
        height: 100%;
        float: left;
        text-align: center;
        position: relative;
    }
    .left {
        line-height: 37px;
    }
    .left img {
        width: 14px;
    }
    .middle {
        line-height: 41px;
    }
    .right {
        line-height: 45px;
    }
    .right img {
        width: 11.5px;
    }
    .li-img {
        width: 3.5%;
        padding: 15px;
    }
    .betNumber{
        color: #ff0000;
    }

</style>
