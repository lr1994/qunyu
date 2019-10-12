<template>
    <div class="header">
        <span class="slogan"></span>
        <div class="rightPart">
            <span :class="curIndex == 0 ? 'active' : ''" @click="homeIndex">首页</span>
            <span :class="curIndex == 1 ? 'active' :''" @click="contactUs">联系我们</span>
            <span @click="userProto" :class="curIndex == 2 ? 'active' : ''">用户协议</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            curIndex:0
        }
    },
    methods:{
        userProto(){
            this.curIndex =2
            this.$emit('userProto')
        },
        homeIndex(){
            this.curIndex = 0
            this.$emit('contactUs',false)
        },
        contactUs(){
            this.curIndex = 1
            this.$emit('contactUs',true)
        }
    }
}
</script>
<style lang="less" scoped>
    .header{
        color:#fff;
        height:80px;
        width:80%;
        margin:0 auto;
    }
    .slogan{
        background: url(../images/slogan.png) no-repeat center;
        float: left;
        width:60px;
        height:80px;
        background-size: 60px 30px;
    }
    .rightPart{
        float:right;
        display: flex;
        width:340px;
        justify-content: space-between;
        font-size: 20px;
        height:100%;
        align-items: center;
        span{
            &:hover{
                cursor: pointer;
            }
            &.active{
                font-weight: bold;
                font-size: 24px;
            }
        }
    }
</style>