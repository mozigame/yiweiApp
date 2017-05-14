 <template>
    <div class="p-r">
        <mt-header title="亿维彩票">
            <!-- <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link> -->
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="t-c o-f-h" ref="loginContent" :style="{ height: contentheight + 'px' }">
            <ul :style="{ height: contentheightInner + 'px' }">
                <li v-for="item in list">{{ item }}</li>
            </ul>
        </div>
        <mt-popup v-model="popupVisible2" position="top" class="mint-popup-2" :modal="false" popup-transition="popup-fade">
            <p>更新成功</p>
        </mt-popup>
        <div class="p-10"><mt-button @click.native="confirm" type="primary" size="large">确定</mt-button></div>
    </div>
</template>
<script lang="babel">
    import api from '../../api'
    import { mapActions } from 'vuex'
    import { winHeight } from "../../tools/command"
    import IScroll from 'iscroll'
    import { MessageBox } from 'mint-ui'
    import { Toast } from 'mint-ui'
    export default {
        name : "login",
        created(){
            for (var i = 0; i < 20;++i) {
                this.list.push(i)
            }
        },
        updated(){
            
            //console.log('this.myScroll.refresh()')
        },
        mounted: function () {
            this.form.username = this.$store.state.user.userName
            document.addEventListener("keyup", this.enterSubmit, false)
            this.myScroll = new IScroll(this.$refs.loginContent)
            this.myScroll.on('scrollEnd', this.scrollEndHandler)
        },
        beforeDestroy(){
            document.removeEventListener("keyup", this.enterSubmit, false)
            this.myScroll.destroy()
        },
        data() {
            return {
                form: {
                    username:'',
                    password: '',
                    rememberMe: '0',
                },
                loading : false,
                list : [],
                myScroll : null,
                popupVisible : false,
                popupContent : '',
                popupVisible2 : false,
            }
        },
        watch: {
            popupVisible2(val) {
                if (val) {
                    setTimeout(() => {
                        this.popupVisible2 = false;
                    }, 1000)
                }
           }
        },
        computed : {
            contentheight() {
                return winHeight() - 101
            },
            contentheightInner() {
                return winHeight() - 100
            }
        },
        methods: {
            ...mapActions({
              updateUserName: 'updateUserName',
              updateLoginStatus : 'updateLoginStatus'
            }),
            submitLogin() {
                if(!this.form.username || !this.form.password){
                    errorMsg("请输入用户名和密码")
                    return false
                }
                api.ajax('login', this.form).then(data => {
                    if(data && data.code == '0'){
                        this.updateUserName(this.form.username)
                        this.updateLoginStatus(true)
                        this.$router.replace({name : "main"})
                    } else {
                        errorMsg(data.msg)
                    }
                }, error => {
                    errorMsg("登录报错，"+JSON.stringify(error))
                })

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
                console.log('confirm')
                this.popupVisible2 = true
                Toast({
                  message: '操作成功',
                  position: 'middle',
                  duration: 2000
                })
            },
            loadMore() {
              this.loading = true;
                let last = this.list[this.list.length - 1]
                for (let i = 1; i <= 10; i++) {
                  this.list.push(last + i)
                }
                this.loading = false
            },
            scrollEndHandler(data){

                //this.myScroll.refresh()

               /* if(this.myScroll.y == 0 && this.myScroll.distY > 160 && this.myScroll.directionY == -1 && this.myScroll.absStartY == 0){
                    console.log('++++++++++++++++++ 顶下拉')
                    MessageBox('提示', '顶下拉')
                }

                if(this.myScroll.y == this.myScroll.maxScrollY && this.myScroll.directionY == 1 && this.myScroll.distY < -160 && this.myScroll.absStartY == this.myScroll.maxScrollY){
                    console.log('++++++++++++++++++ 底上拉')
                    MessageBox('提示', '底上拉')
                }*/

            },
            scrollStartHandler(){
                console.log('scrollStartHandler')
            }
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
</style>
