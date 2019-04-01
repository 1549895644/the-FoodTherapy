<template>
  <div class="date-time-item">
    <div class="date-time-input" @click="show">生日<span class="dateData">{{ data }}</span></div>
    <date-time ref="dateTime" type="date" @confirm="select"></date-time>
  </div>
  <!-- <div class="date-time-input" @click="show">[[date]]</div>
    <date-time ref="dateTime"
    type="date"
    @confirm="select"></date-time> -->
</template>
    
<script>
import DateTime from "vue-date-time-m";
export default {
  name: "DateComponent",
  data() {
    return {
      data: ""
    };
  },
  components: {
    DateTime
  },
  methods: {
    //  展示日期组件
    show() {
      this.$refs.dateTime.show();
    },
    // 日期组件回调
    select(val) {
      this.data = val;
    }
  }
};
</script>
<style lang="less" scoped>
.d-date-time-header{
    background-color: #43bf92 !important;
  }
  .d-date-time-bg .selectedDay{
    background-color: #43bf92 !important;
  }
  .d-date-time-button a{
    color: #43bf92 !important;
  }
</style>
