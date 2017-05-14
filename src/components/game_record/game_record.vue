 <template>
    <div class="p-r">
    <v-touch v-on:tap="headerTap">
         <mt-header title="开奖记录">
                <div slot="left">
                    <mt-button icon="back">返回</mt-button>
                </div>
         </mt-header>
    </v-touch> 
     <loadmore ref="numLoadMore" :style="{height : contentheight +'px' }" class="backcolor p-r">
        <game-list :datas="list"></game-list>
    </loadmore>
</div>
</template>
<script lang="babel">
    import api from '../../api'
    import { mapActions } from 'vuex'
    import { winHeight,closest } from "../../tools/command"
    import { Toast } from 'mint-ui'
    import loadmore from '../common/loadmore'
    import gameList from './game_list'
    export default {
        mounted(){
        	this.getRecord()
        },
        components : {
            loadmore, gameList
        },
        data() {
            return {
                list : {},
            }
        },
        watch: {
        },
        computed : {
            contentheight() {
                return winHeight() - 40
            },
        },
        methods: {
            ...mapActions({
              updateUserName: 'updateUserName',
          }),
            async getRecord() {
                var data = await api.ajax('lottery/num/listAllRecentOne',{})
                if(data && data.code == '0'){
                    this.list = data
                    this.$refs.numLoadMore.scrollReresh()
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
                const row = this.$store.state.user.routerHist
                if(closest(target, "div.is-left")){
                    this.$router.push(row["game_record"] || "/")
                }
            }
        },
    }
</script>
<style scoped>
    .backcolor{
        background-color: rgb(243, 243, 243);
    }
</style>
