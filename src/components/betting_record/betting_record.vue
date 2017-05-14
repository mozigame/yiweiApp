 <template>
    <div class="p-r">
        <v-touch v-on:tap="headerTap">
            <mt-header title="投注记录">
                <div slot="left">
                    <mt-button icon="back">返回</mt-button>
                </div>
            </mt-header>
        </v-touch>    
     <loadmore ref="numLoadMore" :style="{height : contentheight +'px' }" class="backcolor p-r" :showTop="false" :showBottom="showBottom" @loadBottomMethod="bottomMethod">
        <record-list :datas="list"></record-list>
    </loadmore>
</div>
</template>
<script lang="babel">
    import api from '../../api'
    import { winHeight, closest } from "../../tools/command"
    import { MessageBox } from 'mint-ui'
    import { Toast } from 'mint-ui'
    import loadmore from '../common/loadmore'
    import recordList from './record-list'
    export default {
        mounted(){
            this.setDefaultTime()
            this.getRecord()
        },
        components : {
            loadmore, recordList
        },
        data() {
            return {
                list : {
                    list:[],
                },
                form: {
                    bDate:"",
                    eDate:"",
                    classId:"",
                    status:"",
                    pageNumber:1,
                    pageSize:20
                },
                showBottom : true,
            }
        },
        computed : {
            contentheight() {
                return winHeight() - 40
            },
        },
        methods: {
            async getRecord(loadmore) {
                var data = await api.ajax('record/pageLotteryBet', this.form)
                if(data && data.code == '0'){
                    if(data.data && data.data.pageNumber <= data.data.totalPage){
                        this.list.list.push(...data.data.list)
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
            //下拉加载
            bottomMethod(loadmore){
                this.form.pageNumber++
                this.getRecord(loadmore)
            },

            //设定默认时间
            setDefaultTime(){
                var newtime = new Date()
                var ago3Day = new Date(Date.parse(new Date().toString()) - 86400000*3);
                this.form.eDate = newtime.getFullYear()+'-'+this.addzero(newtime.getMonth()+1)+'-'+this.addzero(newtime.getDate())
                this.form.bDate = ago3Day.getFullYear()+'-'+this.addzero(ago3Day.getMonth()+1)+'-'+this.addzero(ago3Day.getDate())
            },
            //时间补零
            addzero(value){
                let nums = Number(value)
                if(nums>9){
                    return nums+''
                }else{
                    return '0'+nums
                }
            },
            headerTap(e){
                var target = e.target
                const row = this.$store.state.user.routerHist
                if(closest(target, "div.is-left")){
                    this.$router.push(row["betting_record"] || "/")       
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
