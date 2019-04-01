<template>
  <div>
    <div class="top-nav">
      <div class="name">食疗坊</div>
      <div class="top">
        <input
          type="text"
          v-model="sosuo"
          value="搜索食谱"
          onClick="if (this.value=='搜索食谱'){this.value=''}"
          class="seach-input"
          placeholder="搜索食谱"
        >
        <div @click="sosuobth">
          <img src="../../assets/images/search.png" alt class="da">
        </div>
        <ul class="top-list">
          <li>
            <img src="../../assets/images/shiliaoFang/meirong.png" alt class="log">
            <p>美容养颜</p>
          </li>
          <li>
            <img src="../../assets/images/shiliaoFang/baojian.png" alt class="log">
            <p>保健调养</p>
          </li>
          <li>
            <img src="../../assets/images/shiliaoFang/buyang.png" alt class="log">
            <p>补养</p>
          </li>
          <li>
            <img src="../../assets/images/shiliaoFang/jianfei.png" alt class="log">
            <p>减肥</p>
          </li>
          <li>
            <img src="../../assets/images/shiliaoFang/muying.png" alt class="log">
            <p>母婴</p>
          </li>
          <li>
            <img src="../../assets/images/shiliaoFang/qijie.png" alt class="log">
            <p>气节</p>
          </li>
          <li>
            <img src="../../assets/images/shiliaoFang/changjian.png" alt class="log">
            <p>常见食疗</p>
          </li>
          <li>
            <img src="../../assets/images/shiliaoFang/people.png" alt class="log">
            <p>人群功效</p>
          </li>
          <li>
            <img src="../../assets/images/shiliaoFang/vc.png" alt class="log">
            <p>维生素</p>
          </li>
          <li>
            <img src="../../assets/images/shiliaoFang/other.png" alt class="log">
            <p>其他</p>
          </li>
        </ul>
      </div>
      <div class="tab-center">
        
     </div>

   </div>

    <ShiLiaoTab :tabList="tabList" :kangZhouList="kangZhouList"/>
   <router-link to="/shopcar">
   <img src="../../assets/images/shopCar.png" alt="" class="scar" />
   </router-link>
  <BottomNav />

  </div>
</template>
<script>
// @ is an alias to /src

import BottomNav from "../../components/BottomNav";
import ShiLiaoTab from "../../components/ShiLiaoTab";
import TabList from "../../components/TabList";
import { mapMutations } from "vuex";
export default {
  name: "ShiLiao",
  data() {
    return {
      currentIndex: "2",
      tabList:[],
      kangZhouList:[],
      activeName: 'second',
      tabList: [],
      sosuo: "",
      arrByZM: [],
      activeName: "second"
    }
  },
   mounted() {
     const _this = this;
    function getKangZhouFun() {
      return _this.$axios.get(
        "http://localhost:3001/api/kangzhou"
      );
    }

    function getShiLiao() {
      return _this.$axios.get(
        "http://localhost:3001/api/shiliao"
      );
    }

    this.$axios.all([getKangZhouFun(), getShiLiao()]).then(
      this.$axios.spread(function(acct, perms) {
        _this.tabList = perms.data;
        _this.kangZhouList = acct.data;
        // 两个请求现在都执行完成
        console.log(acct.data);
        console.log(perms.data);
      })
    );
      
  },
  methods: {
    ...mapMutations(["setarrByZM"]),
    changeKey(index) {
      this.currentIndex = index;
    },
    sosuobth() {
      for (var i = 0; i < this.tabList.length; i++) {
        if (this.tabList[i].name.search(this.sosuo) != -1) {
          this.arrByZM.push(this.tabList[i]);
        }
      }
      this.setarrByZM(this.arrByZM);
      this.$router.push("/sosuo");
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {
    TabList,
    BottomNav,
    ShiLiaoTab   
  }
};
</script>
<style lang="less" scoped>
* {
  overflow-x: visible;
}
.shiliaofang{
  height: 100%;
  background-color: #ffffff;
}
.top-nav {
  width: 100%;
  background: rgba(67, 191, 146, 1);
}
.top {
  width: 100%;
  height: 5.25rem;
  background: rgba(255, 255, 255, 1);
  border-bottom: 0.02rem solid #a6a6a6;
}
.name {
  font-size: 0.36rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 0.88rem;
}
.seach-input {
  width: 7.1rem;
  height: 0.6rem;
  background: rgba(231, 231, 231, 1);
  border-radius: 0rem;
  font-size: 0.36rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(172, 172, 172, 1);
  text-align: center;
  margin: 0.16rem 0.19rem;
  position: relative;
  box-sizing: border-box;
}
.da {
  width: 0.43rem;
  height: 0.43rem;
  position: absolute;
  top: 1.45rem;
  left: 6.5rem;
}
.top-list {
  width: 100%;
  margin: 0rem 0.2rem;
}
.top-list li {
  width: 1.18rem;
  height: 1.6rem;
  background: rgba(255, 255, 255, 1);
  float: left;
  box-sizing: border-box;
  margin: 0.12rem;
}
.log {
  width: 0.73rem;
  background: rgba(255, 175, 150, 1);
  border-radius: 50%;
  margin-left: 0.25rem;
  box-sizing: border-box;
}
.top-list li p {
  font-size: 0.22rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  text-align: center;
}

.tab-center {
  overflow: hidden;
  background-color: white;
}
.tab-name {
  font-size: 0.3rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  flex-grow: 1;
}
.el-tabs__item .is-top {
  padding: 0 !important;
  font-size: 0.5rem;
}

.tab-box {
  clear: both;
  display: flex;
}
.scar {
  position: fixed;
  top: 11rem;
  right: 0.5rem;
  width: 0.85rem;
}
</style>

