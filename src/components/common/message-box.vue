<template>
    <div class="mb-modal" v-if="showMsgbox">
        <div class="mb-content">
            <div class="title">{{title}}</div>
            <div class="main-content">
                {{content}}
            </div>
            <div class="main-btn">
                <div v-show="showLeft" ref="btnLeft" class="btn-left">{{btnLeft}}</div>
                <div ref="btnRight" class="btn-right">{{btnRight}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    import Hammer from 'hammerjs'
    export default {
        name : "message-box",
        data(){
            return {
                title : "提示",
                btnLeft : "取消",
                btnRight : "确定",
                content : "",
                showLeft : true,
                showMsgbox : true,
            }
        },
        mounted(){
            var btnLeft = new Hammer(this.$refs.btnLeft)
            btnLeft.on('tap',() => {
                this.tapLeft()   
            }) 
            var btnRight = new Hammer(this.$refs.btnRight)
            btnRight.on('tap',() => {
                this.tapRight()   
            })
        },
        methods : {
            tapLeft(){
                console.log('tapLeft')
                this.showMsgbox = false
                this.cancel()
            },
            tapRight(){
                console.log('tapRight')
                this.showMsgbox = false
                this.confirm()
            },
            cancel(){

            },
            confirm(){

            }
        },
    }
</script>
<style scoped>
    .mb-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        opacity: 0.5;
        background: #000;
    } 
    .mb-content {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80%;
        height: 140px;
        transform: translate3d(-50%,-50%,0);
        z-index: 10000;
        background-color: white;
        border-radius: 5px;
    }
    .title {
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
    }
    .main-content {
        height: 50px;
        border-bottom: 1px solid #4e4242;
        line-height: 40px;
        text-align: center;
    }
    .btn-left {
        display: inline-block;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-right: 1px solid #4e4242;
    }
    .btn-right {
        display: inline-block;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
    .main-btn {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
</style>