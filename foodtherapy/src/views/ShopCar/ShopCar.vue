
<template>
  <div>
    <TopNav
    :back="back" 
      title="购物车"
      :leftMsg="leftMsg"
      :middleMsg="middleMsg"
      :rightMsg="rightMsg"
      :url="url"
      @sendBackData="backEvent($event)"
    />
    <div class="oder" v-for="(item) in msg" :key="item.id">
      <Chongxiec :ele="item" @getdata="getdataHandler(item)"/>
    </div>
    <!-- 结算 -->
    <div class="jiesuan">
      <div class="left">
        <div class="circle" :class="{circlr:flag}"></div>
        <div class="check">全选</div>
        <div class="concat">合计:</div>
        <div class="jiage">
          {{gettotlPrice}}
          ￥{{totlPrice}}&nbsp;&nbsp;
          <span class="yunf">不含运费</span>
        </div>
      </div>
      <div class="right" @click="jiesuanHandler()">结算</div>
    </div>
  </div>
</template>  
<script>
import Chongxiec from "../../components/Chongxiec.vue";
import TopNav from "../../components/TopNav";
export default {
  name: "ShopCar",
  data() {
    return {
      back: {
        closeImg: require("../../assets/images/back.png"),
        backText: "关闭"
      },
      msg: [],
      flag: false,
      totlPrice: 0,
      ischecked: [],
      leftMsg: "关闭",
      middleMsg: "购物车",
      rightMsg: "编辑",
      url: require("../../assets/images/shopcar/img3.png")
    };
  },
  methods: {
    backHandler() {
      this.$router.go(-1);
    },
    jiesuanHandler() {
      this.$router.push("/orderok");
    },
    backEvent(event) {
      this.$router.push("/shiliao");
    },

    getdataHandler(dataone) {
      console.log(dataone);
      var countNum = 0;
      this.ischecked.push(dataone);
      // console.log(this.ischecked);
      this.msg.forEach((value, index) => {
        if (value.num) {
          countNum++;
          if (countNum == 3) {
            this.flag = true;
          } else {
            this.flag = false;
          }
        }
      });
    }
  },
  computed: {
    gettotlPrice() {
      let tot = 0;
      this.ischecked.forEach((ele, index) => {
        tot = tot + ele.price * parseInt(ele.num);
        this.totlPrice = tot;
        console.log(this.totlPrice);
        return this.totlPrice;
      });
    }
  },

  mounted() {
    this.$axios.get("http://localhost:3001/api/shopcar").then(res => {
      this.msg = res.data;
      console.log(this.msg);
    });
  },
  components: {
    Chongxiec,
    TopNav
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 7.1rem;
  margin: 0 auto;
}
.oder {
  width: 7.5rem;
  height: 2.34rem;
  background: rgba(255, 255, 255, 1);
  margin-top: 0.55rem;
}
.circle {
  margin-top: 0.84rem;
  margin-left: 0.16rem;
  float: left;
  .yuan_input {
    height: 0.4rem;
    width: 0.4rem;
    border: 1px solid #555;
  }
}
.yunf {
  color: rgba(72, 72, 72, 1);
}
.img_container {
  width: 1.83rem;
  height: 1.83rem;
  float: left;
  // margin-top: 0.11rem;
  margin-left: 0.18rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.text_container {
  width: 4.46rem;
  float: right;

  .title {
    font-size: 0.28rem;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    // margin-top: 0.13rem;
    margin-left: 0.27rem;
    width: 2.7rem;
  }
}
.wirte {
  float: right;
  font-size: 0.2rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(72, 72, 72, 1);
  margin-top: -0.3rem;
}
.price {
  width: 0.45rem;
  margin-left: 3.2rem;
  margin-top: 1.5rem;
  font-size: 0.26rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(222, 38, 38, 1);
}
.count {
  width: 7.16rem;
  height: 0.14rem;
  font-size: 0.18rem;
  text-align: right;
  margin-top: -0.2rem;
}
.green {
  background-color: green;
}
.jiesuan {
  width: 7.49rem;
  height: 0.99rem;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  bottom: 0.97rem;
  left: 0;
  line-height: 0.97rem;
  font-size: 0.3rem;
}
.left {
  width: 5.6rem;
  height: 0.97rem;
  float: left;
}
.circle {
  width: 0.3rem;
  height: 0.3rem;
  line-height: 0.3rem;
  border: 0.5px solid rgba(112, 112, 112, 1);
  border-radius: 50%;
  margin-left: 0.36rem;
  margin-right: 0.18rem;
  margin-top: 0.3rem;
  float: left;
}
.check {
  height: 0.97rem;
  line-height: 0.97rem;
  font-size: 0.3rem;
  float: left;
}
.concat {
  font-size: 0.26rem;
  float: left;
  margin-left: 2rem;
}
.jiage {
  font-size: 0.16rem;
  color: red;
  width: 6rem;
}
.right {
  float: right;
  width: 1.72rem;
  height: 0.98rem;
  background: rgba(67, 191, 146, 1);
  text-align: center;
}
.circlr {
  background-color: #409eff;
}
</style>