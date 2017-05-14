 <template>
    <div class="p-r">
     <mt-header :title="gameclassname" >
         <router-link to="/selectnum" slot="left" event="touchstart">
             <mt-button icon="back">返回</mt-button>
         </router-link>
     </mt-header>
    <div class="backcolor">
    	<div class="tip">{{gameclassname}}玩法与规则介绍</div>
    	<div class="content p-r">
            <loadmore ref="numLoadMore" :style="{ height : contentHeight +'px' }">
            <p>1、{{gameclassname}}与国家发行{{gameclassname}}玩法以及开奖结果一致，奖金更高，玩法更多返奖率高达60%。</p>
            <p>2、游戏时间：9：00-23：00，每天84期，10分钟开奖。</p>
            <p>3、中奖规则：</p>
            <ul v-for="item in list">
                <li>
                    <span class="bold">{{item.title}}</span>：{{item.remark}}单注奖金{{item.bonus}}元。
                    </br>{{item.example}}
                </li>
            </ul>
            </loadmore>
    	</div>
    </div>
    <div :style="{top : contentBtn +'px' }" class="bottom-btn-cls">
        <v-touch v-on:tap = "continueBuy">
        <mt-button class="my-btn-stl" type="danger" size="large" >继续购彩</mt-button>
        </v-touch>
    </div>
</div>
</template>
<script lang="babel">
    import api from '../../api'
    import { mapActions } from 'vuex'
    import { winHeight } from "../../tools/command"
    import { MessageBox } from 'mint-ui'
    import { Toast } from 'mint-ui'
    import cai from '../selectnum/lottery-data'
    import loadmore from '../common/loadmore'
    import Hammer from 'hammerjs'
    import lotteryName from '../selectnum/constants'
    export default {
        components : {
            loadmore
        },
        mounted(){
            let row = this.$store.state.lottery.currentLottery;
            this.gameclassname = lotteryName[row];
            this.getData()
        },
        data() {
            return {
                list : [],
                index : 0,
                gameclassname: '',
            }
        },
        watch: {
        },
        computed : {
            contentHeight() {
                return winHeight() - 160
            },
            contentBtn() {
            	return winHeight() - 51
            },
        },
        methods: {
            async getData() {
                var curLottery = this.$store.state.lottery.currentLottery
                var parameter = {}
                parameter.classId = curLottery.slice(3)
                var data = await api.ajax('lottery/type/listRule', parameter)
                if(data && data.code == '0'){
                    if(!data.data){
                        return
                    }
                    this.list = data.data
                    this.$refs.numLoadMore.scrollReresh()
                } else {
                    Toast({
                      message: '操作失败，'+data.msg,
                      position: 'middle',
                      duration: 2000
                  })
                }
            },
            headerTap(){
                this.$router.push({name : "selectnum"})     
            },
            continueBuy(){
                this.$router.push({name : "selectnum"})
            }
        },
    }
</script>
<style scoped>
    .backcolor {
    	background-color: #f3f3f3;
    }
    .tip {
    	width: 100%;
    	height: 50px;
        background: url(../../images/rules.png) no-repeat;
        background-size:  100% 50px;
        color: #fff;
        line-height: 51px;
        text-align: center;
    }
    .content {
    	font-size: 12px;
    	padding: 5px 10px;
        word-spacing:8px; 
        letter-spacing: 1px;
        line-height: 20px;
    }
    .content p {
    	line-height: 20px;
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
        border: 1px solid rgb(221, 221, 221);
    }
    .bold {
        font-weight: bold;
    }
</style>
