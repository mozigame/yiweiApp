<template>
    <div class="o-f-h">
        <div ref="scrollContent" :style="{height : contentheight + 'px'}">
            <ul style="text-align:center">
                <li v-for="item in list">{{item}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    import IScroll from 'iscroll/build/iscroll-probe'
    import { winHeight } from "../../tools/command"
    export default {
        name : "scroll",
        data(){
            return {
                list : [],
                index : 0,
            }
        },
        created(){
            for (var i = 0; i < 15;++i) {
                this.index = this.index + 1
                this.list.push(this.index + i)
            }
        },
        computed : {
            contentheight() {
                return winHeight() - 200
            },
            contentheightInner() {
                return winHeight() - 101
            }
        },
        methods : {

        },
        mounted(){
            var scrollContent = this.$refs.scrollContent
            var scroller = new IScroll(scrollContent)
            scroller.maxScrollY = -1
            scroller.hasVerticalScroll = true
            console.log('scroller',scroller)
        }

    }
</script>
<style scoped>
    
</style>