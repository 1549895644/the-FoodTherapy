<template>
  <div class="professional_test">
    <TopNav :back="back" title="专业版体质测试" @sendBackData="backEvent($event)"/>
    <div v-for="(questionItem) in ProfessionalTestData" :key="questionItem.id">
      <ChockBox :name="questionItem.id" :item="questionItem"/>
    <!-- <ChockBox name="2"/> -->
    </div>
    <Button title="测试完成" @getSkipEvent="SkipHandler($event)"/>
  </div>
</template>
<script>
import TopNav from "../../components/TopNav";
import ChockBox from "../../components/ChockBox";
import Button from "../../components/Button";

export default {
  name: "ProfessionalTest",
  data() {
    return {
      back: {
        closeImg: require("../../assets/images/close.png"),
        backText: "放弃"
      },
      ProfessionalTestData:[]
      
    };
  },
  components: {
    TopNav,
    ChockBox,
    Button
  },
  methods: {
    backEvent(event) {
      this.$router.push("/test");
    },
    SkipHandler(event){
        this.$router.push("/healthinfo");
        this.$store.dispatch("changeProTextAction");
      }
  },
  mounted(){
    this.$axios.get("http://localhost:3001/api/professionaltest")
    .then(res =>{
      this.ProfessionalTestData = res.data;
      // console.log(res.data);
    })
    .catch(error =>{
      console.log(error);
      
    })
  }
};
</script>
<style lang="less">
.professional_test{
    background-color: #ffffff;
    height: 100%;
    .choice_box{
        padding: 0 0.2rem;
        .choose_dropdown{
        .el-dropdown-menu .el-popper .select_dropdown{
            left: 0 !important;
            width: 100%;
        }
        }
        .el-popper[x-placement^=bottom]{
            width: 100% !important;
        }
        
    }
}

.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>


