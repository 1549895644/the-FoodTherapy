<template>
  <div class="simpletest">
    <TopNav :back="back" title="简易版体质测试" @sendBackData="backEvent($event)"/>
    <div class="choose">
      <div class="choose_list" v-for="(item) in chooseList" :key="item.id">
        <TextSelect :item="item"/>
      </div>
    </div>
    <Button title="测试完成" @getSkipEvent="SkipHandler"/>
  </div>
</template>
<script>
import TopNav from "../../components/TopNav";
import Button from "../../components/Button";
import TextSelect from "../../components/TextSelect";
import { mapActions,mapState } from "vuex"
export default {
  name: "SimpleTest",
  data() {
    return {
      back: {
        closeImg: require("../../assets/images/close.png"),
        backText: "放弃"
      },
      chooseList: [],
      isTextStateData:"未测试"
    };
  },
  components: {
    TopNav,
    Button,
    TextSelect
  },
  methods: {
    backEvent(event) {
      this.$router.push("/test");
    },
    SkipHandler(event) {
      this.$router.push("/healthinfo");
      // this.$store.state.isTextState;
     this.$store.dispatch("changeTextAction");
    },
  },
      // ...mapActions["changeTextAction"]
  computed:{
  
  },
  mounted() {
    this.$axios
      .get("http://localhost:3001/api/simpletestdata")
      .then(res => {
        this.chooseList = res.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style lang="less">
.simpletest {
  background-color: #ffffff;
  height: 100%;
  .choose {
    padding: 0.2rem;
    margin-top: 0.8rem;
    .all_select {
      display: block;
      margin-top: 0.1;
      color: #111111;
      /*   .el-radio__inner{
            border-color: #409EFF;
            background: #409EFF;
        } */
      .el-radio__input.is-checked .el-radio__inner {
        border-color: #43bf92;
        background: #43bf92;
      }
      .el-radio__input.is-checked + .el-radio__label {
        color: #43bf92;
      }
    }
    .choose_list {
      h5 {
        font-size: 0.3rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(17, 17, 17, 1);
      }
      .choose_select {
        margin-top: 0.88rem;
      }
    }
  }
}
</style>


