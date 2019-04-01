<template>
  <div>
    <TopNav :back="back" title="基础信息" titltRight="完成" @successData="successEvent($event)"  @sendBackData="backEvent($event)"/>
    <div class="userInfo_change">
      <ul>
        <li>
          <p class="change_title">名字</p>
          <div class="get_nito">
            <span class="click">点击输入</span>&nbsp;&nbsp;
            <span class="semiology">&gt;</span>
          </div>
        </li>
        <li>
          <p class="change_title">性别</p>
          <div class="get_nito">
            <div class="sex">
              <div class="selected">男</div>
              <div>女</div>
            </div>
          </div>
        </li>
        <li>
          <p class="change_title">生日</p>
          <div class="get_nito">
            <span class="semiology">&gt;</span>
          </div>
        </li>
        <li>
          <p class="change_title">城市</p>
          <div class="get_nito">
            <span class="semiology">&gt;</span>
          </div>
        </li>
      </ul>
    </div>
    
  </div>
</template>
<script>
import TopNav from "../../components/TopNav";

export default {
  name: "BasicInfo",
  data() {
    return {
      back:{
        closeImg:require("../../assets/images/back.png"),
        backText: "返回"
      }
    };
  },
  components: {
    TopNav
  },
  methods: {
    backEvent(event) {
      window.history.back();
    },
    successEvent(event){
        this.$router.push("/healthinfo")
        // console.log(111);
        
    }
  }
};
</script>
<style lang="less" scoped>
  .userInfo_change{
    font-size: 0.28rem;
    margin-top: 0.25rem;
    ul{
      li{
        background-color: #ffffff;
        display: flex;
        padding: 0 0.2rem;
        box-sizing: border-box;
        margin-bottom: 0.02rem;
        line-height: 0.76rem;
        color: #313131;
        height: 0.76rem;
        .change_title{
          flex-grow: 1;
        }
        .get_nito{
          color: #555;
          display: flex;
          .sex{
            // overflow: hidden;
            display: inline-block;
            div{
              float: left;
              width: 0.65rem;
              height: 0.4rem;
              border: 1px solid #555;
              line-height: 0.4rem;
              text-align: center;
              margin-top: 0.1rem;
              border-radius: 0.2rem;
            }
            .selected{
              color: #43bf92;
              border-color: #43bf92;
            }
          }
          .click{
            display: inline-block;
          }
          .semiology{
            font-size: 0.4rem;
            line-height: 0.76rem;
            display: inline-block;
          }
        }

      }
    }
  }
</style>


