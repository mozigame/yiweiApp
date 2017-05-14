<template>
	<div>
		<div class="listSize" v-for="(item, index) in datas">
			<div class="qihao">
				<span class="f-12 grag-128 f-l">{{item.titleCode}}期</span>
				<span class="f-12 grag-128 f-r">{{item.openTime}}</span>
			</div>
			<div class="open-nums m-t-10">
				<span :class="{ numfirst: index=='0'? true:false }">
					<span class="nums m-b-10" v-for="nums in item.openNum.split(',')">{{nums}}</span>
				</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name : "past_nav",
		props: {
			datas: Array,
		},
		data(){
			return {
			}
		},
		methods : {
		},
	}
</script>
<style scoped>
	.listSize{
		width: 95%;
		background-color: white;
		margin: 5px auto;
	}
	.qihao{
		height: 34px;
		line-height: 34px;
		width: 90%;
		margin: 0 auto;
		border-bottom: 1px solid  rgb(243, 243, 243);
	}
	.f-r{
		float: right
	}
	.f-l{
		float: left
	}
	.open-nums{
		text-align: center;
	}
	.nums{
		margin-right: 3px;
		margin-left: 3px;
		display: inline-block;
		height: 30px;
		width: 30px;
		border-radius: 50%;
		line-height: 30px;
		text-align: center;
		border: 1px solid rgb(232, 232, 232);
		color: rgb(191, 60, 41);
	}
	.numfirst span{
		background-color: rgb(236, 77, 53);
		border: 1px solid rgb(191, 60, 41) !important;
		color: white !important;
	}
</style>