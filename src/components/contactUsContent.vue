<template>
    <div class="contents">
        <div class="left boxwrap">
            <div class="innerBox">
            <div class="title">联系我们</div>
            <p>联系地址<span>浙江省杭州市萧山区党湾镇幸福村爱华创意谷文化创意园3号楼A区3068</span></p>
            <p>联系电话<span>13880678652</span></p>
            <p>商务合作<span>yuanxiaoliang@szhizhen.com，xlyuan86@163.com</span></p>
            <div class="ewm">
                <div class="item">
                    <img/>
                    <div>新浪微博</div>
                </div>
                <div class="item">
                    <img/>
                    <div>微信公众号</div>
                </div>
            </div>
            </div>
        </div>
        <div class="right boxwrap">
            <div class="title">留言</div>
            <div class="form">
                <div class="item">
                    <label>姓名</label>
                    <input/>
                </div>
                <div class="item">
                    <label>电话</label>
                    <input/>
                </div>
                <div class="item">
                    <label>邮箱</label>
                    <input/>
                </div>
                <div class="item">
                    <label>留言</label>
                    <textarea/>
                </div>
                <button class="submit">提交</button>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.contents{
    display: flex;
    flex:auto;
    color:#fff;
    position: relative;
}
.boxwrap{
    margin-top: 60px;
    .title{
        font-size: 40px;
        margin-bottom: 30px;
    }
}
.form{
    width:395px;
    height:390px;
    background: #fff;
    color:#222;
    padding: 28px;
    box-sizing: border-box;
    color:#20263c;
    font-size: 18px;
    input{
        width: 270px;
        height:36px;
    }
    label{
        display:inline-block;
        width:60px;
    }
    textarea{
        width:270px;
        border:1px solid #ddd;
        height:105px;
        resize: none;
    }
    .item{
        margin-bottom: 20px;
    }
}
.submit{
    width:110px;
    height:36px;
    text-align: center;
    color:#fff;
    line-height: 36px;  
    float: right;
    background:#4746fc;
    border:0;
    margin-top:-10px;
}
.left{
    width:42.5%;
    margin-right: 80px;
    p{
        font-size: 18px;
    }
}
.innerBox{
    width:500px;
    float: right;
}
.ewm{
    position: absolute;
    bottom: 0;
    display: flex;
    img{
        width:100px;
        height:100px;
        margin-bottom: 10px;
    }
    .item{
        margin-right: 30px;
        text-align: center;
    }
}
</style>