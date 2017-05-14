 <template>
    <div class="p-r">
       <mt-header title="彩票">
           <router-link to="/scroll" slot="left">
               <mt-button icon="back">返回</mt-button>
           </router-link>
           <mt-button icon="more" slot="right"></mt-button>
       </mt-header>
        <loadmore :style="{height : contentheight +'px' }" :showTop="true" :showBottom="true" @loadTopMethod="topMethod" @loadBottomMethod="bottomMethod">
            <ul style="text-align:center">
                <li v-for="item in list">{{item}}</li>
            </ul>
        </loadmore>
        <div :style="{top : contentBtn +'px' }" class="bottom-btn-cls"><mt-button class="my-btn-stl" @click.native="confirm" type="primary" size="large">确定</mt-button></div>
    </div>
</template>
<script lang="babel">
    import api from '../../api'
    import { mapActions } from 'vuex'
    import { winHeight } from "../../tools/command"
    import { Toast } from 'mint-ui'
    import loadmore from './loadmore'
    import MessageBox from './mesbox'
    export default {
        name : "login",
        mounted(){
            
           
        },
        created(){
            /*for (var i = 0; i < 100;++i) {
                this.index = this.index + 1
                this.list.push(this.index + i)
            }*/
        },
        components : {
            loadmore
        },
        updated(){
            
            //console.log('this.myScroll.refresh()')
        },
        data() {
            return {
                list : [],
                index : 0,
            }
        },
        watch: {
        },
        computed : {
            contentheight() {
                return winHeight() - 101
            },
            contentBtn() {
                return winHeight() - 51
            }
        },
        methods: {
            ...mapActions({
              updateUserName: 'updateUserName',
              updateLoginStatus : 'updateLoginStatus'
            }),
            topMethod(loadmore){
                console.log('topMethod')
                setTimeout(() => {
                    for (var i = 0; i < 20;++i) {
                       this.index = this.index + 1
                       this.list.unshift(this.index + i)
                    }
                    loadmore.refresh()
                }, 5000)
            },
            bottomMethod(loadmore){
                console.log('bottomMethod')
                setTimeout(() => {
                    for (var i = 0; i < 20;++i) {
                       this.index = this.index + 1
                       this.list.push(this.index + i)
                    }
                    loadmore.refresh()
                }, 5000)
            },
            async submitLogin() {
                console.log("this", this.$el)
                var para = {username:"kai888", password:"123456", rememberMe: "0"}
                var data = await api.ajax('login', para)
                if(data && data.code == '0'){
                    this.updateUserName(para.username)
                    this.updateLoginStatus(true)
                    //this.$router.push({name : "login"})
                } else {
                    Toast({
                      message: '操作失败，'+data.msg,
                      position: 'middle',
                      duration: 2000
                    })
                }
            },
            toRegister(){
                //this.$router.replace({name: 'regi'})
            },
            enterSubmit(event){
                if(event.keyCode == 13){
                    this.submitLogin()
                }
            },
            forgetPassword(){
                if(!this.form.username){
                    errorMsg("游戏帐号不存在！")
                } else {
                    this.updateUserName(this.form.username)
                    this.$router.replace({name : "retrieve-password"})  
              }
            },
            confirm(){
                const options = {}
                options.title = "哈哈",
                //options.showLeft = false,
                options.content = "请先选择号码",
                options.cancel = function(){
                    console.log('cancel ....')
                    console.log('cancel ....')
                }

                options.confirm = this.submitLogin
                MessageBox(options)
            },
           
        },
    }
</script>
<style scoped>
    .mint-popup-2 {
        width: 100%;
        height: 40px;
        text-align: center;
        background-color: rgba(0,0,0,.7);
    }
    .load-more-wrapper {
        position: absolute;
        top: 40px;
        left: 0;
        width: 100%;
    }
    .bottom-btn-cls {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100px;
    }
    .my-btn-stl {
        width: 95%;
        margin: auto;
    }
</style>
