import Vue from 'vue'
import { 
            Cell, 
            Checklist,
            Header,
            Button,
            Popup,
            Spinner,
            Picker,
            Swipe, 
            SwipeItem,
            Field,
        } from 'mint-ui'
import router from './router'
import { sync } from 'vuex-router-sync'
import index from 'components/index/index.vue'
import store from './store'
import './css/common.css'
import * as filters from './tools/filters'
import VueTouch from 'vue-touch'

Vue.use(VueTouch, {name: 'v-touch'})

Vue.component(Cell.name, Cell)
Vue.component(Checklist.name, Checklist)
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Popup.name, Popup)
Vue.component(Picker.name, Picker)
Vue.component(Spinner.name, Spinner)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Field.name, Field)

sync(store, router)

//注册filter
Object.keys(filters).forEach(function(value){
    Vue.filter(value,filters[value])
})


const app = new Vue({
	router,
    store,
    ...index,
})

app.$mount('#app')
