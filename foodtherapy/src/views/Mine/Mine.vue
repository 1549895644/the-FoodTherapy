<template>
  <div class="mine">
    <BottomNav />
    <TopNav title="我"/>
    <div class="userInfo_box">
      <div class="head_img">
        <img src="../../assets/images/mine/head_pic.png" alt>
      </div>
      <div class="user_name">
        <h3>小明</h3>
      </div>
      <router-link tag="div" to="/healthinfo" class="health_info">健康信息 &gt;</router-link>
    </div>

    <div class="message">
      <ul>
        <li class="first_li">
          <img src="../../assets/images/message.png" alt="">
          <span>消息</span>
        </li>
        <router-link to="/firends" class="second_li" tag="li">
          <img src="../../assets/images/jiaren.png" alt="">
          <span>家人和朋友</span>
        </router-link>
        <li class="third_li">
          <img src="../../assets/images/collect.png" alt="">
          <span>我的收藏</span>
        </li>
        <router-link class="forth_li" tag="li" to="/minelist">
          <img src="../../assets/images/order.png" alt="">
          <span>我的订单</span>
        </router-link>
         <router-link class="fifth_li" tag="li" to="/login">
          <img src="../../assets/images/others.png" alt="">
          <span>账号和其他</span>
        </router-link>
        <li class="six_li">
          <img src="../../assets/images/customer_service.png" alt="">
          <span>在线客服</span>
        </li>
        <li class="seven_li">
          <img src="../../assets/images/help.png" alt="">
          <span>帮助和反馈</span>
        </li>
        <li class="eight_li">
          <img src="../../assets/images/setting.png" alt="">
          <span>设置</span>
        </li>
       
       
      </ul>
    </div>
    <BottomNav/>
  </div>
</template>

<script>
// @ is an alias to /src
import BottomNav from "../../components/BottomNav"
import TopNav from "../../components/TopNav";
export default {
  name: "Mine",
  data() {
    return {};
  },
  components: {    
    BottomNav,
    TopNav
  }
};
</script>
<style lang="less" scoped>
.mine {
  width: 100%;

  .userInfo_box {
    width: 100%;
    height: 1.35rem;
    background-color: #ffffff;
    margin-top: 0.47rem;
    padding: 0 0.2rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .head_img {
      width: 1.15rem;
      height: 1.15rem;

      img {
        width: 100%;
      }
    }
    .user_name{
      flex-grow: 1;
      font-size:0.28rem;
      font-family:PingFang-SC-Regular;
      color:rgba(49,49,49,1);
      margin-left: 0.24rem;
      h3{
      font-weight:400;
      }
    }
    .health_info{
      width: 1.4rem;
      font-size:0.28rem;
      color:rgba(108,108,108,1);
    }
  }
  .message{
    ul{
          margin-top: 0.41rem;
      li{
        width: 100%;
        height: 0.76rem;
        overflow: hidden;
        padding: 0.2rem;
        box-sizing: border-box;
        background-color: #ffffff;
        margin-bottom: 0.02rem;
        font-size:0.28rem;
        color: #313131;
        
         img{
          width:0.32rem;
          margin-right: 0.2rem;
        }
        
      }
      .second_li{
        margin: 0.3rem 0; 
        img{
          width:0.29rem;
        }
      } 
      .third_li{
        img{
          width: 0.28rem;
        }
      }
      .forth_li{
        img{
          width: 0.26rem;
        }
      }
      .fifth_li{
        img{
          width: 0.25rem;
        }
      }
      .six_li{
        img{
          width: 0.29rem;
        }
      }
      .seven_li{
        img{
          width: 0.27rem;
        }
      }
      .eight_li{
        img{
          width: 0.26rem;
        }
      }
    }
  }
}
</style>

