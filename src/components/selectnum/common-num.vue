<template>
    <div class="flex-container">
        <div class="f-16 flex-items wi" ref="titleBar">
            <div class="title-stl" :name="datas.type">{{datas.values.titles}}</div> 
            <div class="f-12 m-t-11 yilou" v-if="isShowNum">遗漏</div>
        </div>
        <div class="f-23 flex-items num-flex-container" ref="selBar" >
            <span class="num-stl" :name="item.name" v-for="item in datas.values.vulues">{{item.value}}<p v-if="isShowNum" class="yilou f-15 yilou-stl">{{item.value | sscleak(datas.type, yilou)}}</p></span>
        </div>
    </div>
</template>
<script>
    import { removeClass,toggleClass } from "../../tools/command"
    import { mapActions } from 'vuex'
    import api from '../../api'
    import Hammer from 'hammerjs'
    export default {
        name : "common-num",
        props: {
          datas: Object,
          yilou : Array,
        },
        data(){
            return {
                selected : [],
                leak : '',
            }
        },
        mounted(){
             var cai1mc = new Hammer(this.$refs.selBar)
             cai1mc.on('tap',(e) => {
                const target = e.target
                const tagName = target.tagName.toLowerCase()
                if('span' == tagName){
                    toggleClass(target, "num-selected")
                    this.staticSelected()
                }
            })
        },
        computed : {
            isShowNum(){
                return this.$store.state.lottery.isShowYilou
            },
            currentLottery(){
                return this.$store.state.lottery.currentLottery
            },
            gamePlayMethod(){
                return this.$store.state.lottery.gamePlayMethod
            },
            playMethodType(){
                return this.$store.state.lottery.playMethodType
            },
        },
        watch : {
            "currentLottery" : function(value,old){
                this.clear()
            },
            "gamePlayMethod": function(value,old){
                this.clear()
            },
            "playMethodType": function(value,old){
                this.clear()
            },
        },
        methods : { 
            ...mapActions({
                setSelected : 'setSelected',
            }),
            npmSelect(event){
                var el = event.currentTarget
                toggleClass(el, "num-selected")
                this.staticSelected()
            },
            clear(){
                var selBar = this.$refs.selBar
                if(selBar){
                    var all = selBar.querySelectorAll('.num-selected')
                    if(all && all.length > 0){
                        var allArray = Array.prototype.slice.call(all)
                        allArray.forEach( function(element, index) {
                            removeClass(element, 'num-selected')
                        })
                    }
                }
            },
            staticSelected(){
                var titleBar = this.$refs.titleBar
                var selBar = this.$refs.selBar
                var data = {
                    name : '',
                    selected : []
                }
                var all = selBar.querySelectorAll('.num-selected')
                if(all && all.length > 0){
                    var allArray = Array.from(all)
                    allArray.forEach( function(element, index) {
                        data.selected.push(element.getAttribute("name"))
                    });
                }
                var allTitle = titleBar.querySelectorAll('.title-stl')
                if(allTitle && allTitle.length > 0){
                    data.name = allTitle[0].getAttribute("name")
                }
                this.setSelected(data)
                //console.log(data)
                var that = this
                this.$nextTick(function () {
                    that.$root.$emit("betting")
                })
            },
            async getLeak(){
                var curLottery = this.$store.state.lottery.currentLottery
                var parameter = {}
                parameter.classId = curLottery.slice(3)
                var data = await api.ajax('lottery/listMaxLeak', parameter)
                if(data && data.code == '0'){
                    this.leak = data.data
                }

            }
        },
    }
</script>
<style scoped>
    .flex-container {
        display: flex;
        flex-direction:row;
        flex-wrap : nowrap;
        justify-content : space-between;
        align-items: flex-start;
    }
    .flex-items {
        flex : 0 1 auto;
    }

    .num-flex-container {
        display: flex;
        flex-direction:row;
        flex-wrap : wrap;
        justify-content : space-around;
    }
    .num-stl {
        border-radius: 50%;
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border: 1px solid rgb(232, 232, 232);
        margin: 15px 8px 18px;
        color: rgb(203, 78, 22);
    }
    .wi {
        width: 30%;
        text-align: center;
        margin-top: 26px;
    }
    .num-selected {
        background-color: rgb(238, 34, 34);
        color: rgb(255, 255, 255);
    }
    .yilou {
        color: rgb(188, 188, 188);
        width: 60px;
    }
    .yilou-stl {
        width: 40px;
        height: 25px;
        line-height: 25px;
    }
    .title-stl {
        width: 60px;
    }
</style>