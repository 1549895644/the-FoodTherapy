<template>
  <div class="chronicdisease">
    <TopNav :back="back" title="选择慢性病" @sendBackData="backEvent($event)"/>
    <div class="chronic_list">
       <el-checkbox-group 
        v-model="checkedItem"
        :min="1">
        <el-checkbox v-for="(item,index) in chronicData" :label="item" :key="index">{{item}}</el-checkbox>
      </el-checkbox-group>
      <!-- <ul>
        <li v-for="(item,index) in chronicData" :key="index" >
          <p>{{ item }}</p>
        </li>
      </ul> -->
    </div>
  </div>
</template>
<script>
import TopNav from "../../components/TopNav";

export default {
  name: "ChronicDisease",
  data() {
    return {
      back: {
        closeImg: require("../../assets/images/back.png"),
        backText: "返回"
      },
      chronicData: [],
      checkedItem: ['减重'],
    };
  },
  components: {
    TopNav
  },
  methods: {
    backEvent(event) {
      window.history.back();
    }
  },
  mounted() {
    this.$axios
      .get("http://localhost:3001/api/chronic")
      .then(res => {
        // console.log(res.data);
        this.chronicData = res.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style lang="less">
.chronicdisease{
  height: 100%;
  background-color: #ffffff;
  .chronic_list {
  width: 100%;
  margin-top: 0.5rem;
  .el-checkbox {
    width: 100%;
    height: 0.76rem;
    background-color: #ffffff;
    font-size: 0.3rem;
    padding: 0 0.4rem;
    display: block;
    line-height: 0.76rem;
    // margin-bottom: 0.02rem;
    border-bottom: 0.005rem solid #d7d7d7;
    p {
      line-height: 0.76rem;
    }
  }
/*   .el-checkbox{
    padding: 0 0.2rem;
    display: block;
  } */
}
}

</style>


