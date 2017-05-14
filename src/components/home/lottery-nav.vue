 <template>
 	<div style="background-color:white;touch-action:none;" ref="lotteryNavElem">
 		<div class="lottery-list">
 			<div class="lottery-class red-color">
 				时时彩
 			</div>
 			<div class="lottery-name">
 				<div class="lottery-little undline" name="cai1">
 					<img class="imgodd" src="../../images/chongqinshishicai.png">
 					<div class="lottery-describe">
 						<p class="f-12 class-name-color">{{data}}</p>
 						<p class="f-9 grag-color">最高加奖100%</p>
 					</div>
 					<div class="separate-line"></div>
 				</div>
 				<div class="lottery-little undline" name="cai2">
 					<img class="imgeven" src="../../images/jiangxishishicai.png">
 					<div class="lottery-describe">
 						<p class="f-12 class-name-color">江西时时彩</p>
 						<p class="f-9 grag-color">返奖率达60%</p>
 					</div>
 				</div>
 				<div class="lottery-little undline" name="cai6" >
 					<img class="imgodd" src="../../images/xinjiangshishicai.png">
 					<div class="lottery-describe">
 						<p class="f-12 class-name-color">新疆时时彩</p>
 						<p class="f-9 grag-color">最高加奖100%</p>
 					</div>
 					<div class="separate-line"></div>
 				</div>
 				<div class="lottery-little undline" name="cai7">
 					<img class="imgeven" src="../../images/tianjinshishicai.png">
 					<div class="lottery-describe">
 						<p class="f-12 class-name-color">天津时时彩</p>
 						<p class="f-9 grag-color">最高加奖100%</p>
 					</div>
 				</div>
 				<div class="lottery-little" name="cai3">
 					<img class="imgodd" src="../../images/heilongjiangshishicai.png">
 					<div class="lottery-describe">
 						<p class="f-12 class-name-color">黑龙江时时彩</p>
 						<p class="f-9 grag-color">最高加奖100%</p>
 					</div>
 					<div class="separate-line"></div>
 				</div>
 			</div>
 		</div>
 		<div style="height: 5px;background-color: rgb(234, 234, 234); clear: both"></div>
 		<div class="lottery-list">
 			<div class="lottery-class blue-color">
 				分分彩
 			</div>
 			<div class="lottery-name">
 				<div class="lottery-little undline" name="cai12">
 					<img class="imgodd" src="../../images/fenfencai.png">
 					<div class="lottery-describe">
 						<p class="f-12 class-name-color">分分彩</p>
 						<p class="f-9 grag-color">最高加奖100%</p>
 					</div>
 					<div class="separate-line"></div>
 				</div>
 				<div class="lottery-little undline" name="cai15">
 					<img class="imgeven" src="../../images/sanfencai.png">
 					<div class="lottery-describe">
 						<p class="f-12 class-name-color">三分彩</p>
 						<p class="f-9 grag-color">返奖率达60%</p>
 					</div>
 				</div>
 				<div class="lottery-little" name="cai11">
 					<img class="imgodd" src="../../images/wufencai.png">
 					<div class="lottery-describe">
 						<p class="f-12 class-name-color">五分彩</p>
 						<p class="f-9 grag-color">最高加奖100%</p>
 					</div>
 					<div class="separate-line"></div>
 				</div>
 				<div class="lottery-little" name="cai13">
 					<img class="imgeven" src="../../images/beijingsaiche.png">
 					<div class="lottery-describe">
 						<p class="f-12 class-name-color">北京赛车</p>
 						<p class="f-9 grag-color">最高加奖100%</p>
 					</div>
 				</div>
 			</div>
 		</div>
 		<div style="height: 5px;background-color: rgb(234, 234, 234); clear: both"></div>
 		<div class="lottery-list">
 			<div class="lottery-class violet-color">
 				乐透彩
 			</div>
 			<div class="lottery-name">
 				<div class="lottery-little undline" name="cai8">
 					<img class="imgodd" src="../../images/guangdong11xuan5.png">
 					<div class="lottery-describe">
 						<p class="f-12 class-name-color">广东11选5</p>
 						<p class="f-9 grag-color">最高加奖100%</p>
 					</div>
 					<div class="separate-line"></div>
 				</div>
 				<div class="lottery-little undline" name="cai9">
 					<img class="imgeven" src="../../images/jiangxi11xuan5.png">
 					<div class="lottery-describe">
 						<p class="f-12 class-name-color">江西11选5</p>
 						<p class="f-9 grag-color">返奖率达60%</p>
 					</div>
 				</div>
 				<div class="lottery-little" name="cai10">
 					<img class="imgodd" src="../../images/shandong11xuan5.png">
 					<div class="lottery-describe">
 						<p class="f-12 class-name-color">山东11选5</p>
 						<p class="f-9 grag-color">最高加奖100%</p>
 					</div>
 					<div class="separate-line"></div>
 				</div>
 			</div>
 		</div>
 		<div style="height: 5px;background-color: rgb(234, 234, 234); clear: both"></div>
 		<div class="lottery-list">
 			<div class="lottery-class green-color">
 				低频彩
 			</div>
 			<div class="lottery-name">
 				<div class="lottery-little undline" name="cai14">
 					<img class="imgodd" src="../../images/xianggangliuhecai.png">
 					<div class="lottery-describe">
 						<p class="f-12 class-name-color">香港六合彩</p>
 						<p class="f-9 grag-color">最高加奖100%</p>
 					</div>
 					<div class="separate-line"></div>
 				</div>
 				<div class="lottery-little undline" name="cai4">
 					<img class="imgeven" src="../../images/fucai3D.png">
 					<div class="lottery-describe">
 						<p class="f-12 class-name-color">福彩3D</p>
 						<p class="f-9 grag-color">返奖率达60%</p>
 					</div>
 				</div>
 				<div class="lottery-little" name="cai5">
 					<img class="imgodd" src="../../images/ticaipailei3.png">
 					<div class="lottery-describe">
 						<p class="f-12 class-name-color">体彩排列3</p>
 						<p class="f-9 grag-color">最高加奖100%</p>
 					</div>
 					<div class="separate-line"></div>
 				</div>
 			</div>
 		</div>
 		<div style="height: 5px;background-color: rgb(234, 234, 234); clear: both"></div>
 	</div>
 </template>
 <script lang="babel">
 	import { mapActions } from 'vuex'
 	import { winHeight, isPassive } from "../../tools/command"
 	export default {
 		//接受参数
 		props: {
 			//预设数组
 			// data: Array,
 			data: String,
 			onlyOpenOne: {
 				type: String,
 				default: 'N'
 			},
 			base: {
 				type: String,
 				default: ''
 			}
 		},
 		data() {
 			return {
 				list : [],
 				index : 0,
 			}
 		},
 		mounted(){
 			var cai1mc = new Hammer(this.$refs.lotteryNavElem)
            cai1mc.on('tap',(e) => {
                const target = e.target
                const tagName = target.tagName.toLowerCase()
                if('img' == tagName){
                	const tname = target.parentElement.getAttribute("name")
                	if(tname){
                		this.gotoSelectNum(tname)
                	}
                } else if('p' == tagName){
                	const tname = target.parentElement.parentElement.getAttribute("name")
                	if(tname){
                		this.gotoSelectNum(tname)
                	}
                } else if('div' == tagName){
                    const tname = target.getAttribute("name")
                    if(tname){
                        this.gotoSelectNum(tname)
                    }
                }
                
            })
 		},
 		watch: {
 		},
        //计算属性
        computed : {
        },
        methods: {
			...mapActions({
				setCurrentLottery: 'setCurrentLottery'
			}),
        	gotoSelectNum(lotteryclass){
        		this.setCurrentLottery(lotteryclass);
        		this.$router.push({name: 'selectnum'})
        	},
        },
    }
