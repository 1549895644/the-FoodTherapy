 <template>
    <div class="City"> 
      <TopNav :back="back" title="选择城市"  @sendBackData="backEvent($event)"/>
    <van-picker  
        :columns="columns" 
        @change="onChange" 
        :visible-item-count="10" 
        :default-index="4" />
    </div>
</template>

<script>
import TopNav from "./TopNav"
export default {
    name:'City',
    data() {
    return {
      columns: ["邢台","北京","上海","杭州","南京","西安","广州","深圳","苏州","天津","厦门","台湾","澳门","武汉","重庆"],
       back:{
        closeImg:require("../assets/images/back.png"),
        backText: "返回",  
      },
    };
  },
  components : {
     TopNav
  },
  methods: {
    onChange(picker, value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`);
      this.$store.dispatch("changeCityAction",value)
      this.$router.push("/firends")
    },
     backEvent(event) {
      window.history.back();
    }
  }
    
}
</script>

<style >
.van-picker-column__item--selected{
  color: #43bf92;
}
</style>
 