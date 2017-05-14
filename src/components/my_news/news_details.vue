<template>
	<div class="p-r">
		<v-touch v-on:tap="headerTap">
			<mt-header title="我的消息详情">
				<div slot="left">
					<mt-button icon="back">返回</mt-button>
				</div>    
			</mt-header>
		</v-touch>
		<loadmore ref="numLoadMore" :style="{height : contentheight +'px' }" class="p-r">
			<div class="details-size">
				<p class="f-20 t-c">{{list.title}}</p>
				<p class="f-15 t-c">{{list.addTime}}</p>
				<p class="f-15 m-t-10">{{list.msgText}}</p>
			</div>
		</loadmore>
		<div class="sure-recharge-touch" @touchstart.stop.prevent="sureRecharge">
			<div  class="surerech f-14">删除</div>
		</div>
	</div>
</template>
<script lang="babel">
	import api from '../../api'
	import { winHeight, closest } from "../../tools/command"
	import { MessageBox , Toast } from 'mint-ui'
	import loadmore from '../common/loadmore'
	export default {
		mounted(){
			var datas = this.$store.state.lottery.bettingRecord;
			this.form.id = datas.id;
			this.sureChangePass()
		},
		data() {
			return {
				form: {
					id: '',
				},
				list : {},
			}
		},
		components : {
			loadmore
		},
		computed : {
			contentheight() {
				return winHeight() -90
			},
		},
		methods: {
			async sureChangePass() {
				var data = await api.ajax('msg/findMsgDetail', this.form)
				if(data && data.code == '0'){
					this.list = data.data
					this.$nextTick(() => {
						this.$refs.numLoadMore.scrollReresh()
					})
				} else {
					Toast({
						message: '操作失败，'+data.msg,
						position: 'middle',
						duration: 2000
					})
				}
			},
			headerTap(e){
				var target = e.target
				if(closest(target, "div.is-left")){
					this.$router.push({name : "my_news"})       
				}
			},
			sureRecharge(e){
				console.log(e.target)
				MessageBox.confirm('您确认要删除此记录吗？').then(action => {
                    this.deleteThisNews()
                },() => {
                    console.log("cancel")
                });
			},
			async deleteThisNews(){
				var formapply = {
					ids: this.form.id,
				}
				var data = await api.ajax('msg/delete', formapply)
				if(data && data.code == '0'){
					this.$router.push({name : "my_news"})  
				} else {
					Toast({
						message: '操作失败，'+data.msg,
						position: 'middle',
						duration: 2000
					})
				}
			},
		},
	}
</script>
<style scoped>
	.details-size{
		width: 90%;
		padding: 10px 5% 0;
	}
	.sure-recharge-touch{
		padding-top: 5px;
		height: 45px;
		width: 90%;
		margin: 0 auto;
	}
	.surerech{
		height: 37px;
		width: 100%;
		border: 1px solid rgb(189, 38, 37);
		text-align: center;
		color: white;
		background-color: rgb(238, 80, 63);
		line-height: 37px;
		border-radius: 4px;
	}
</style>
