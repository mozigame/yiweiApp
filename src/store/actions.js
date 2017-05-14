/* global document, window */

import * as types from './mutation-types'
import api from '../api'


export const updateUserName = ({ commit, rootState }, data) => {
        commit(types.USER_USERNAME, data)
}

export const updateLoginStatus = ({ commit, state, rootState }, data) => {
        commit(types.USER_ISLOGIN, data)
}

export const setLoading = ({ commit, state, rootState }, data) => {
        commit(types.SET_LOADING, data)
}

export const setCurrentLottery = ({ commit, state, rootState }, data) => {
        commit(types.SET_CURRENTLOTTERY, data)
}

export const setPlayMethod = ({ commit, state, rootState }, data) => {
        commit(types.SET_PLAY_METHOD, data)
}

export const setPlayMethodType = ({ commit, state, rootState }, data) => {
        commit(types.SET_PLAY_METHOD_TYPE, data)
}

export const setUserMethod = ({ commit, state, rootState }, data) => {
        commit(types.SET_USER_METHOD, data)
}

export const setUserGameMethod = ({ commit, state, rootState }, data) => {
        commit(types.SET_USER_GAME_METHOD, data)
}

export const setYilouType = ({ commit, state, rootState }, data) => {
        commit(types.SET_YILOU_TYPE, data)
}

export const setSelected = ({ commit, state, rootState }, data) => {
        commit(types.SET_SELECTED, data)
}

export const clearSelected = ({ commit, state, rootState }, data) => {
        commit(types.CLEAR_SELECTED, data)
}

export const setBetList = ({ commit, state, rootState }, data) => {
        commit(types.SET_BETLIST, data)
}

export const clearBetList = ({ commit, state, rootState }, data) => {
        commit(types.CLEAR_BETLIST, data)
}

export const setBallNumber = ({ commit, state, rootState }, data) => {
        commit(types.SET_BALLNUMBER, data)
}

export const bettingRecord = ({ commit, state, rootState }, data) => {
        commit(types.SET_BETTING_RECORD, data)
}

export const setPastData = ({ commit, state, rootState }, data) => {
        commit(types.SET_PAST_DATA, data)
}

export const setRouterHist = ({ commit, state, rootState }, data) => {
        commit(types.SET_ROUTERHIST, data)
}

export const setFundPwd = ({ commit, state, rootState }, data) => {
        commit(types.SET_FUNDPWD, data)
}