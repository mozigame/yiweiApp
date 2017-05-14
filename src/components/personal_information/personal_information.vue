 <template>
 	<div class="p-r" >
 		<v-touch v-on:tap="headerTap">
 			<mt-header title="个人中心">
 				<div slot="left">
 					<mt-button icon="back">返回</mt-button>
                </div>
 			</mt-header>
 			</v-touch>
 			<loadmore ref="numLoadMore" :style="{height : contentheight +'px' }" class="backcolor p-r">
            <div class="head-img p-r">
                <div class="show-userinf">
                    <p class="f-18">kai888</p>
                    <p class="f-15">¥100.00</p>
                </div>
            </div>
            <div ref="tapBank" class="money-about">
                <div class="money-about-but" id="recharge">
                    <img class="imgsize-money" src="../../images/chongzhi1.png"><span class="f-15">充值</span>
                </div>
                <div class="money-about-but" id="money_out">
                    <img class="imgsize-money" src="../../images/tixian1.png"><span class="f-15">提现</span>
                </div>
                <div class="money-about-but" id="add_card">
                    <img class="imgsize-money" src="../../images/yinhangka1.png"><span class="f-15">银行卡</span>
                </div>
            </div>
 				<div ref="tapEvent">
 					<div id="change-information" class="function-but">
 						<img class="icon-size1 icon-top1" src="../../images/xiugaiziliao.png">
 						<span class="f-15 describe">修改资料</span>
 						<img src="../../images/xiayiji.png" class="img-right">
 					</div>
 					<div id="my-news" class="function-but">
 						<img class="icon-size1 icon-top2" src="../../images/wodexiaoxi.png">
 						<span class="f-15 describe">我的消息</span>
 						<img src="../../images/xiayiji.png" class="img-right">
 					</div>
 					<div id="bet-record" class="function-but">
 						<img class="icon-size1 icon-top1" src="../../images/touzhujilu.png">
 						<span class="f-15 describe">投注记录</span>
 						<img src="../../images/xiayiji.png" class="img-right">
 					</div>
 					<div id="money-record" class="function-but">
 						<img class="icon-size1 icon-top2" src="../../images/zijinjilu.png">
 						<span class="f-15 describe">资金记录</span>
 						<img src="../../images/xiayiji.png" class="img-right">
 					</div>
 					<div id="announcement" class="function-but">
 						<img class="icon-size1 icon-top1" src="../../images/houdonggonggao.png">
 						<span class="f-15 describe">活动公告</span>
 						<img src="../../images/xiayiji.png" class="img-right">
 					</div>
 					<div id="customerService" class="function-but">
 						<img class="icon-size1 icon-top2" src="../../images/zaixiankefu.png">
 						<span class="f-15 describe">在线客服</span>
 						<img src="../../images/xiayiji.png" class="img-right">
 					</div>
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
 				this.tapfunction()
 				this.tapBankFunction()
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
 					return winHeight() - 41
 				},
 			},
 			methods: {
 				...mapActions({
 					setRouterHist: 'setRouterHist',
 				}),
 				headerTap(e){
 					var target = e.target
 					if(closest(target, "div.is-left")){
 						this.$router.push({name : "home"})       
 					}
 				},
 				tapfunction(){
 					var eventtag = new Hammer(this.$refs.tapEvent)
 					eventtag.on('tap',(e) => {
 						const target = e.target
 						this.jump(target)
 						var domsfather = target.parentElement
 						this.jump(domsfather)
 					})
 				},
 				tapBankFunction(){
 					var eventtag = new Hammer(this.$refs.tapBank)
 					eventtag.on('tap',(e) => {
 						const target = e.target
 						this.jump(target)
 						var domsfather = target.parentElement
 						this.jump(domsfather)
 					})

 				},
 				//页面跳转
 				jump(e){
 					switch (e.id){
 						case 'bet-record' :
     						var para = {}
     						para.name = 'betting_record'
     						para.from = this.$route.path
     						this.setRouterHist(para)
     						return this.$router.push({name: 'betting_record'});
 						case 'money-record' :
 						    return this.$router.push({name: 'money_record'});
 						case 'recharge' :
     						var para = {}
     						para.name = 'recharge'
     						para.from = this.$route.path
     						this.setRouterHist(para)
     						return this.$router.push({name: 'recharge'});
 						case 'money_out' :
                            var para = {}
                            para.name = 'money_out'
                            para.from = this.$route.path
                            this.setRouterHist(para)
     						return this.$router.push({name: 'money_out'});
 						case 'add_card' :
 						    return this.$router.push({name: 'add_card'});
 						case 'change-information' :
 						    return this.$router.push({name: 'modify_information'});
                        case 'announcement' :
                            return this.$router.push({name: 'announcement'});
                        case 'my-news' :
                            return this.$router.push({name: 'my_news'});
                        case 'customerService' :
                            return window.open("http://Route.yinhu3399.me:17369/Route.aspx?ModID=1")
 						default : 
 						    break; 
 					}
 				},
 			},
 		}
 	</script>
 	<style scoped>
 		.head-img {
 			text-align: center;
 			height: 141px;
 			width: 100%;
 			background: url("../../images/jianbianse.png") repeat;
 		}
 		.show-userinf{
 			width: 100%;
 			position: absolute;
 			bottom: 0;
 		}
 		.show-userinf p {
 			margin-bottom: 10px;
 		}
 		.money-about{
 			display: flex; 
 			height: 60px;
 			width: 90%;
 			padding-right: 5%;
 			padding-left: 5%;
 			border-bottom: 1px solid rgb(198, 197, 202);
 		}
 		.money-about-but{
 			text-align: center;
 			line-height: 60px;
 			flex:1;  
 		}
 		.imgsize-money{
 			display: inline-block;
 			width: 26px;
 			position: relative;
 			top: 5px;
 			right: 5px;
 		}
 		.function-but{
 			position: relative;
 			height: 40px;
 			width: 90%;
 			padding-right: 5%;
 			padding-left: 5%;
 			border-bottom: 1px solid rgb(198, 197, 202);
 		}
 		.describe{
 			margin-left: 35px;
 			line-height: 40px;
 		}
 		.icon-size1{
 			width: 20px;
 			position: absolute;
 		}
 		.img-right{
 			float: right;
 			height:20px;
 			margin-top: 10px;
 		}
 		.icon-top1{
 			top: 11px;
 		}
 		.icon-top2{
 			top: 8px;
 		}
 		.headPicture{
 			height: 65px;
 		}
 	</style>
