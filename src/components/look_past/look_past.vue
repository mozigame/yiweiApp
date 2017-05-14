 <template>
 	<div class="p-r">
        <v-touch v-on:tap="headerTap">
     		<mt-header :title="gameclassname">
                <div slot="left">
     			    <mt-button icon="back">返回</mt-button>
                </div>
     		</mt-header>
        </v-touch>    
 		<loadmore ref="numLoadMore" :style="{height : contentheight +'px' }" :showTop="false" :showBottom="showBottom" @loadBottomMethod="bottomMethod" class="backcolor p-r">
 			<past-nav :datas="list"></past-nav>
 		</loadmore>
 		<v-touch class="butt" :style="{top : contentBtn +'px' }" @tap="btnGobuyRef">
 			<div class="btn-gobuy" ref="btnGobuyRef">前往购彩</div>
 		</v-touch>
 	</div>
 </template>
 <script lang="babel">
 	import api from '../../api'
 	import { winHeight,closest } from "../../tools/command"
 	import { Toast } from 'mint-ui'
 	import loadmore from '../common/loadmore'
 	import pastNav from './past_nav'
 	import constants from '../selectnum/constants'
 	export default {
 		mounted(){
 			let row = this.$store.state.lottery.currentLottery;
 			this.gameclassname = constants[row];
 			this.form.classId = row.slice(3);
 			this.getPastData()
 		},
 		components : {
 			loadmore, pastNav
 		},
 		data() {
 			return {
 				list : [],
 				gameclassname:'',
 				form: {
 					classId:'',
 					pageSize:'20',
 					pageNumber:'1',
 				},
                showBottom : true,
 			}
 		},
 		computed : {
 			contentheight() {
 				return winHeight() - 91
 			},
            contentBtn() {
                return winHeight() - 51
            },
 		},
 		methods: {
 			async getPastData(loadmore){
 				var data = await api.ajax('lottery/num/pageOpenHistory',this.form)
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

            bottomMethod(loadmore){
                this.form.pageNumber++
                this.getPastData(loadmore)
            },

 			btnGobuyRef(e){
 				this.$router.push({name : "selectnum"});
 			},

            headerTap(e){
                var target = e.target
                const row = this.$store.state.user.routerHist
                if(closest(target, "div.is-left")){
                    this.$router.push(row["look_past"] || "/")       
                }
            },

 		},
 	}
 </script>
 <style scoped>
 	.backcolor{
 		background-color: rgb(243, 243, 243);
 	}
 	.butt{
		height: 50px;
		width: 100%;
		position: absolute;
		left: 0;
		background-color: rgb(243, 243, 243);
 	}
 	.my-btn-stl{
 		width: 95%;
 		margin: 0 auto;
        margin-top: 5px;
 	}
    .btn-gobuy {
        width: 95%;
        background-color: #ef4f4f;
        height: 41px;
        margin: 5px auto;
        color: white;
        text-align: center;
        line-height: 41px;
        border-radius: 4px;
    }
 </style>
