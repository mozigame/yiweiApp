<template>
	<div ref="seeDetails">
		<div class="navsize" v-for="(item, index) in datas" :listdata="index">
			<span class="f-15 news-title">{{item.title}}</span>
			<img src="../../images/xiayiji.png" class="img-class">
			<span class="f-12 news-time grag-128">{{item.addTime}}</span>
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
		name : "past_nav",
		props: {
			datas: Array,
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
        			if(target.className == ""){
        				return
        			}
        			this.getDom(target)
        			this.bettingRecord(that.datasdom)
        			this.$router.push({name: 'news_details'})
        		})
        	},
        	getDom(e){
        		if(e.className == 'navsize'){
        			var dataIndex = e.getAttribute("listdata")
        			console.log(dataIndex)
        			this.datasdom = this.datas[dataIndex]
        			return console.log(this.datasdom)
        		}else{
        			var domsfather = e.parentElement
        			this.getDom(domsfather)
        		}
        	},
		},
	}
</script>
<style scoped>
	.navsize{
		height: 40px;
		line-height: 40px;
		width: 92%;
		margin: 8px 4% 0;
		border: 1px solid rgb(220, 220, 220);
		box-sizing: border-box;
	}
	.img-class{
		float: right;
		height: 20px;
		margin-top: 10px;
		margin-right: 10px;
	}
	.news-title{
		padding-left: 10px;
	    display: inline-block;
	    width: 45%;
	    height: 40px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.news-time{
		float: right;
		margin-right: 7px;
	}
</style>