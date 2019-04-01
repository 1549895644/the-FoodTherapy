<template>
  <!-- 购物车 -->
  <div>
    <!-- 购物车导航条开始 -->
    <div class="topnav">
      <div class="box">
        <div class="left">
          <div @click="navHandler">
            <div class="left">
              <div>
                <img class="error" :src="url" alt>
              </div>
              <div class="close">{{leftMsg}}</div>
            </div>
            <div class="shopcar">{{middleMsg}}</div>
            <div class="right">{{rightMsg}}</div>
          </div>
        </div>
        <!-- 购物车导航条结束 -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShopCar",
  methods: {},
  props: {
    leftMsg: {
      type: String,
      default: ""
    },
    middleMsg: {
      type: String,
      default: ""
    },
    rightMsg: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    }
  },
  methods: {
    navHandler(event) {
      this.$emit("NavEfect", event);
    }
  }
};
</script >
<style scoped>
.topnav {
  width: 7.5rem;
  height: 0.88rem;
  background: rgba(67, 191, 146, 1);
}
.box {
  width: 7.1rem;
  margin: 0 auto;
  display: flex;
}
.error {
  width: 0.31rem;
  height: 0.31rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  float: left;
}
.left {
  flex: 1;
}
.close {
  flex-grow: 1;
  height: 0.28rem;
  font-size: 0.3rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin-top: 0.23rem;
  margin-left: 0.2rem;
}
.shopcar {
  height: 0.88rem;
  line-height: 0.88rem;
  font-size: 0.36rem;
  flex-grow: 1;
  text-align: center;
  color: rgba(255, 255, 255, 1);
}
.right {
  flex-grow: 1;
  font-size: 0.3rem;
  color: rgba(255, 255, 255, 1);
  height: 0.88rem;
  line-height: 0.88rem;
}
</style>
