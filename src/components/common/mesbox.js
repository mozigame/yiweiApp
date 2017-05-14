import Vue from 'vue'
import mesbox from './message-box.vue'

var mb =  Vue.extend(mesbox)

var MessageBox = function(options){
    var elem = document.createElement('div')
    var mbs = new mb({el : elem})
    document.body.appendChild(mbs.$el)
    if(options.title){
        mbs.$data.title = options.title
    }
    mbs.$data.content = options.content
    mbs.cancel = options.cancel
    mbs.confirm = options.confirm
    if(options.showLeft !== void 0 && options.showLeft === false){
        mbs.$data.showLeft = false
    }
}

export default MessageBox
