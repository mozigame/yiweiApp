 <template>
 	<div class="p-r">
        <v-touch v-on:tap="headerTap">
     		<mt-header :title="list.className">
                <div slot="left">
     			    <mt-button icon="back">返回</mt-button>
                </div>
     		</mt-header>
        </v-touch>
        <loadmore ref="numLoadMore" :style="{height : contentheight +'px' }" class="backcolor">
            <div class="main-content">    
         		<div class="show-img p-r">
         			<img class="greencolor" v-if="list.bingoFlag=='0'" src='../../images/dengdaikaijiang.png'>
         			<img class="redcolor" v-if="list.bingoFlag=='1'||list.bingoFlag=='3'" src='../../images/zhongjiang.png'>
         			<img class="bluecolor" v-if="list.bingoFlag=='2'" src='../../images/weizhongjiang.png'>
         			<span class="f-14 opentime" v-if="list.bingoFlag=='1'">喜中{{list.resultMoney/100}}元</span>
         		</div>
         		<div class="show-betting">
         			<div class="cai-number">
         				<span class="f-18">{{list.className}}-{{list.lotteryName}}期</span>
         				<p class="f-14 m-t-15 grag-128">投注金额： {{list.amount/100}}元</p>
         				<p class="f-14 m-t-15 grag-128">投注内容： [{{list.lotteryTypeName}}] {{list.orderValue}}
         					<img v-if="list.bingoFlag=='3'" class="zuihao" src="../../images/zhuihao.png"> 
         				</p>
         				<p class="f-14 m-t-15 grag-128">投注信息： 共{{list.orderCount}}注，倍投{{list.multiple}}倍</p>
         				<p class="f-14 m-t-15 grag-128">投注时间： {{list.addTime}}</p>
         				<p class="f-14 m-t-15 grag-128 m-b-15">方案编号： {{list.lotteryName}}</p>
         			</div>
         			<p v-if="list.bingoFlag!='0'" class="f-14 m-t-15 grag-128 m-b-15">开奖号码： <span class="red-color">{{list.openNum}}</span></p>
         		</div>
                <v-touch v-on:tap="continuebet" class="continue-bet-touch">
             		<div class="continueBetting f-14">
             			继续投注
             		</div>
                </v-touch>
            </div>    
        </loadmore>    
 	</div>
 </template>
 <script lang="babel">
 	import api from '../../api'
 	import { mapActions } from 'vuex'
 	import { winHeight, winWidth, closest} from "../../tools/command"
    import loadmore from '../common/loadmore'
 	export default {
 		mounted(){
 			this.list = this.$store.state.lottery.bettingRecord;
            this.$refs.numLoadMore.scrollReresh()
 		},
 		components : {
            loadmore
 		},
 		data() {
 			return {
 				list : {},
 			}
 		},
 		computed : {
            contentheight() {
                return winHeight() - 40
            },
        },
 		methods: {
			...mapActions({
				setCurrentLottery: 'setCurrentLottery'
			}),
 			continuebet(e){
                console.log(e.target)
        		var cai = 'cai' +  this.list.classId
                this.setCurrentLottery(cai)
                this.$router.push({name: 'selectnum'})
 			},
            headerTap(e){
                var target = e.target
                if(closest(target, "div.is-left")){
                    this.$router.push({name : "betting_record"})       
                }
            }
 		},
 	}
 </script>
 <style scoped>
 	.backcolor{
 		background-color: rgb(243, 243, 243);
 	}
 	.show-img{
 		width: 100%;
 	}
 	.show-img img{
 		width: 100%;
 	}
 	.opentime{
 		width: 100%;
 		text-align: center;
 		position: absolute;
 		color: yellow;
 		bottom: 35px;
 		left: 0;
 	}
 	.greencolor{
 		border-bottom: 1px solid rgb(124, 177, 47);
 	}
 	.bluecolor{
 		border-bottom: 1px solid rgb(136, 171, 218);
 	}
 	.redcolor{
 		border-bottom: 1px solid rgb(255, 74, 65);
 	}
 	.show-betting{
 		width: 90%;
 		margin: 20px auto 15px auto;
 	}
 	.cai-number{
 		width: 100%;
 		border-bottom: 1px solid rgb(238, 238, 238);
 	}
 	.continueBetting{
 		height: 37px;
 		width: 142px;
 		margin: auto;
 		border: 1px solid rgb(210, 210, 210);
 		text-align: center;
 		color: rgb(102, 102, 102);
 		background-color: rgb(238, 238, 238);
 		line-height: 37px;
 		border-radius: 4px;
 	}
 	.red-color{
 		color: red;
 	}
 	.zuihao{
 		display: inline-block;
 		width: 30px;
 		position: relative;
 		left: 2px;
 		top: 2px;
 	}
    .main-content {
        padding-bottom: 20px;
        background-color: white;
    }

    .continue-bet-touch {
        width: 144px;
        margin: 0 auto;
    }

 </style>
