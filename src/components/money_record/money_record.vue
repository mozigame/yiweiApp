 <template>
    <div class="p-r">
        <v-touch v-on:tap="headerTap">
            <mt-header title="资金记录">
                <div slot="left">
                    <mt-button icon="back">返回</mt-button>
                </div>    
            </mt-header>
        </v-touch>
        <loadmore ref="numLoadMore" :style="{height : contentheight +'px' }" class="p-r" :showTop="false" :showBottom="showBottom" @loadBottomMethod="bottomMethod">
            <div class="record-show p-r" v-for="item in list">
             <span class="f-15 title-class">{{machining(item.remark)}}{{item.typeDesc}}</span>
             <span class="f-12 time-class grag-128">{{item.addTime}}</span>
             <span class="f-18 money-class redmoney" :class="{ greenmoney: item.changeMoney>0?true:false }">
                <span v-if="item.changeMoney>0">+</span>
                 {{item.changeMoney/100}}
                 </span>
             </div>
         </loadmore>
     </div>
 </template>
 <script lang="babel">
    import api from '../../api'
    import { mapActions } from 'vuex'
    import { winHeight, closest } from "../../tools/command"
    import { MessageBox } from 'mint-ui'
    import { Toast } from 'mint-ui'
    import loadmore from '../common/loadmore'
    export default {
        mounted(){
            this.setTimes()
        },
        components : {
            loadmore
        },
        data() {
            return {
                list : [],
                form: {
                    bDate:'2016-02-02',
                    eDate:'2017-02-24',
                    pageNumber:'1',
                    operaType:'',
                    pageSize:'20',
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
            //下拉加载
            bottomMethod(loadmore){
                this.form.pageNumber++
                this.getRecord(loadmore)
            },
            async getRecord(loadmore) {
                var data = await api.ajax('record/pageMoneyChange', this.form)
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
                        return loadmore.refresh()
                    } else if(this.$refs.numLoadMore){
                        this.$refs.numLoadMore.scrollReresh()
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
            setTimes(){
                var nowtime = new Date()
                var beforetime = new Date( nowtime.getTime() - 7 * 24 * 3600 * 1000)
                this.form.bDate = beforetime.getFullYear()+"-"+this.addzero(beforetime.getMonth()+1)+"-"+this.addzero(beforetime.getDate())
                this.form.eDate = nowtime.getFullYear()+"-"+this.addzero(nowtime.getMonth()+1)+"-"+this.addzero(nowtime.getDate())
                this.getRecord()
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
            machining(value){
                var caiclass = value.split("[")[0]
                var playclass = value.split("-")[1]
                return caiclass+"("+playclass+")"
            }
        },
    }
</script>
<style scoped>
    .record-show{
    	height: 72px;
    	width: 90%;
    	padding: 0 5%;
    	border-bottom: 1px solid rgb(198, 197, 202);
    }
    .title-class{
    	position: absolute;
    	top: 20px;
    }
    .time-class{
    	position: absolute;
    	top: 45px;
    }
    .money-class{
    	position: absolute;
    	top: 25px;
    	right: 5%;
    }
    .redmoney{
    	color: red;
    }
    .greenmoney{
    	color: green;
    }
</style>
