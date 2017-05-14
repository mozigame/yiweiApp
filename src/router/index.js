import Vue from 'vue'
import VueRouter from 'vue-router'
import cookies from 'js-cookie'
import store from '../store/'

Vue.use(VueRouter)

const scrollBehavior = (to, from, savedPosition) => {
    const position = {}
    if (to.hash) {
        position.selector = to.hash
    }
    if (to.matched.some(mm => mm.meta.scrollToTop)) {
        position.x = 0
        position.y = 0
    }
    return position
}

const guardRoute = (to, from, next) => {
    let isLogin = store.state.user.isLogin
    if (!isLogin) {
        next('/')
    } else {
        next()
    }
}

const login = resolve => {
    require.ensure(['components/login/login.vue'], () => {
        resolve(require('components/login/login.vue'))
    }, 'home')
}

const loadmoreExample = resolve => {
    require.ensure(['components/common/loadmore-example.vue'], () => {
        resolve(require('components/common/loadmore-example.vue'))
    }, 'example')
}

const scroll = resolve => {
    require.ensure(['components/common/scroll.vue'], () => {
        resolve(require('components/common/scroll.vue'))
    }, 'example')
}

const buy = resolve => {
    require.ensure(['components/buy/buy.vue'], () => {
        resolve(require('components/buy/buy.vue'))
    }, 'home')
}

const home = resolve => {
    require.ensure(['components/home/home.vue'], () => {
        resolve(require('components/home/home.vue'))
    }, 'home')
}

const rules = resolve => {
    require.ensure(['components/rules/rules.vue'], () => {
        resolve(require('components/rules/rules.vue'))
    }, 'rules')
}

const betting_record = resolve => {
    require.ensure(['components/betting_record/betting_record.vue'], () => {
        resolve(require('components/betting_record/betting_record.vue'))
    }, 'betting_record')
}

const betting_details = resolve => {
    require.ensure(['components/betting_details/betting_details.vue'], () => {
        resolve(require('components/betting_details/betting_details.vue'))
    }, 'betting_details')
}

const selectnum = resolve => {
    require.ensure(['components/selectnum/selectnum.vue'], () => {
        resolve(require('components/selectnum/selectnum.vue'))
    }, 'home')
}

const game_record = resolve => {
    require.ensure(['components/game_record/game_record.vue'], () => {
        resolve(require('components/game_record/game_record.vue'))
    }, 'game_record')
}

const look_past = resolve => {
    require.ensure(['components/look_past/look_past.vue'], () => {
        resolve(require('components/look_past/look_past.vue'))
    }, 'look_past')
}

const personal_information = resolve => {
    require.ensure(['components/personal_information/personal_information.vue'], () => {
        resolve(require('components/personal_information/personal_information.vue'))
    }, 'personal_information')
}

const money_record = resolve => {
    require.ensure(['components/money_record/money_record.vue'], () => {
        resolve(require('components/money_record/money_record.vue'))
    }, 'money_record')
}

const recharge = resolve => {
    require.ensure(['components/recharge/recharge.vue'], () => {
        resolve(require('components/recharge/recharge.vue'))
    }, 'recharge')
}

const money_out = resolve => {
    require.ensure(['components/money_out/money_out.vue'], () => {
        resolve(require('components/money_out/money_out.vue'))
    }, 'money_out')
}

const add_card = resolve => {
    require.ensure(['components/add_card/add_card.vue'], () => {
        resolve(require('components/add_card/add_card.vue'))
    }, 'add_card')
}

const bind_card = resolve => {
    require.ensure(['components/bind_card/bind_card.vue'], () => {
        resolve(require('components/bind_card/bind_card.vue'))
    }, 'bind_card')
}

const modify_information = resolve => {
    require.ensure(['components/modify_information/modify_information.vue'], () => {
        resolve(require('components/modify_information/modify_information.vue'))
    }, 'modify_information')
}

const announcement = resolve => {
    require.ensure(['components/announcement/announcement.vue'], () => {
        resolve(require('components/announcement/announcement.vue'))
    }, 'announcement')
}

const my_news = resolve => {
    require.ensure(['components/my_news/my_news.vue'], () => {
        resolve(require('components/my_news/my_news.vue'))
    }, 'my_news')
}

const event_details = resolve => {
    require.ensure(['components/announcement/event_details.vue'], () => {
        resolve(require('components/announcement/event_details.vue'))
    }, 'announcement')
}

const news_details = resolve => {
    require.ensure(['components/my_news/news_details.vue'], () => {
        resolve(require('components/my_news/news_details.vue'))
    }, 'my_news')
}
const router = new VueRouter({
    mode: 'history',
    base: '/',
    scrollBehavior,
    routes: [
        { name:'login', path: '/login', component: login },
        { name:'loadmore', path: '/loadmore', component: loadmoreExample },
        { name:'scroll', path: '/scroll', component: scroll },
        { name:'buy', path: '/buy', component: buy },
        { name:'home', path: '/home', component: home },
        { name:'index', path: '/', component: home },
        { name:'rules', path: '/rules', component: rules },
        { name:'betting_record', path: '/betting_record', component: betting_record },
        { name:'betting_details', path: '/betting_details', component: betting_details },
        { name:'selectnum', path: '/selectnum', component: selectnum },
        { name:'game_record', path: '/game_record', component: game_record },
        { name:'look_past', path: '/look_past', component: look_past },
        { name:'personal_information', path: '/personal_information', component: personal_information },
        { name:'money_record', path: '/money_record', component: money_record },
        { name:'recharge', path: '/recharge', component: recharge },
        { name:'money_out', path: '/money_out', component: money_out },
        { name:'add_card', path: '/add_card', component: add_card },
        { name:'bind_card', path: '/bind_card', component: bind_card },
        { name:'modify_information', path: '/modify_information', component: modify_information },
        { name:'announcement', path: '/announcement', component: announcement },
        { name:'my_news', path: '/my_news', component: my_news },
        { name:'event_details', path: '/event_details', component: event_details },
        { name:'news_details', path: '/news_details', component: news_details },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.length > 0) {
        next()
    } else {
        next("/")
    }
})

router.afterEach(to => {
    console.log('router.afterEach')
})

export default router
