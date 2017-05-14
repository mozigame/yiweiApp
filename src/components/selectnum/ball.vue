 <template>
 	<div class="ball-check f-16" ref = "ballSel" >
 	<mt-checklist title="选择球位：" v-model="valuee" :options="optionss"></mt-checklist>
 	</div>
 </template>
 <script lang="babel">
 	import { mapActions } from 'vuex'
 	import { Checklist } from 'mint-ui'
 	export default {
 		data() {
 			return {
 				list : [],
 				valuee:[],
 				optionss: [
 				{
 					label: '万位',
 					value: '1'
 				},
 				{
 					label: '千位',
 					value: '2'
 				},
 				{
 					label: '百位',
 					value: '3'
 				},
 				{
 					label: '十位',
 					value: '4'
 				},
 				{
 					label: '个位',
 					value: '5'
 				}
 				]
 			}
 		},
 		watch: {
            valuee(newVal){
                console.log('newVal',newVal)
                const data = {
                    name : 'ballposi',
                    selected : []
                }
                data.selected = newVal
                this.setSelected(data)
            }
 		},
        //计算属性
        computed : {
        },
        mounted(){
            var cai1mc = new Hammer(this.$refs.ballSel)
            var valArr = this.valuee
            cai1mc.on('tap',(e) => {
                var target = e.target
                if(target){
                    if(target.tagName.toLowerCase() == 'span'){
                        target = target.parentElement
                    }
                    var checkInput = target.querySelector('input.mint-checkbox-input')
                    if(checkInput){
                        const val = checkInput.getAttribute("value")
                        const ind = valArr.indexOf(val)
                        console.log('val', val)
                        console.log('ind', ind)
                        if(ind > -1){
                            valArr.splice(ind, 1)
                        } else {
                            valArr.push(val)
                            valArr.sort()
                        }
                    }
                }
            })
        },
        methods: {
        	...mapActions({
        		setCurrentLottery: 'setCurrentLottery',
        		setSelected: 'setSelected',
        	}),
        },
    }
</script>
<style scoped>
	.ball-check{
		width: 100%;
		/*display: flex;
		flex-direction:row;
		flex-wrap : wrap;
		justify-content : space-around;*/
	}
	.ball-l{
		text-align: center;
		display: inline-block;
		float: left;
		width: 25%;
	}
	.ball-r{
		float: left;
		width: 75%;
		display: flex;
		flex-direction:row;
		flex-wrap : wrap;
		justify-content : space-around;
	}
</style>