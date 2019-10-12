<template>
  <div id="app" :class="showNext ? 'showNext' :''" class="app">
    <myheader @userProto="userProto" @contactUs="contactUs"/>
    <contents v-if="!showNext"/>
    <contactUsContent v-else/>
    <mybottom :showNext="showNext"/>
    <mydialog @closeDialog="closeDialog" v-if="showDialog"/>
  </div>
</template>

<script>
import myheader from './components/header'
import contents from './components/content'
import mybottom from './components/bottom'
import mydialog from './components/dialog'
import contactUsContent from './components/contactUsContent'
export default {
  name: 'app',
  data(){
    return {
      showDialog:false,
      showNext:false
    }
  },
  components: {
    myheader,
    mybottom,
    contents,
    mydialog,
    contactUsContent
  },
  methods:{
    closeDialog(){
      this.showDialog = false
    },
    userProto(){
      this.showDialog = true
    },
    contactUs(flag){
      this.showNext = flag
    }
  }
}
</script>
<style>
body{
  margin:0;
  padding:0;  
}
</style>
<style lang="less" scoped>

.app{
  background: #20263c;
  display: flex;
  flex-direction: column;
  height:100vh;
  background: url(./images/qybac.png) no-repeat center;
  background-size: 100% 100%;

}
  .showNext{
    // height:auto;
    background-image: url(./images/bac2.png);
  }

</style>
