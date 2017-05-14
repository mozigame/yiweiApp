<template>
  <div class="p-r">
    <v-touch v-on:tap="headerTap">
      <mt-header title="修改资料">
        <div slot="left">
          <mt-button icon="back">返回</mt-button>
        </div>    
      </mt-header>
    </v-touch>
    <loadmore ref="numLoadMore" :style="{height : contentheight +'px' }" class="backcolor p-r">
      <div class="work-area">
        <div class="select-but" ref="toggleButton">
          <div id="loginPass" class="unselect-type f-12 divd-line" :class="{ 'select-type': butStyle}">修改登录密码</div>
          <div id="moneyPass" class="unselect-type f-12" :class="{ 'select-type': !butStyle}">修改资金密码</div>
        </div>
        <p class="f-12 describe-class">
          <span v-if="butStyle">旧管理密码</span>
          <span v-else>旧资金密码</span>：
          <input class="input-class" type="password" v-model="list.oldKey">
        </p>
        <p class="f-12 describe-class">
          <span v-if="butStyle">新管理密码：</span>
          <span v-else>新资金密码：</span>
          <input class="input-class" type="password" v-model="list.key">
        </p>
        <p class="f-12 describe-class">确认新密码：<input class="input-class" type="password" v-model="key"></p>
      </div>
      <v-touch v-on:tap="sureRecharge" class="sure-recharge-touch">
        <div class="surerech f-14">确认修改</div>
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
  mounted(){
    this.tapToggle()
  },
  data() {
    return {
      list : {
        key: '',
        oldKey: '',
      },
      key: '',
      form: {},
      butStyle: true,
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
    tapToggle(){
      var tapbut = new Hammer(this.$refs.toggleButton)
      tapbut.on('tap',(e) => {
        const target = e.target
        const tagName = target.id
        if('loginPass' == tagName){
          this.butStyle = true;
          this.clearInformation()
        }
        if('moneyPass' == tagName){
          this.butStyle = false;
          this.clearInformation()
        }
      })
    },
    clearInformation(){
      this.list = {
        key:'',
        oldKey:'',
      }
      this.key = ''
    },
    async sureChangePass() {
      var sureUrl = ''
      if(this.butStyle){
        sureUrl = 'user/updateLoginPwd'
      }else{
        sureUrl = 'user/updateFundPwd'
      }
      var data = await api.ajax(sureUrl, this.list)
      if(data && data.code == '0'){
        Toast({
          message: data.msg,
          position: 'middle',
          duration: 3000
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
       this.$router.push({name : "personal_information"})       
     }
   },
   sureRecharge(e){
    console.log(e.target)
    if(!this.list.key || !this.list.oldKey || !this.key){
      return Toast({
        message: '注意,请先确认已输入密码！',
        position: 'middle',
        duration: 2000
      })
    }
    if(this.list.key != this.key){
      return Toast({
        message: '注意,请先确认输入重复新密码！',
        position: 'middle',
        duration: 2000
      })
    }
    this.sureChangePass()
  },
},
}
</script>
<style scoped>
 .work-area{
  margin-top: 15px;
  height: 185px;
  width: 100%;
  text-align: center;
}
.select-but{
  margin: 0 auto 30px;
  height:28px;
  width:230px;
  border: 1px solid rgb(238, 80, 63);
  border-radius: 4px;
  display: flex;
}
.unselect-type{
  text-align: center;
  line-height: 28px;
  flex:1; 
  color: red;
}
.select-type{
  color: white !important;
  background-color: rgb(238, 80, 63) !important;
}
.divd-line{
  border-right: 1px solid rgb(238, 80, 63);
}
.sure-recharge-touch{
  width: 90%;
  margin: 30px auto 0;
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
.input-class{
  height: 25px;
  width: 145px;
  border-radius:4px;
  border:1px solid #DBDBDB ;
}
.describe-class{
  margin: 15px 0;
  line-height: 25px;
}
</style>
