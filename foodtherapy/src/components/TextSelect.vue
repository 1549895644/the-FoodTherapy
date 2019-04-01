<template>
  <div class="TextSelect">
    <h5>{{ item.question }}</h5>
    <div class="choose_select">
      <el-radio v-model="radio" :label="index" class="all_select" v-for="(answer,index) in item.answers" :key="index">{{ answer}}</el-radio>
    </div>
  </div>
</template>
<script>
export default {
  name: "TextSelect",
  data() {
    return {
      radio: "0"
    };
  },
  props: {
    item: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>
<style lang="less" scoped>
</style>


