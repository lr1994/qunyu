<template>
    <div class="bottom">
        <div class="ewm" v-if="!showNext">
            <div class="ios">
                <div class="pic">iPhone</div>
                <div class="download">
                    <img src="../images/qyewm.jpeg"/>
                    <div>
                        <p>扫一扫</p>
                        <p>下载</p>
                    </div>
                </div>
            </div>
            <div class="android">
                <div class="pic">Android</div>
                <div class="download">
                    <img src="../images/qyewm.jpeg"/>
                    <div>
                        <p>扫一扫</p>
                        <p>下载</p>
                    </div>
                </div>
            </div>
        </div>
        <p>©️ 2019 neoclub <a>用户隐私协议</a>杭州小指针科技有限公司|浙ICP备 19012610号-2</p>
    </div>
</template>
<script>
export default {
    props:['showNext']
}
</script>
<style lang="less" scoped>
    .bottom{
        // height:100px;
        color:#fff;
        text-align: center;
        font-size: 14px;
        padding-top:26px;
    }
    .ewm{
        display: flex;
        justify-content: center;
    }
    .download{
        display: none;
        padding:12px 8px;
        img{
            width:90px;
            height:90px;
        }
        >div{
            margin-left: 10px;
            padding-top: 28px;
            text-align: left;
            p{
                margin:0;
            }
        }
    }
    .ios{
        margin-right: 15px;
        .pic{
            background:url(../images/iphone.png) no-repeat center 20px; 
            background-size: 40px 50px;
            height:100%;
        }
        &:hover{
            .pic{
                display:none;
            }
            .download{
                display: flex;
            }
        }
    }
    .android{
        .pic{
            background:url(../images/android.png) no-repeat center 20px;
            height:100%; 
            background-size: 40px 50px;
        }
        &:hover{
            .pic{
                display:none;
            }
            .download{
                display: flex;
            }  
        }
    }
    .ewm{
        > div{
            width:175px;
            height:116px;
            background: #080b17;   
            .pic{
                padding-top:78px;
                box-sizing: border-box;
            }  
        }
    }
</style>