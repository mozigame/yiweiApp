<template>
	<div ref="seeDetails" >
		<div class="record-list" v-for="(item, index) in datas.list" :listdata="index">
			<div class="list-back" :class="{ underline: (index+1)==datas.list.length?false:true }">
				<div class="name-describe">
					<span class="f-14" :class="{ 'bluecolor-font': item.bingoFlag=='1'? true:false}">{{item.className}}</span>
					<img v-if=" item.bingoFlag=='3'? true:false " class="zuihao" src="../../images/zhuihao.png">
					<p class="gray-color f-12">{{item.addTime}}</p>
				</div>
				<img src="../../images/xiayiji.png" class="img-class">
				<div class="state-describe">
					<span class="f-14" :class="{ 'redcolor-font': item.bingoFlag=='1'? true:false }">
						<span v-if="item.bingoFlag=='0'">等待开奖</span>
						<span v-if="item.bingoFlag=='1'">已中奖</span>
						<span v-if="item.bingoFlag=='2'">未中奖</span>
						<span v-if="item.bingoFlag=='3'">中奖追停</span>
						<span v-if="item.bingoFlag=='4'">撤单</span>
					</span>
					<p class="gray-color f-12">已支付{{item.amount/100}}元</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapActions } from 'vuex'
	import api from '../../api'
	export default {
		mounted(){
			this.gotodetail()
        },
        name : "record-list",
        props: {
        	datas: Object,
        },
        data(){
        	return {
        		datasdom:{},
        	}
        },
        methods : { 
        	...mapActions({
        		bettingRecord : 'bettingRecord',
        	}),

        	gotodetail(value){
        		var that =this
        		var godetail = new Hammer(this.$refs.seeDetails)
        		godetail.on('tap',(e) => {
        			const target = e.target
        			this.getDom(target)
        			this.bettingRecord(that.datasdom)
        			this.$router.push({name: 'betting_details'})
        		})
        	},
        	getDom(e){
        		var domsfather = e.parentElement
        		if(domsfather.className == 'record-list'){
        			var dataIndex = domsfather.getAttribute("listdata")
        			console.log(dataIndex)
        			this.datasdom = this.datas.list[dataIndex]
        			return
        		}else{
        			this.getDom(domsfather)
        		}
        	},
        },
    }
</script>
<style scoped>

	.record-list{
		height: 65px;
		width: 100%;
		background-color: white;
		border: 1px solid transparent;
	}
	.list-back{
		height: 100%;
		width: 95%;
		margin: auto;
	}
	.name-describe{
		height: 30px;
		float: left;
		margin-top: 18px;
	}
	.name-describe span{
		letter-spacing :-5;
	}
	.img-class{
		float: right;
		height:20px;
		margin-top: 22px;
	}
	.state-describe{
		height: 30px;
		float: right;
		margin-top: 18px;
		margin-right: 10px;
		text-align: right;
	}
	.gray-color{
		font-size: 12px;
		color: rgb(182, 182, 182);
	}
	.underline{
		border-bottom: 1px solid rgb(221, 221, 221);
	}
	.zuihao{
		display: inline-block;
		width: 30px;
		position: relative;
		left: 2px;
		top: 2px;
	}
	.bluecolor-font{
		color:rgb(142, 199, 237);
	}
	.redcolor-font{
		color:red;
	}
</style>