</script>
<style scoped>
	.lottery-list{
		padding-top: 6px;
		width: 100%;
	}
	.lottery-class{
		height: 18px;
		text-align: left;
		font-size: 15px;
		font-weight: bold;
		margin-left: 2.5%;
		line-height: 18px;
		border-left: 2px solid red;
		padding-left: 5px;
	}
	.red-color{
		color: red
	}
	.blue-color{
		color: rgb(63, 93, 221);
	}
	.violet-color{
		color: rgb(235, 29, 213);
	}
	.green-color{
		color: rgb(29, 235, 29);
	}
	.lottery-name{
		float: left;
		width: 95%;
		margin: 0 2.5%;
	}
	.lottery-little{
		float: left;
		text-align: left;
		width: 50%;
		height: 76px;
	}
	.lottery-little:hover{
		background-color: rgb(249, 249, 249);
	}
	.undline{
		border-bottom: 1px solid rgb(229, 229, 229)
	}
	.imgodd{
		float: left;
		height: 50px;
		margin: 14px 0 14px 5px;
		display: inline-block;
	}
	.imgeven{
		float: left;
		height: 50px;
		margin: 14px 0 14px 15px;
		display: inline-block;
	}
	.lottery-describe{
		float: left;
		display: inline-block;
		margin-top: 25px;
		margin-left: 5px;
	}
	.separate-line{
		height: 25px;
		width: 0;
		float: right;
		border-right: 1px solid rgb(229, 229, 229);
		margin-top: 25px;
	}
	.class-name-color{
		color: rgb(77, 77, 77);
	}
</style>
