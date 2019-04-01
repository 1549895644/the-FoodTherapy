<template>
  <div class="selection_component">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item :title="item.question" :name="name">
        <div class="choose_select">
          <el-radio v-model="radio2" :label="index" class="all_select" v-for="(answerItem,index) in item.answers" :key="index">{{ answerItem }}</el-radio>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["0"],
      radio2:0
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    valueHandler(event){
        console.log(event.target);

    }
  },
  props:{
      name:{
          type:[String,Number],
          default:1
      },
      item:{
        type:Object,
        default:function(){
          return{}
        }
      }
  }
};
</script>
<style lang="less">
.selection_component {
  font-size: 0.3rem;
  padding: 0 0.5rem;
  // padding-top: 0.7rem;
  .selection_show {
    line-height: 1rem;
    // margin-bottom: 0.02rem;
    border-bottom: 1px solid #d3d3d3;
  }
  .selection_list {
    li:nth-child(odd) {
      float: left;
      margin-right: 1.5rem;
    }
  }
  .el-radio__input.is-checked .el-radio__inner{
    border-color: #43BF92;
    background: #43BF92;
  }
  .el-collapse-item {
    margin-bottom: 0.02rem;
    }
   .el-radio__input.is-checked + .el-radio__label{
       color: #43BF92;
   }
}
</style>

