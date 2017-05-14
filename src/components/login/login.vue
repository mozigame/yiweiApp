 <template>
	<div class="p-a container" @keyup.enter="confirm">
        <img src="">
        <mt-field label="用户名" v-model="form.username" placeholder="请输入用户名"></mt-field>
        <mt-field label="密码"  v-model="form.password" placeholder="请输入密码" type="password"></mt-field>
        <v-touch class="p-10" @tap="confirm"><mt-button type="primary" size="large">登录</mt-button></v-touch>
	</div>
</template>
<script lang="babel">
    import api from '../../api'
    import { mapActions } from 'vuex'
    import { winHeight } from "../../tools/command"
    import { MessageBox } from 'mint-ui'
    import { Toast } from 'mint-ui'
    import loadmore from '../common/loadmore'
    export default {
        name : "login",
        data() {
            return {
                form : {
                    username : '',
                    password : '',
                    rememberMe : "1"
                }
               
            }
        },
        methods: {
            ...mapActions({
              updateUserName: 'updateUserName',
              updateLoginStatus : 'updateLoginStatus'
            }),
            async submitLogin() {
                if(!this.form.username || !this.form.password){
                    Toast({
                      message: '请输入用户名和密码',
                      position: 'middle',
                      duration: 2000
                    })
                    return false
                }
                var data = await api.ajax('login', this.form)
                if(data && data.code == '0'){
                    this.updateUserName(this.form.username)
                    this.updateLoginStatus(true)
                    this.$router.push({name : "home"})
                } else {
                    Toast({
                      message: '操作失败，'+data.msg,
                      position: 'middle',
                      duration: 2000
                    })
                }
            },
            confirm(){
                this.submitLogin()
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

    .container {
        top:calc(50% - 80px);
    }
</style>
