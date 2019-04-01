<template>
  <div>
    <TopNav 
    :back="back" title="确认订单" @sendBackData="backEvent($event)"
    :leftMsg="leftMsg" :middleMsg="middleMsg" :url="url" />
    <div class="container_top">
      <div class="ic">
        <div class="ic_pc">
          <img src="../../assets/images/shopcar/ic.png" alt>
        </div>
      </div>
      <div class="middle">
        <div class="middle_top">
          <p class="middle_name">姓名: &nbsp;王艳</p>
          <p class="middle_ph">12222222222</p>
        </div>
        <div class="middle_boot">
          <p class="middle_boot_adre">地址：北京市海淀区西三旗桥东金燕龙大厦</p>
        </div>
      </div>
      <div class="middle_boot_right">
        <p>&gt;</p>
      </div>
    </div>
    <!-- 中间 -->
    <div class="content">
      <div class="content_wap">
        <div class="content_order">
          <div class="content_order_left">
            <img src="../../assets/images/shopcar/order 2.png" alt>
          </div>
          <div class="content_order_right">
            <div class="content_order_right_top">
              <p class="content_order_right_top_tit">东北有机红谷黄小米</p>
              <p class="rmb">￥ 42:00</p>
            </div>
            <div class='content_order_right_bott'>
                <div class="box_order">
                    <p>
                        2016秋收新东北有机红谷黄小米粒2750g(5.5斤）特产杂粮小米包邮
                    </p>
                    
                </div>
                <p class="count">x1</p>
            </div>
          </div>
        </div>
        <!-- 配送方式 -->
        <div class="method_ps">
            <div class="method_ps_left">
                配送方式
            </div>
            <div class="method_ps_right">
                <p>免运费</p>
                <p>快递发货</p>

            </div>

        </div>
        <!-- 买家留言 -->
        <div class="mj_msg">买家留言: 无</div>
        <div class="sum">
            <div class="sum_he">合计</div>
            <div class="sum_red">￥:45.00</div>
        </div>
        <div class="sum yunf">
            <div class="sum_he spje">商品金额</div>
            <div class="sum_red">￥:45.00</div>
        </div>
         <div class="sum f">
            <div class="sum_he spje">运费</div>
            <div class="sum_red">+￥:00.00</div>
        </div>

      </div>
    </div>
    <!-- 合计结算 -->
    <div class="get_sum">
        <div class="get_sum_box">
            <span class="get_sum_heji">合计:&nbsp;</span>
            <span class="get_sum_rmb">￥ 45:00</span> 
            <router-link to="/adress" tag="div" class="sum_botton">去支付</router-link>

        </div>

    </div>
  </div>
</template>
<script>
import TopNav from "../../components/TopNav";
export default {
  name: "OrderOk",
  components: {
    TopNav
  },
  data() {
    return {
      leftMsg: "返回",
      middleMsg: "确认订单",
      url: require("../../assets/images/shopcar/back.png"),
      back: {
        closeImg: require("../../assets/images/back.png"),
        backText: "返回"
      },
    };
  },
  methods: {

    backEvent(event) {
      this.$router.push("/shopcar");
    }
  },
};
</script>

<style scoped lang="less">
* {
  background-color: white;
}
.container_top {
  height: 2.2rem;
  width: 100%;
  background-color: white;
  overflow: hidden;
  display: flex;
  border-bottom: 1px solid #555;
}
.ic {
  width: 0.98rem;
  height: 0.53rem;
  width: 0.98rem;
  margin-top: 0.8rem;
  margin-top: 0.4rem;
  ic_pc {
    width: 0.35rem;
    height: 0.38rem;
    margin: 0 auto;
  }
}
.middle {
  height: 2.2rem;
  width: 5.6rem;
  font-size: 0.3rem;
}
.middle_top {
  width: 100%;
  height: 1.1rem;
  overflow: hidden;

  display: flex;
  .middle_name {
    line-height: 1.1rem;
    width: 3.4rem;
  }
  .middle_ph {
    line-height: 1.1rem;
    flex: 1;
  }
}

.middle_boot_adre {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.middle_boot_right {
  width: 0.56rem;
  height: 100%;
  flex: 1;
  p {
    margin-top: 0.8rem;
    font-size: 0.6rem;
    opacity: 0.7;
    text-align: center;
  }
}

.content_wap {
  width: 7.1rem;
  margin: 0 auto;
  margin-top: 0.6rem;

  .content_order {
    width: 100%;
    display: flex;
    margin-top: 0.2rem;
    .content_order_left {
      width: 1.88rem;
      height: 1.84rem;
    }
    .content_order_right {
      flex: 1;
      margin-left: 0.42rem;
    }
  }
}
.content_order_right_top_tit {
  width: 4rem;
  display: flex;
  color:rgba(0,0,0,1);
}
.content_order_right_top {
  height: 0.45rem;
  line-height: 0.45rem;
  font-size: 0.28rem;
  display: flex;
}
.box_order{
    color:rgba(102,102,102,1);
}

.rmb {
  width: 1.2rem;
  color: red;
}

.content_order_right_bott{
    font-size:0.22rem;
    display: flex;
    p{
        width: 3.48rem;
    }
    .count{
        flex: 1;
        width: 0.25rem;
        text-align: right;
        margin-right: 0.13rem;

    }
}
.method_ps{
    width: 100%;
    height: 2rem;
    color: red;
    display: flex;
    margin-top: 0.5rem;
}
// 配送方式
.method_ps_left{
    width: 5.97rem;
    font-size:0.3rem;
    color:rgba(82,83,83,1);
    margin-top: 0.4rem;
}
.method_ps_right{
    flex: 1;
    font-size:0.28rem;
    color:rgba(82,83,83,1);
    margin-top: 0.4rem;
    text-align: center;

}
.mj_msg{
    font-size:0.3rem;
    color:rgba(82,83,83,1);
}
.sum{
    width: 100%;
    height: 1.4rem;
    display: flex;
}
.sum_he{
    width: 0.6rem;
    height: 0.42rem;
    font-size:0.3rem;
    color:rgba(82,83,83,1);
    margin-top: 0.3rem;
}
.sum_red{
    font-size:0.3rem;
    flex:1;
    text-align: right;
    margin-top: 0.4rem;
    }
.spje{
    width: 1.24rem;
}
.yunf{
    height: 0.6rem;
    margin-top: 0.5rem;
    

}
.spje{
    margin-top: 0.3rem;
    line-height: 0.6rem;
}
.get_sum{
    height: 0.9rem;
    margin-top: 0.1rem;
}
.get_sum_box{
    width: 4.1rem;
    float: right;
    margin-top: -0.3rem;
}
.get_sum_heji{
    font-size:0.36rem;
    color:rgba(82,83,83,1);
}
.get_sum_rmb{
    font-size:0.34rem;
    font-weight:500;
    color:rgba(222,38,38,1);
}
.sum_botton{
    width:1.85rem;
    height:0.76rem;
    line-height: 0.76rem;
    background:rgba(255,53,69,1);
    position:absolute;
    right: 0;
    bottom: 0;
    font-size:0.36rem;
    font-weight:bold;
    color:rgba(255,255,255,1);
    text-align: center;
}

</style>
