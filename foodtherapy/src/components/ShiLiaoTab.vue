<template>
  <div class="shiliaoTab">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="排毒" name="first">
        <div v-for="(item,index) in tabList" :key="index">
          <ShiLiaoItem :item="item"/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="抗皱" name="second">
        <div v-for="(item,index) in kangZhouList" :key="index">
          <ShiLiaoItem :item="item"/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="祛斑" name="third">
        <div v-for="(item,index) in kangZhouList" :key="index">
          <ShiLiaoItem :item="item"/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="美白" name="fourth">
        <div v-for="(item,index) in tabList" :key="index">
          <ShiLiaoItem :item="item"/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="护发" name="fifth">
        <div v-for="(item,index) in tabList" :key="index">
          <ShiLiaoItem :item="item"/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="润肤" name="sixth">
        <div v-for="(item,index) in tabList" :key="index">
          <ShiLiaoItem :item="item"/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="祛痘" name="seventh">
        <div v-for="(item,index) in kangZhouList" :key="index">
          <ShiLiaoItem :item="item"/>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import ShiLiaoItem from "./ShiLiaoItem";
export default {
  data() {
    return {
      activeName2: "first"
    };
  },
  components: {
    ShiLiaoItem
  },
  methods: {
    handleClick(tab, event) {
    }
  },
  props: {
    tabList: {
      type: Array,
      default: function() {
        return [];
      }
    },
    kangZhouList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>
<style lang="less">
.shiliaoTab {
  overflow: visible;
  background-color: #ffffff;
  .el-tabs--top.el-tabs--card .el-tabs__item:nth-child(n) {
    padding: 0 0.24rem !important;
    line-height: 0.62rem;
  }
  .el-tabs__header .is-top {
    padding-left: 0.02rem;
    height: 0.62rem;
    margin-bottom: 0.12rem;
  }
  .el-tabs--card > .el-tabs__header {
    height: 0.62rem;
    font-size: 0.3rem;
  }
}
</style>
