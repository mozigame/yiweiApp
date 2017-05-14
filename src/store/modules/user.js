import {
    USER_ISLOGIN,
    USER_USERNAME,
    SET_ROUTERHIST,
    SET_FUNDPWD,
} from '../mutation-types'

const state = {
    isLogin: true,
    userName:'',
    fundPwd: "",
    routerHist: {},
}

const mutations = {
    [USER_ISLOGIN](state, isLogin) {
        state.isLogin = isLogin
    },
    [USER_USERNAME](state, userName) {
        state.userName = userName
    },
    [SET_ROUTERHIST](state, data) {
        var name = data.name || 'empty'
        state.routerHist[name] = data.from
    },
    [SET_FUNDPWD](state, fundPwd) {
        state.fundPwd = fundPwd
    }, 
}

export default {
    state,
    mutations
}
