<template>
    <div style="touch-action:none;" class="load-more-wrapper" ref="loadmoreContent" @touchend = "loadmoreTe">
        <div class="loadmore-content">
            <slot name="top">
              <div class="loadmore-top" :style="{marginTop : marginTop +'px' }" v-if="showTopElem">
                <mt-spinner v-if="topStatus === 'loading'" color="#26a2ff" class="loadmore-spinner" :size="36" type="fading-circle"></mt-spinner>
                <div v-else class="loadmore-text f-13"><div style="display:inline-block;" class="f-15 m-r-5 rotate-transition" v-bind:class="{rotate : isActiveArrowT}">{{arrowTextTop}}</div>{{ topText }}</div>
              </div>
            </slot>
            <slot>
            </slot>
            <slot name="bottom">
              <div class="loadmore-bottom" :style="{marginBottom : marginBottom +'px' }" v-if="showBottomElem">
                <mt-spinner v-if="bottomStatus === 'loading'" color="#26a2ff" class="loadmore-spinner" :size="36" type="fading-circle"></mt-spinner>
                <div v-else class="loadmore-text f-13"><div style="display:inline-block;" class="f-15 m-r-5 rotate-transition" v-bind:class="{rotate : isActiveArrow}">{{arrowTextBottom}}</div>{{ bottomText }}</div>
              </div>
            </slot>
        </div>
    </div>
</template>
<script>
    import IScroll from 'iscroll/build/iscroll-probe'
    export default {
        name : "loadmore",
        props : {
            showTop: {
              type: Boolean,
              default: false
            },
            showBottom: {
              type: Boolean,
              default: false
            },

        },
        data(){
            return {
                topStatus: '',
                bottomStatus: '',
                topText: '',
                bottomText: '',
                myScroll: null,
                showTopElem : false,
                showBottomElem : false,
                refreshTOId : null,
                marginTop : -50,
                marginBottom : -50,
                fireBottom : false,
                fireTop : false,
                isActiveArrow : false,
                isActiveArrowT : false,
                recalc : false,
                arrowTextBottom : "↑",
                arrowTextTop : "↓",
            }
        },
        watch : {
            topStatus(value){
                if(value == 'loading'){
                    this.$emit("loadTopMethod",this)
                    this.refreshTOId = setTimeout(this.refresh, 10000)
                }
            },
            bottomStatus(value){
                if(value == 'loading'){
                    this.$emit("loadBottomMethod",this)
                    this.refreshTOId = setTimeout(this.refresh, 10000)
                }
            }
        },
        mounted: function () {
            this.myScroll = new IScroll(this.$refs.loadmoreContent,{ 
                probeType: 2,
                scrollbars: true,
                mouseWheel: true,
                interactiveScrollbars: true,
                shrinkScrollbars: 'scale',
                fadeScrollbars: true
            })
            this.myScroll.hasVerticalScroll = true
            this.myScroll.on('scrollStart', this.scrollStartHandler)
            this.myScroll.on('scrollEnd', this.scrollEndHandler)
            if(this.showBottom || this.showTop){
                this.myScroll.on('scroll', this.scrollHandler)
            }
        },
        beforeDestroy(){
            if(this.myScroll){
                this.myScroll.destroy()
                this.myScroll = null
            }
            clearTimeout(this.refreshTOId)
        },
        methods : {
            scrollHandler(){
                var distY = this.myScroll.distY
                var absStartY = this.myScroll.absStartY
                var maxScrollY = this.myScroll.maxScrollY
                var bdistince = 0
                var distince = 150
                if(distY > 0 && this.showTop && this.topStatus != "loading"){
                    if(absStartY + distY > bdistince && absStartY + distY < distince ){
                        this.showTopElem = true
                        this.topText = "下拉刷新"
                        this.topStatus = ""
                        this.fireTop = false
                        this.isActiveArrowT = false
                    } 

                    if(absStartY + distY >= distince){
                        this.showTopElem = true
                        this.fireTop = true
                        this.topText = "释放更新"
                        this.isActiveArrowT = true
                    }
                }
                if(distY < 0 && this.showBottom && this.bottomStatus != "loading"){
                    if(absStartY + distY < maxScrollY - bdistince && absStartY + distY > maxScrollY - distince){
                        this.showBottomElem = true
                        this.bottomText = "上拉加载"
                        this.bottomStatus = ""
                        this.fireBottom = false
                        this.isActiveArrow = false
                    } 

                    if(absStartY + distY <= maxScrollY - distince){
                        this.showBottomElem = true
                        this.fireBottom = true
                        this.bottomText = "释放更新"
                        this.marginBottom = 0
                        this.isActiveArrow = true
                        if(!this.recalc){
                            this.recalc = true
                            this.scrollReresh()
                        }
                    }

                }
            },
            scrollStartHandler(){
            },
            scrollEndHandler(){
                console.log('scrollEndHandler')
                if(this.topStatus != "loading" && this.showTopElem){
                    this.refresh()
                } 
                if(this.bottomStatus != "loading" && this.showBottomElem){
                    this.refresh()
                }
            },
            refresh(){
                this.topStatus = ''
                this.bottomStatus = ''
                this.topText = ''
                this.bottomText = ''
                this.showTopElem =false
                this.showBottomElem = false
                this.marginTop = -50
                this.marginBottom = -50
                this.fireBottom = false
                this.fireTop = false
                this.isActiveArrow = false
                this.isActiveArrowT = false
                this.recalc = false
                this.scrollReresh()

            },
            scrollReresh(){
                clearTimeout(this.refreshTOId)
                this.refreshTOId = setTimeout(() => {
                    this.myScroll.refresh()
                    this.myScroll.hasVerticalScroll = true
                }, 0)
            },
            loadmoreTe(e){
                if(this.fireBottom){
                    this.bottomStatus = "loading"
                }
                if(this.fireTop){
                    this.marginTop = 0
                    this.topStatus = "loading"
                }
            }
        }
    }
</script>
<style scoped>
    .loadmore-spinner {
        display: inline-block;
        vertical-align: middle;
    }
    .loadmore-text {
        display: inline-block;
        vertical-align: middle;
    }
    .loadmore-top,.loadmore-bottom {
        text-align: center;
        height: 50px;
        line-height: 50px;
        vertical-align: middle;
    }

    .load-more-wrapper {
        overflow: hidden;
    }

    @keyframes arrowrotate {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(180deg);
            padding-bottom: 2px;
        }
    }

    .arrowrota {
        animation-name:arrowrotate;
        animation-duration:.3s;
        animation-timing-function:ease;
        animation-delay:.1s;
        animation-fill-mode: forwards;
    }

    .arrowrotat {
        animation-name:arrowrotate;
        animation-duration:.3s;
        animation-timing-function:ease;
        animation-delay:.1s;
        animation-fill-mode: forwards;
    }

    .rotate-transition {
        transition: transform .4s;
    }

    .rotate {
        padding-bottom: 2px;
        padding-right: 5px;
        transform: rotate(180deg);
    }
    

</style>