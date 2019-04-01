<template>
  <div class="goods">
    <TopNav 
    :back="back" title="新增地址" @sendBackData="backEvent($event)"
    :leftMsg="leftMsg" :middleMsg="middleMsg" :url="url"/>
    <div class="container_top">
      <div class="ic">
        <div class="ic_pc">
          <img src="../../assets/images/shopcar/ic.png" alt>
        </div>
      </div>
      <div class="middle">
        <div class="middle_top">
          <p class="middle_name">姓名: &nbsp;{{getuserInfo.name}}</p>
          <p class="middle_ph">电话：{{getuserInfo.phone}}</p>
        </div>
        <div class="middle_boot">
          <p class="middle_boot_adre">地址：{{getuserInfo.address}}</p>
        </div>
      </div>
    </div>
    <!-- 订单号 -->
    <div class="wap">
      <div class="order_num">
        <p class="order_num_left">订单号：830179046666</p>
        <p class="order_num_right">下单时间：2016-12-01</p>
      </div>
      <!-- 商品信息 -->
      <div class="order_msg">
        <div class="content_order">
          <div class="content_order_left">
            <img src="../../assets/images/shopcar/chanp.png" alt>
          </div>
          <div class="content_order_right">
            <div class="content_order_right_top">
              <p class="content_order_right_top_tit">精品红豆薏仁粉</p>
              <p class="rmb">￥ 98:00</p>
            </div>
            <div class="content_order_right_bott">
              <div class="box_order">
                <p>大小：大盒；包装：盒装</p>
              </div>
              <p class="count">x1</p>
            </div>
            <div class="count_sum">
              <p class="mun_shuliang">数量：1</p>
              <p class="num_price">价格:￥98</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 流程 -->
    <div class="wuliu">
      <p>物流跟踪</p>
    </div>
    <div class="wap">
      <div class="box_wl">
        <div style="height: 3.64rem;;">
          <el-steps direction="vertical" :active="1">
            <el-step style="color:red" id="order_sc" title="您的订单已生成"></el-step>
            <el-step class="order_ok" title="您的订单已完成"></el-step>
            <el-step title="您的订单已完成"></el-step>
          </el-steps>
        </div>
      </div>
    </div>
    <!-- button -->
    <div class="new">确认收货</div>
  </div>
</template>
<script>
import TopNav from "../../components/TopNav";
import {mapState, mapGetters} from "vuex";
export default {
  name: "GetGoods",
  data() {
    return {
      leftMsg: "返回",
      middleMsg: "订单详情 ",
      url: require("../../assets/images/shopcar/back.png"),
      back: {
        closeImg: require("../../assets/images/back.png"),
        backText: "返回"
      },
    };
  },
  methods: {
    backEvent(event) {
            this.$router.push("/newaddress")
    }
  },
  components: {
    TopNav
  },
  computed: {
    ...mapGetters(["getuserInfo"])
    
  },
};
</script>

<style scoped lang="less">
.goods {
  height: 100%;
  background-color: white;
}
.wap {
  width: 95%;
  margin: 0 auto;
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
.order_num {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.24rem;
  display: flex;
  margin-top: 0.3rem;
}
.order_num_left {
  color: rgba(51, 51, 51, 1);
  width: 4.5rem;
}
.order_num_right {
  flex: 1;
  text-align: right;
}
.order_msg {
  width: 100%;
  height: 2.02rem;
  background: rgba(255, 255, 255, 1);
}
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

.content_order_right_top_tit {
  width: 4rem;
  display: flex;
  color: rgba(0, 0, 0, 1);
}
.content_order_right_top {
  height: 0.45rem;
  line-height: 0.45rem;
  font-size: 0.28rem;
  display: flex;
}
.box_order {
  color: rgba(102, 102, 102, 1);
}
.rmb {
  flex: 1;
  color: red;
  text-align: right;
}

.content_order_right_bott {
  font-size: 0.22rem;
  display: flex;
  p {
    width: 3.48rem;
  }
  .count {
    flex: 1;
    width: 0.25rem;
    text-align: right;
  }
}
.count_sum {
  width: 5.5rem;
  display: flex;
  margin-top: 0.55rem;
  font-size: 0.24rem;
  .mun_shuliang {
    width: 3.8rem;
    color: rgba(90, 90, 90, 1);
    text-align: right;
  }
}
.num_price {
  flex: 1;
  text-align: right;
}
.wuliu {
  width: 100%;
  height: 1.25rem;
  line-height: 1.25rem;
  background-color: #f1f1f1;
  font-size: 0.26rem;
  p {
    margin-left: 0.1rem;
    width: 65%;
  }
}
.box_wl {
  height: 3.64rem;
  font-size: 0.26rem;
}
.zujian {
  height: 3.64rem !important;
}

.new {
  width: 5.12rem;
  height: 0.76rem;
  line-height: 0.76rem;
  background: rgba(67, 191, 146, 1);
  border-radius: 0.1rem;
  margin: 0 auto;
  font-size: 0.36rem;
  text-align: center;
  margin-top: 0.55rem;
}
</style>
