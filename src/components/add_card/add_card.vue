 <template>
      <div class="p-r record-show" :style="{height : contentheight +'px'}" >
      	<v-touch v-on:tap="headerTap">
      		<mt-header title="银行卡">
      			<mt-button slot="left">
      				<mt-button icon="back">返回</mt-button>
      				<mt-button icon="more" slot="right"></mt-button>
      			</mt-header>
      		</v-touch>
      		<div class="bank-card f-15" ref="addCard">
      			<img src="../../images/dajiahao.png" >添加银行卡
      		</div>
                  <ul v-for="item in list">
            		<li class="cardDetail">
                             <img src="../../images/jiansheyinhang.png"><div class="detail_top">建设银行</div><div class="detail_middle">储蓄卡</div><div class="detail_bottom">{{filter(item.account)}}</div>  
                        </li>
                        <li class="cardDetail">
                             <img src="../../images/zhongguoyinhang.png"><div class="detail_top">中国银行</div><div class="detail_middle">储蓄卡</div><div class="detail_bottom">**** **** **** 5689</div>       
                        </li>
                  </ul>
      	</div>
      </template>
<script lang="babel">
	import api from '../../api'
	import { mapActions, mapGetters } from 'vuex'
	import { winHeight, closest } from "../../tools/command"
	import { MessageBox,Toast,Field } from 'mint-ui'
      import loadmore from '../common/loadmore'
      import Hammer from 'hammerjs'
	export default {
            components : {
                 loadmore
            },
		data() {
			return {
				list : {},
				form: {
				},
			}
		},
            mounted(){
                  var addCard = new Hammer(this.$refs.addCard)
                  addCard.on('tap',(e) => {
                       const target = e.target
                       this.$router.push({name : "bind_card"})
                  })
                  this.getCardList()
            },
		computed : {
			contentheight() {
				return winHeight()
			},
		},
		methods: {
			async getCardList() {
				var data = await api.ajax('bank/listCards', this.form)
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
				if(closest(target, "div.is-left")){
					this.$router.push({name : "personal_information"})       
				}
			},
                  filter(val){
                        var newVal_before = ""
                        var newVal_after = ""
                        for (var i = 0; i < (parseInt(val.length/4) -1); i++) {
                              newVal_after += "**** "
                        }
                        if (val.length%4 ==0) {
                              newVal_before = ""
                        } else if (val.length%4 == 1) {
                              newVal_before = "* "
                        } else if (val.length%4 == 2) {
                              newVal_before = "** "
                        } else if (val.length%4 == 3) {
                              newVal_before = "*** "
                        }
                        return newVal_before + newVal_after + val.slice(-4)
                  },
    		
            }
      }
</script>
<style scoped>
	.record-show{
		background-color: rgb(243, 243, 243);
	}
	.bank-card{
		margin: 10px 0;
		padding-top: 15px;
		height: 30px;
		width: 95%;
		padding-left: 5%;
		background-color: white;
		border-bottom: 1px solid rgb(217, 217, 217);
		border-top: 1px solid rgb(217, 217, 217)
	}
      .bank-card img {
            width: 12px;
            margin-right: 10px;
      }
      .cardDetail {
            position: relative;
            color: #fff;
      }
      .cardDetail img {
            width: 95%;
            margin: 0 8px 5px 8px;
      }
      .detail_top {
            font-size: 15px;
            position: absolute;
            top: 15px;
            left: 64px;
      }
      .detail_middle {
            font-size: 12px;
            position: absolute;
            top: 35px;
            left: 64px;  
      }
      .detail_bottom {
            font-size: 24px;
            position: absolute;
            top: 65px;
            right: 45px;
      }
</style>
