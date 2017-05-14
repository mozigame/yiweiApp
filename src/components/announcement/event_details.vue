<template>
	<div class="p-r">
		<v-touch v-on:tap="headerTap">
			<mt-header title="活动公告详情">
				<div slot="left">
					<mt-button icon="back">返回</mt-button>
				</div>    
			</mt-header>
		</v-touch>
		<loadmore ref="numLoadMore" :style="{height : contentheight +'px' }" class="p-r">
		<div class="details-size">
				<p class="f-20 t-c">{{list.title}}</p>
				<p class="f-15 t-c">{{list.addTime}}</p>
				<p class="f-15 m-t-10">{{list.content}}</p>
			</div>
		</loadmore>
	</div>
</template>
<script lang="babel">
	import api from '../../api'
	import { winHeight, closest } from "../../tools/command"
	import { Toast } from 'mint-ui'
	import loadmore from '../common/loadmore'
	export default {
		mounted(){
			this.list = this.$store.state.lottery.bettingRecord;
			this.$nextTick(() => {
				this.$refs.numLoadMore.scrollReresh()
			})
		},
		data() {
			return {
				list : {},
			}
		},
		components : {
			loadmore
		},
		computed : {
			contentheight() {
				return winHeight() -40
			},
		},
		methods: {
			headerTap(e){
				var target = e.target
				if(closest(target, "div.is-left")){
					this.$router.push({name : "announcement"})       
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
</style>
