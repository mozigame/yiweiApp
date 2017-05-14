<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>
<script lang="babel">
	import { winHeight, isPassive } from "../../tools/command"
    import api from '../../api'
    import { mapActions } from 'vuex'
    import Hammer from 'hammerjs'
	export default {
        name : "main",
        created() {
        },
        mounted(){
            var search = location.search
            var token = ""
            console.log(search)
            if(search && search.indexOf("token") > -1 && search.indexOf("=") > -1){
                token = search.substring(search.indexOf("=") + 1)
            }
            this.checkLogin(token)
            console.log('isPassive()',isPassive())
            document.addEventListener('touchmove', function (e) { if(!isPassive()){e.preventDefault();} }, isPassive() ? {
                capture: false,
                passive: false,
                cancelable : false
            } : false)
        },

        computed: {
            loginStatus(){
                return this.$store.state.user.isLogin
            },
        },
        methods : {
            ...mapActions({
              updateLoginStatus : 'updateLoginStatus'
            }),
            async checkLogin(token){
                var para = {}
                if(token){
                    para.token = token
                }
                const data = await api.ajax('checkLogin', para)
                if(data && data.code != '0'){
                    this.updateLoginStatus(false)
                    this.$router.push({name : "login"})
                } else if(data && data.code == '0'){
                    this.$router.push(location.pathname)
                }
               
            },
        },
        watch : {
           "loginStatus" : function(value, old){
                if(value == false){
                    this.$router.push({name : "login"})
                }
           }
       }
	}
</script>
<style type="text/css" scoped>
	.container {
        width: 100%;
    }
    .fade-enter-active, .fade-leave-active {
	  transition: all .3s ease 0;
	}
	.fade-enter, .fade-leave-active {
      opacity: 0;
	}
</style>
