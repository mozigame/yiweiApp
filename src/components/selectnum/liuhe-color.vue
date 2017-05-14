<template>
    <div class="flex-container">
        <div class="f-16 flex-items num-flex-container"  ref="titleBar">
            <span class="num-stl">{{datas.values.titles}}</span>
        </div>
        <div class="f-23 flex-items num-flex-container" ref="selBar">
            <span class="num-stl" v-for="item in datas.values.vulues">{{item}}</span>
        </div>
    </div>
</template>
<script>
    import { removeClass,toggleClass } from "../../tools/command"
    import { mapActions } from 'vuex'
    import api from '../../api'
    export default {
        name : "common-num",
        props: {
          datas: Object,
        },
        data(){
            return {
                selected : [],
                shengxiao_data : {
                    name : [],
                    selected : ""
                }
            }
        },
        mounted(){
            var cai1mc = new Hammer(this.$refs.titleBar)
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
            clear(){
                var titleBar = this.$refs.titleBar
                if(titleBar){
                    var all = titleBar.querySelectorAll('.num-selected')
                    if(all && all.length > 0){
                        var allArray = Array.prototype.slice.call(all)
                        allArray.forEach( function(element, index) {
                            removeClass(element, 'num-selected')
                        })
                    }
                }
            },
            staticSelected(){
                console.log(this.datas.type)
                var titleBar = this.$refs.titleBar
                var selBar = this.$refs.selBar
                var newData = ""
                for (var i = 0; i < this.datas.values.vulues.length; i++) {
                    newData += this.datas.values.vulues[i] + ","
                }
                this.shengxiao_data.selected = newData.substr(0,newData.length-1)
                var all= titleBar.querySelectorAll('.num-selected')
                var that = this
                if(all && all.length > 0){
                    var allArray = Array.prototype.slice.call(all)
                    allArray.forEach( function(element, index) {
                        that.shengxiao_data.name.push(that.datas.type)
                    });
                }
                this.setSelected(this.shengxiao_data)
                console.log(this.$store.state.lottery.selected)
                var that = this
                this.$nextTick(function () {
                    that.$root.$emit("betting")
                })
            },
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
    .num-selected {
        background-color: rgb(238, 34, 34);
        color: rgb(255, 255, 255);
    }
    .wi {
        width: 30%;
        text-align: center;
        margin-top: 26px;
    }
    .title-stl {
        width: 60px;
    }
</style>