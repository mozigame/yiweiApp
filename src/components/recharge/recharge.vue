 <template>
  <div class="p-r record-show" :style="{height : backheight +'px'}" >
   <v-touch v-on:tap="headerTap">
    <mt-header title="充值">
        <div slot="left">
            <mt-button icon="back">返回</mt-button>
        </div>
    </mt-header>
  </v-touch>
  <loadmore ref="numLoadMore" :style="{height : contentheight +'px' }" class="backcolor p-r">
    <div class="bank-card">
      <div class="bank-class">
        <span class="f-15 chuxuka">储蓄卡</span>
        <span class="f-15 bank-name">建设银行（9527）</span>
        <p class="change-num grag-128 f-15">单日交易限额 ¥ 10000.00</p>
      </div>
      <div class="f-15">
        <span class=" jine">金额（元）</span>
        <span><input class="input-class" type="number" placeholder="请输入金额"></span>
      </div>
    </div>
    <v-touch v-on:tap="sureRecharge" class="sure-recharge-touch">
      <div class="surerech f-14">确认充值</div>
    </v-touch>
  </loadmore>
</div>
</template>
<script lang="babel">
  import api from '../../api'
  import { mapActions } from 'vuex'
  import { winHeight, closest } from "../../tools/command"
  import { MessageBox } from 'mint-ui'
  import { Toast } from 'mint-ui'
  import { Field  } from 'mint-ui'
  import loadmore from '../common/loadmore'
  export default {
    data() {
      return {
        list : {},
        form: {
        },
      }
    },
    components : {
      loadmore
    },
    computed : {
      backheight() {
        return winHeight() 
      },
      contentheight() {
        return winHeight() -40
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
          this.$router.push(row["recharge"] || "/")       
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
          margin-top: 15px;
          padding-top: 15px;
          height: 103px;
          width: 95%;
          padding-left: 5%;
          background-color: white;
          border-bottom: 1px solid rgb(217, 217, 217);
          border-top: 1px solid rgb(217, 217, 217)
        }
        .bank-class{
          height: 57px;
          border-bottom: 1px solid rgb(217, 217, 217)
        }
        .chuxuka{
          display: inline-block;
          float: left;
          width: 84px;
          margin-top: 5px;
        }
        .bank-name{
          color: rgb(87, 107, 149);
          position: relative;
          left: 5px;
        }
        .change-num{
          line-height: 40px;
          margin-left: 89px;
        }
        .input-class{
          border-radius: 0;
          border: 0;
          outline: 0;
          font-size: inherit;
        }
        .jine{
          display: inline-block;
          line-height: 45px;
          width: 86px;
        }
        .sure-recharge-touch{
          width: 90%;
          margin: 30px auto 0;
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
