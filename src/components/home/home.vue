 <template>
 	<div class="p-r">
 		<mt-header title="亿维彩票">
 			<mt-button icon="more" slot="right"></mt-button>
 		</mt-header>
 		<loadmore :style="{height : contentheight +'px' }" class="backcolor">
 			<ul style="text-align:center">
 				<li class="nav">
 					<div class="nav-top">
 						<div class="show-money">
 							<span class="balance-cls">余额：<span>{{balance}}</span></span>
 						</div>
 						<ul class="nav-button">
 							<li ref="recharge"><img src="../../images/chongzhi.png"><p>充值</p></li>
                            <li ref="moneyout"><img src="../../images/tixian.png"><p>提现</p></li>
                            <li ref="record"><img src="../../images/jilu.png"><p>记录</p></li>
                            <li ref="selfInf"><img src="../../images/geren.png"><p>个人</p></li>
 						</ul>
 					</div>
 					<div class="swipe-height">
 						<mt-swipe :auto="3000" ref="swipeItem">
 							<mt-swipe-item><img name="1" class="swipe-img" src="../../simages/swipe1.jpg"></mt-swipe-item>
 							<mt-swipe-item><img name="2" class="swipe-img" src="../../simages/swipe2.jpg"></mt-swipe-item>
 							<mt-swipe-item><img name="3" class="swipe-img" src="../../simages/swipe3.jpg"></mt-swipe-item>
 						</mt-swipe>
 					</div>
 					<div class="nav-bottom">
 						<div class="show-news-icon">
 							<span class="notice-text">系统公告</span>
 						</div>
 						<div ref="sysNotice" class="news">{{sysNotice}}</div>
 					</div>
 				</li>
 				<li style="display: block">
 					<lottery-nav :data="inf"></lottery-nav>
 				</li>
 				<li style="display: block" class="lottery-open" ref="kaijiangOpen">
 					<div class="open-class">
 						<div class="open-icon">
 							<img src="../../images/kaijianggonggao.png">
 							<div class="openstyle">开奖公告</div>
 						</div>
 						<div class="open-num">
 							<p><span class="open-class-font">重庆时时彩</span> <span style="font-size: 9px; color: rgb(209, 209, 209)">{{qihao}}期</span></p>
 							<ul>
 								<li class="lottery-number">{{haoma[0]}}</li>
 								<li class="lottery-number">{{haoma[1]}}</li>
 								<li class="lottery-number">{{haoma[2]}}</li>
 								<li class="lottery-number">{{haoma[3]}}</li>
 								<li class="lottery-number">{{haoma[4]}}</li>
 							</ul>
 						</div>
 						<img src="../../images/xiayiji.png" style="float: right;height: 20px; margin: 25px;">
 					</div>
 				</li>
 			</ul>
 		</loadmore>
 	</div>
 </template>
 <script lang="babel">
 	import api from '../../api'
 	import { mapActions } from 'vuex'
 	import { winHeight,winWidth, getRaf} from "../../tools/command"
 	import { MessageBox } from 'mint-ui'
 	import { Toast } from 'mint-ui'
 	import loadmore from '../common/loadmore'
 	import lotteryNav from './lottery-nav'
 	import Hammer from 'hammerjs'
 	export default {
 		name : "home",
 		components : {
 			loadmore,
 			lotteryNav
 		},
        created(){
            this.initData()
        },
 		mounted(){
 			var swipeItem = new Hammer(this.$refs.swipeItem.$el)
 			swipeItem.on("tap",(e) => {
 				const target = e.target
 				if(target){
 					const tagName = target.tagName.toLowerCase()
 					if(tagName == 'img'){
 						console.log("img: "+ target.getAttribute("name"))
 					}
 				}
 			})
 			this.gotorecord()
 			this.personalInformati()
            this.kaijiangOpen()
            this.gotoRecharge()
            this.moneyout()
 		},
 		data() {
 			return {
 				inf:"重庆时时彩",
 				list : [],
 				index : 0,
 				sysNotice : "",
                qihao: "",
                haoma: "",
                balance: "",
                fundPwd: "",
 			}
 		},
 		watch: {
 		},
 		computed : {
 			contentheight() {
 				return winHeight() - 41
 			},
 		},
 		methods: {
 			...mapActions({
 				updateUserName: 'updateUserName',
                updateLoginStatus : 'updateLoginStatus',
 				setRouterHist : 'setRouterHist',
                setFundPwd : 'setFundPwd',
 			}),
 			runAnimate(){
 				var element = this.$refs.sysNotice
 				var deviceWidth = winWidth() - 75
 				var elemWidth = element.getBoundingClientRect().width
 				var allWidth = deviceWidth + elemWidth
 				var raf = getRaf()
 				var start = null;
 				var x = deviceWidth
 				var aniTimelong = 20000
 				function step(timestamp) {
 					if (!start) start = timestamp;
 					var progress = timestamp - start;
 					if(progress > aniTimelong){
 						start = timestamp
 						x = deviceWidth
 					} else {
 						x = deviceWidth - (progress / aniTimelong)*allWidth
 					}
 					element.style.transform = 'translateX(' + x + 'px)'
 					raf(step)
 				}
 				raf(step)
 			},
 			//游戏记录
 			gotorecord(){
 				var goRecord = new Hammer(this.$refs.record)
 				goRecord.on('tap',(e) => {
                    var para = {}
                    para.name = 'game_record'
                    para.from = this.$route.path
                    this.setRouterHist(para)
 					this.$router.push({name: 'game_record'})              
 				})
 			},
 			//个人信息
 			personalInformati(){
                var goRecord = new Hammer(this.$refs.selfInf)
                goRecord.on('tap',(e) => {
                    this.setFundPwd(this.fundPwd)
                    this.$router.push({name: 'personal_information'})              
                })
            },
            gotoRecharge(){
                var goRecord = new Hammer(this.$refs.recharge)
                goRecord.on('tap',(e) => {
                    var para = {}
                    para.name = 'recharge'
                    para.from = this.$route.path
                    this.setRouterHist(para)
                    this.$router.push({name: 'recharge'})              
                })
            },
            kaijiangOpen(){
 				var kaijiangOpen = new Hammer(this.$refs.kaijiangOpen)
 				kaijiangOpen.on('tap',(e) => {
                    var para = {}
                    para.name = 'game_record'
                    para.from = this.$route.path
                    this.setRouterHist(para)
 					this.$router.push({name: 'game_record'})              
 				})
 			},
            moneyout(){
                var moneyout = new Hammer(this.$refs.moneyout)
                moneyout.on('tap',(e) => {
                    var para = {}
                    para.name = 'money_out'
                    para.from = this.$route.path
                    this.setRouterHist(para)
                    this.$router.push({name: 'money_out'})              
                })
            },
            async initData(){
                const [popup, openListData, user] = await Promise.all([
                        api.ajax('notice/findPopup', {}),
                        api.ajax('lottery/num/pageOpenHistory', {"classId":"1","pageSize":"1","pageNumber":"1"}),
                        api.ajax('user/findInfo', {}),
                    ])
                if(popup && popup.code == '0'){
                    if(popup.data){
                        this.sysNotice = popup.data.content
                        this.$nextTick(()=>{
                            this.runAnimate()
                        })
                    }
                }
                if(openListData && openListData.code == "0"){
                    if(openListData.data && openListData.data.list){
                        console.log(openListData.data.list)
                        this.qihao = openListData.data.list[0].titleCode
                        this.haoma = openListData.data.list[0].openNum.split(",")
                    }
                }
                if(user && user.code == "0"){
                    if(user.data){
                        this.balance = user.data.balance/100
                        this.fundPwd = user.data.fundPwd
                    }
                }
            }

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
 	.load-more-wrapper {
 		height:640px;
 		position: absolute;
 		top: 40px;
 		left: 0;
 		bottom: 100px;
 		width: 100%;
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
 	.backcolor{
 		background-color: rgb(234, 234, 234);
 	}
 	.phone-top{
 		height: 20px;
 		background-color: rgb(238, 80, 63);
 	}
 	.nav{
 		height: 257px;
 		background-color: orange;
 		display: block;
 	}
 	.nav-top{
 		height: 50px;
 		border: 1px solid transparent;
 		border-radius: 0 0 10px 10px;
 		background-color: rgb(244, 244, 244);
 	}
 	.show-money{
 		width: 37%;
        height: 28px;
        float: left;
        background-color: white;
        border-radius: 14px;
        margin: 11px 0 11px 3%;
        font-size: 13px;
        text-align: left;
 	}
    .nav-button {
        height: 50px;
        float: right;
        width: 55%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        margin-right: 2%;
    }
 	.nav-button li{
 		list-style: none;
 		float: right;
 		font-size: 9px;
 		font-family: KaiTi;
 		margin-top: 2px;
 	}
 	.nav-button img{
 		width: 30px;
 	}
 	.nav-bottom{
 		height: 39px;
 		background-color: rgba(0, 0, 0, 0.8);
 		position: relative;
 	}
 	.show-news-icon{
 		height: 39px;
 		width: 75px;
 		float: left;
 		background-color: rgb(51, 33, 33);
 		font-size: 12px;
 		color: white;
 		line-height: 39px;
 		display: inline-block;
 		z-index: 10;
 		position: relative;
 	}
 	.news{
 		color: white;
 		line-height: 39px;
 		font-size: 12px;
 		position: absolute;
 		left: 75px;
 		white-space: nowrap;
 	}
 	.lottery-open{
 		height: 76px;
 		background-color: white;
 	}
 	.lottery-open:hover{
 		background-color: rgb(229, 229, 229);
 	}
 	.open-icon{
 		height: 76px;
 		width: 55px;
 		display: inline-block;
 		float: left;
 		font-size: 9px;
 	}
 	.open-class{
 		width: 95%;
 		margin: 0 auto;
 	}
 	.open-icon img{
 		height: 50px;
 		float: left;
 		margin-top: 4px;
 		margin-left: 5px;
 	}
 	.open-num{
 		float: left;
 		text-align: left;
 		margin: 11px 0 0 15px;
 	}
 	.open-class-font{
 		font-size: 14px;
 		font-weight: bold;
 	}
 	.lottery-number{
 		list-style: none;
 		float: left;
 		height: 25px;
 		width: 25px;
 		border-radius: 50%;
 		background-color: red;
 		color: white;
 		font-size: 15px;
 		font-weight: bold;
 		text-align: center;
 		line-height: 25px;
 		margin: 4px 6px 0 0;
 	}
 	.openstyle{
 		float: left;
 		line-height:22px;
 		margin-left:5px;
 		color: rgb(77, 77, 77);
 	}
 	.swipe-height {
 		height: 166px;
 	}

 	.swipe-img {
 		height: 166px;
 		width: 100%;
 	}

 	@keyframes notice {
 		0% { transform: translateX(350px)}
 		100% { transform: translateX(-100%)}
 	}

 	.notice-animation {
 		animation : notice 20s linear 0s infinite;
 	}

 	.notice-text {
 		background-color: rgb(238, 80, 63);
 		border-radius: 14px;
 		font-size: 12px;
 		display: inline-block;
 		height: 19px;
 		line-height: 19px;
 		width: 60px;
 	}

    .balance-cls {
        line-height: 28px;
        padding-left: 5px;
    }

 </style>
