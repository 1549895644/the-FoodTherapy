<template>
  <div class="test">
    <TopNav :back="back" title="测试" @sendBackData="backEvent($event)" :shareImg="shareImg"/>
    <div class="test_introduce">
      <h4>测试说明</h4>
      <p>本测试分为简易版和专业版，简易版可以快速测试你的身体状况，专业版可以更专业的了解你的身体状况。</p>
      <div class="test_btn">
        <router-link tag="div" to="/simpletest">简易版</router-link>
        <router-link tag="div" to="/professionaltest">专业版</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import TopNav from "../../components/TopNav";

export default {
  name: "Test",
  data() {
    return {
      back:{
        closeImg:require("../../assets/images/back.png"),
        backText: "返回"
      },
      shareImg: require("../../assets/images/share.png")
    };
  },
  components: {
    TopNav
  },
  methods: {
    backEvent(event) {
      // window.history.back();
      this.$router.push("/healthinfo")
    }
  }
};
</script>
<style lang="less" scoped>
.test {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  .test_introduce {
      padding: 0 0.2rem;
    h4 {
      font-size: 0.34rem;
      // font-weight: normal;
      margin-top: 0.83rem;
      text-align: center;
    }
    p {
      font-size: 0.26rem;
      width: 5rem;
      margin: 0 auto;
      margin-top: 0.8rem;
    }
  }
  .test_btn{
      overflow: hidden;
      margin-top: 5.25rem;
      div{
          width: 3rem;
          background-color: #43bf92;
          font-size: 0.36rem;
          text-align: center;
          color: #ffffff;
          line-height: 0.9rem;
          border-radius: 0.1rem;
      }
      div:nth-child(1){
          float: left;
      }
      div:nth-child(2){
          float: right;
      }
  }
}
</style>

