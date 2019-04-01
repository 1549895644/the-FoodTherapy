<template>
  <div>
    <TopNav :back="back" title="家人和朋友" titltRight="添加" @sendBackData="backEvent($event)"/>
    <ul class="friends_list">
      <li>
        <div class="img_name">
          <img src="../../assets/images/mine/head_pic.png" alt>
        </div>
        <div class="user_name">爸爸</div>
        <div class="test_result">
          <p class="change_title">平和质</p>
          <div class="get_nito">
            <span class="semiology">&gt;</span>
          </div>
        </div>
      </li>
      <li>
        <div class="img_name">
          <img src="../../assets/images/mine/head_pic.png" alt>
        </div>
        <div class="user_name">妈妈</div>
        <div class="test_result">
          <p class="change_title">尚未测试</p>
          <div class="get_nito">
            <span class="semiology">&gt;</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import TopNav from "../../components/TopNav";

export default {
  name: "FriendsList",
  data() {
    return {
      back:{
        closeImg:require("../../assets/images/back.png"),
        backText: "返回"
      }}
    
  },
  components: {
    TopNav
  },
  methods: {
    backEvent(event) {
      window.history.back();
    }
  }
};
</script>
<style lang="less" scoped>
.friends_list {
  li {
    font-size: 0.3rem;
    background-color: #ffffff;
    margin-bottom: 0.02rem;
    padding: 0 0.2rem;
    height: 1rem;
    display: flex;
    box-sizing: border-box;
    align-items: center;

    .img_name {
      height: 1rem;
      margin-right: 0.2rem;
      padding-top: 0.1rem;
      box-sizing: border-box;
      img {
        width: 0.8rem;
      }
    }
    .user_name{
        font-size: 0.3rem;
        line-height: 1rem;
        font-size: #000;
        flex-grow: 1;

    }
    .test_result{
        display: flex;
        width: 1.8rem;
        font-size: 0.3rem;
        .change_title{
            // margin-right: 0.6rem;
            width: 1.6rem;
        }
        .semiology{
            font-size: 0.4rem;
        }
    }
  } 
}
</style>

