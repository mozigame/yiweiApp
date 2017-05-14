 <template>
      <div class="p-r record-show" :style="{height : contentheight +'px'}" >
      <v-touch v-on:tap="headerTap">
            <mt-header title="添加银行卡">
                  <mt-button slot="left">
                        <mt-button icon="back">返回</mt-button>
                        <mt-button icon="more" slot="right"></mt-button>
                  </mt-header>
            </v-touch>
            <div class="top">请绑定持卡人本人的银行卡</div>
            <div class="bank-card">
                  <div class="jine_middle f-24">持卡人<input class="input-class moneyInput" v-model="cardOwner"></div>
                  <div class="jine_middle f-24">发卡行<input class="input-class moneyInput" v-model="cardAddress"></div>
                  <div class="jine_middle f-24">卡号<input class="input-class moneyInput" type="number" v-model="cardNumber"></div>
                  <div class="jine_middle f-24">资金密码<input class="input-class moneyInput" type="password" v-model="cardPwd"></div>
            </div>
            <v-touch v-on:tap="sureBind" class="sure-recharge-touch">
                  <div class="surerech f-18">确认添加</div>
            </v-touch>
      </div>
</template>
<script lang="babel">
      import api from '../../api'
      import { mapActions, mapGetters } from 'vuex'
      import { winHeight, closest } from "../../tools/command"
      import { MessageBox } from 'mint-ui'
      import { Toast } from 'mint-ui'
      import { Field  } from 'mint-ui'
      export default {
            mounted(){
                  
            },
            data() {
                  return {
                        list : {},
                        cardOwner: "",
                        cardAddress: "",
                        cardNumber: "",
                        cardPwd: "",
                  }
            },
            computed : {
                  contentheight() {
                        return winHeight()
                  },
            },
            methods: {
                  headerTap(e){
                        var target = e.target
                        if(closest(target, "div.is-left")){
                              this.$router.push({name : "personal_information"})       
                        }
                  },
                  async sureBind(){
                        var parameter = {}
                        parameter.bankName = this.cardAddress
                        parameter.kaihuName = this.cardOwner
                        parameter.account = this.cardNumber
                        parameter.fundPwd = this.cardPwd
                        var data = await api.ajax('bank/addCard', parameter)
                        if(data && data.code == '0'){
                              console.log(success)
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
      .record-show{
            background-color: rgb(243, 243, 243);
      }
      .top {
            height: 49px;
            padding-left: 4.2%;
            line-height: 70px;
            font-size: 15px;
            color: rgb(128, 128, 128);
      }
      .bank-card{
            height: 179px;
            width: 95.8%;
            padding-left: 4.2%;
            background-color: white;
            border-bottom: 1px solid rgb(217, 217, 217);
      }
      .jine_middle {
            font-weight: bold;
            height: 44px;
            line-height: 44px;
            font-size: 15px;
            border-bottom: 1px solid rgb(217, 217, 217);
      }
      .input-class{
            border-radius: 0;
            border: 0;
            outline: 0;
            font-size: inherit;
      }
      .moneyInput {
            width: 80%;
            font-size: 15px;
            margin-left: 10px;
      }
      .sure-recharge-touch{
            width: 90%;
            margin-top: 26px;
            padding-left: 4.5%;
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
