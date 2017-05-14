 <template>
 	<div class="p-r record-show" :style="{height : contentheight +'px'}" >
 		<v-touch v-on:tap="headerTap">
 			<mt-header title="提现">
 				<mt-button slot="left">
 					<mt-button icon="back">返回</mt-button>
 					<mt-button icon="more" slot="right"></mt-button>
 				</mt-header>
 			</v-touch>
 			<div class="bank-card">
 				<div class="bank-class">
 					<span class="f-15 chuxuka">到账银行卡</span>
 					<span class="f-15 bank-name">建设银行（9527）<p class="change-num grag-128">提现到建设银行</p></span>
 				</div>
				<span class="jine f-15">提现金额</span>
				<div class="jine_middle f-24">¥<input type="number" class="input-class moneyInput"></div>
				<div class="jine_right f-15">提现金额不得低于100元</span>
 			</div>
 			<v-touch v-on:tap="sureRecharge" class="sure-recharge-touch">
 				<div class="surerech f-18">确认提现</div>
 			</v-touch>
 		</div>
 	</template>
 	<script lang="babel">
 		import api from '../../api'
 		import { mapActions } from 'vuex'
 		import { winHeight, closest } from "../../tools/command"
 		import { MessageBox } from 'mint-ui'
 		import { Toast } from 'mint-ui'
 		import { Field  } from 'mint-ui'
 		export default {
 			data() {
 				return {
 					list : {},
 					form: {
 					},
 				}
 			},
 			computed : {
 				contentheight() {
 					return winHeight()
 				},
 			},
 			methods: {
 				async getRecord() {
 					var data = await api.ajax('record/pageLotteryBet', this.form)
 					if(data && data.code == '0'){
 						this.list = data.data
 						this.$refs.numLoadMore.scrollReresh()
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
                              const row = this.$store.state.user.routerHist
 					if(closest(target, "div.is-left")){
 						this.$router.push(row["money_out"] || "/")       
 					}
 				},
 				sureRecharge(e){
 					console.log(e.target)
        			// var cai = 'cai' +  this.list.classId
          			//this.setCurrentLottery(cai)
          			//this.$router.push({name: 'selectnum'})
          		},
          	},
          }
      </script>
      <style scoped>
      	.record-show{
      		background-color: rgb(243, 243, 243);
      	}
      	.bank-card{
      		margin-top: 21px;
      		padding-top: 23px;
      		height: 229px;
      		width: 95%;
      		padding-left: 5%;
      		background-color: white;
      		border-bottom: 1px solid rgb(217, 217, 217);
      		border-top: 1px solid rgb(217, 217, 217)
      	}
      	.bank-class{
      		height: 62px;
      		border-bottom: 1px solid rgb(217, 217, 217);
      		margin-left: 5%;
      	}
      	.chuxuka{
      		display: inline-block;
      		float: left;
      		width: 86px;
      		font-weight: bold;
      	}
      	.bank-name{
      		display: inline-block;
      		float: left;
      		color: rgb(87, 107, 149);
      		position: relative;
      		left: 5px;
      	}
      	.change-num{
      		line-height: 40px;
      	}
      	.input-class{
      		border-radius: 0;
      		border: 0;
      		outline: 0;
      		font-size: inherit;
      	}
      	.jine{
      		display: inline-block;
      		height: 46px;
      		line-height: 46px;
      		width: 86px;
      		font-weight: bold;
      		margin-left: 5%;
      	}
      	.jine_middle {
      		height: 60px;
      		line-height: 50px;
      		margin-left: 5%;
      		font-size: 25px;
      		border-bottom: 1px solid rgb(217, 217, 217);
      	}
      	.moneyInput {
      		width: 80%;
      		font-size: 30px;
      		margin-left: 10px;
      		color: #f00;
      	}
      	.jine_right {
      		padding-top: 20px;
    		height: 62px;
    		margin-left: 5%;
      	}
      	.sure-recharge-touch{
      		width: 95%;
      	}
      	.surerech{
	 		height: 37px;
	 		width: 100%;
	 		border: 1px solid rgb(46, 167, 44);
	 		text-align: center;
	 		color: white;
	 		background-color: rgb(114, 223, 114);
	 		line-height: 37px;
	 		border-radius: 4px;
      	}
      </style>
