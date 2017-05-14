/* global vue-resource ajax */
import Vue from 'vue'
import store from '../store'
import VueResource from 'vue-resource'
import * as types from '../store/mutation-types'
import { Toast } from 'mint-ui'

var hostdoamin = 'http://yiweitec.com:8080'
if (process.env.NODE_ENV === 'production') {
    hostdoamin = ''
}

if (process.env.NODE_ENV === 'test') {
    hostdoamin = ''
}

Vue.use(VueResource)

Vue.http.options.root = ""
Vue.http.options.emulateJSON = true
Vue.http.options.timeout = 10000
Vue.http.options.credentials = true
Vue.http.headers.common['Content-Type'] = "application/x-www-form-urlencoded"


export default {
    async ajax(url, param) {
        if("checkLogin" == url && param.token){
            Vue.http.headers.common['Authorization'] = "Bearer "+param.token
            param = {}
        }
        console.log(`${url} ajax.param`, JSON.stringify(param))
        var timeoutId = window.setTimeout(function() {
            store.commit(types.SET_LOADING, false)
        }, 10000)
        try{
            console.time(`${url} ajax time`)
            var data = await Vue.http['post'](`${hostdoamin}/yiwei/${url}`, param)
            console.timeEnd(`${url} ajax time`)
            var body = data.body
            console.log(`${url} ajax.data`, JSON.stringify(body))
            window.clearTimeout(timeoutId)
            timeoutId = undefined
            if (!body.code) {
                body = JSON.parse(body)
            }
            if (body.code == '-1') {
                store.commit(types.USER_ISLOGIN, false)
            } else {
                store.commit(types.USER_ISLOGIN, true)
            }
            return body
        }catch(e){
            console.log('ajax.error', JSON.stringify(e))
            window.clearTimeout(timeoutId)
            timeoutId = undefined
            return {code: '99',msg : "系统错误："+(e ? JSON.stringify(e) || '' : "未知错误")}
        }
    }
}