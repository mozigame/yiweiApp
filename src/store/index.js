import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import user from './modules/user'
import lottery from './modules/lottery'
import { SET_LOADING } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
	state :{
		loading :false,
	},
	mutations: {
	    [SET_LOADING](state, loading) {
	        state.loading = loading
	    },
	},
    actions,
    getters,
    modules: {
        user,
        lottery,
    }
})
