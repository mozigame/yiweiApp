<template>
  <div class="p-r">
    <v-touch v-on:tap="headerTap">
      <mt-header title="活动公告">
        <div slot="left">
          <mt-button icon="back">返回</mt-button>
        </div>    
      </mt-header>
    </v-touch>
    <loadmore ref="numLoadMore" :style="{height : contentheight +'px' }" :showTop="false" :showBottom="showBottom" @loadBottomMethod="bottomMethod" class="p-r">
      <event-nav :datas="list"></event-nav>
      <div style="height:8px;"></div>
    </loadmore>
  </div>
</template>
<script lang="babel">
 import api from '../../api'
 import { mapActions } from 'vuex'
 import { winHeight, closest } from "../../tools/command"
 import { MessageBox } from 'mint-ui'
 import { Toast } from 'mint-ui'
 import { Field  } from 'mint-ui'
 import loadmore from '../common/loadmore'
 import eventNav from './event_nav'
 export default {
  mounted(){
    this.sureChangePass()
  },
  data() {
    return {
      list : [],
      key: '',
      form: {
        pageSize:'20',
        pageNumber:'1',
      },
      butStyle: true,
      showBottom : true,
    }
  },
  components : {
    loadmore,  eventNav
  },
  computed : {
    contentheight() {
      return winHeight() -40
    },
  },
  methods: {
    async sureChangePass(loadmore) {
      var data = await api.ajax('notice/list', this.form)

      if(data && data.code == '0'){
          if(data.data && data.data.pageNumber <= data.data.totalPage){
            this.list.push(...data.data.list)
            if(data.data.pageNumber == data.data.totalPage){
              this.showBottom = false
            }
          } else {
            this.showBottom = false
          }
          if(loadmore){
            loadmore.refresh()
          } else {
            if(this.$refs.numLoadMore){
              this.$refs.numLoadMore.scrollReresh()
            }
          }
      } else {
        Toast({
          message: '操作失败，'+data.msg,
          position: 'middle',
          duration: 2000
        })
      }
    },
    headerTap(e){
      var target = e.target
      if(closest(target, "div.is-left")){
       this.$router.push({name : "personal_information"})       
     }
   },
   bottomMethod(loadmore){
    this.form.pageNumber++
    this.sureChangePass(loadmore)
  },
},
}
</script>
<style scoped>

</style>
