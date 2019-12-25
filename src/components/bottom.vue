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
        <p class="copyright">©️2019 杭州小指针科技有限公司 &nbsp;版权所有&nbsp;|&nbsp;<a class="links" href="http://www.beian.miit.gov.cn">浙ICP备 19012610号-2</a></p>
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
        padding-top:13px;
    }
    .ewm{
        display: flex;
        justify-content: center;
    }
    .download{
        display: none;
        padding:10px 4px ;
        font-size: 9px;
        img{
            width:45px;
            height:45px;
        }
        >div{
            margin-left: 5px;
            padding-top: 10px;
            text-align: left;
            p{
                margin:0;
            }
        }
    }
    .ios{
        margin-right: 15px;
        .pic{
            background:url(../images/iphone.png) no-repeat center 10px; 
            background-size: 20px 25px;
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
            background:url(../images/android.png) no-repeat center 10px;
            height:100%; 
            background-size: 20px 25px;
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
            width:100px;
            height:66px;
            background: #080b17;   
            .pic{
                padding-top:39px;
                box-sizing: border-box;
            }  
        }
    }
    .copyright{
        font-size: 12px;
        margin:20px 0 30px;
    }
    .links{
        color:#fff;
        text-decoration: none;
        &:hover{
            color:red;
        }
    }
</style>