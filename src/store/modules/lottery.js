import {
    SET_CURRENTLOTTERY,
    SET_PLAY_METHOD,
    SET_PLAY_METHOD_TYPE,
    SET_YILOU_TYPE,
    SET_SELECTED,
    CLEAR_SELECTED,
    SET_BETLIST,
    CLEAR_BETLIST,
    SET_BALLNUMBER,
    SET_BETTING_RECORD,
    SET_PAST_DATA,
    SET_USER_METHOD,
    SET_USER_GAME_METHOD,
} from '../mutation-types'

const state = {
    currentLottery : "cai1",
    gamePlayMethod : "",
    playMethodType : "",
    userMethod : "",
    userGameMethod : "",
    isShowYilou : true,
    selected: {},
    betList: [],
    ballNumber : [],
    bettingRecord: {},
    lookPast: {},
}

const mutations = {
    [SET_CURRENTLOTTERY](state, currentLottery) {
        state.currentLottery = currentLottery
    },
    [SET_PLAY_METHOD](state, playMethod) {
        state.gamePlayMethod = playMethod
    },
    [SET_PLAY_METHOD_TYPE](state, playMethodType) {
        state.playMethodType = playMethodType
    },  
    [SET_USER_METHOD](state, userMethod) {
        state.userMethod = userMethod
    },
    [SET_USER_GAME_METHOD](state, userGameMethod) {
        state.userGameMethod = userGameMethod
    },
    [SET_YILOU_TYPE](state, isShowYilou) {
        state.isShowYilou = isShowYilou
    }, 
    [SET_SELECTED](state, data) {
        var name = data.name || 'empty'
        state.selected[name] = data.selected
    },
    [CLEAR_SELECTED](state) {
        state.selected = {}
    }, 
    [SET_BETLIST](state, data) {
        state.betList = data
    },
    [CLEAR_BETLIST](state) {
        state.betList = []
    },
    [SET_BALLNUMBER](state, ballNumber) {
        state.ballNumber = ballNumber
    }, 
    [SET_BETTING_RECORD](state, bettingRecord) {
        state.bettingRecord = bettingRecord
    }, 
    [SET_PAST_DATA](state, lookPast) {
        state.lookPast = lookPast
    }, 
}

export default {
    state,
    mutations
}
