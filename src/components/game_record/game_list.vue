<template>
	<div class="backcolor" ref="goLookPast">
		<div class="game-list" v-for="(item, index) in datas.data" :class="{ underline: (index+1)==datas.data.length?false:true }">
			<span class="f-15 p-l-5">{{item.className}}</span><span class="f-12 grag-color"> &nbsp; 
			{{item.titleCode}}期 &nbsp; {{item.openTime}}</span>
			<div class="open-num-show m-t-10">
				<div :style="{width : widthnum +'px' }" class="open-num-box">
					<div class="open-number f-15" v-for="nums in item.openNum.split(',')">{{nums}}</div>
				</div>
				<div class="open-num-but">
					<div id="continuebet" class="buttonSize redbut f-15 m-b-15" :classid="item.classId">去投注</div>
					<div id="gopast" class="buttonSize graybut f-15 m-r-5 " :classid="item.classId">看往期</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapActions } from 'vuex'
	import { winWidth } from "../../tools/command"
	import api from '../../api'
	export default {
		mounted(){
			this.gotoLookPast()
		},
		name : "game-record",
		props: {
			datas: Object,
		},
		data(){
			return {
				selected : [],
				datasdom:{},
			}
		},
		computed : {
			widthnum(){
				return winWidth()*0.95 - 125
			},
		},
		methods : { 
			...mapActions({
				setCurrentLottery : 'setCurrentLottery',
				setRouterHist : 'setRouterHist',
			}),
			gotoLookPast(){
				var godetail = new Hammer(this.$refs.goLookPast)
				godetail.on('tap',(e) => {
					const target = e.target
					if(target){
						const tagid = target.id.toLowerCase()
						if(tagid == "gopast"){
							var dataId = 'cai'+target.getAttribute("classid")
							this.setCurrentLottery(dataId)
							var para = {}
							para.name = 'look_past'
							para.from = this.$route.path
							this.setRouterHist(para)
							this.$router.push({name: 'look_past'})
						}
						if(tagid == "continuebet"){
							var dataId = 'cai'+target.getAttribute("classid")
							this.setCurrentLottery(dataId)
							this.$router.push({name: 'selectnum'})
						}
					}


				})
			}
		},
	}
</script>
<style scoped>
	.backcolor{
		background-color: white;
	}
	.game-list{
		width: 95%;
		min-height: 77px;
		margin: 0 auto;
		position: relative;
		padding-top: 19px;
	}
	.open-num-show{
		width: 100%;
	}
	.open-number{
		display: inline-block;
		height: 30px;
		width: 30px;
		border-radius: 50%;
		background-color: rgb(236, 77, 53);
		margin-left: 6px;
		margin-bottom: 10px;
		border: 1px solid rgb(191, 60, 41);
		line-height: 30px;
		color: white;
		text-align: center;
	}
	.buttonSize{
		height: 28px;
		width: 58px;
		float:right;
		border-radius: 5px;
		line-height: 28px;
		text-align: center;
	}
	.open-num-box{
		display: inline-block;
	}
	.redbut{
		background-color: rgb(236, 77, 53);
		border:1px solid rgb(191, 60, 41);
		color: white;
	}
	.graybut{
		color: rgb(107, 107, 107);
		border:1px solid rgb(229, 229, 229);
	}
	.underline{
		border-bottom: 1px solid rgb(221, 221, 221);
	}
	.open-num-but{
		width: 125px;
		float:right;
	}
</style>