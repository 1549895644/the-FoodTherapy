<template>
  <div >
     <Tabs :currentIndex="currentIndex" @changeKey="changeKey">
   <tab tabName="日常记录" index=1 class="tab-name">
     <Richang/>
   </tab>
   <span class="shu">|</span>
   <tab tabName="症状调理" index=2 class="tab-name"> 
      <OrderList  :OrderList="OrderList"/>
   </tab>
     </Tabs>
    <router-link to="/shopcar">
    <img src="../../assets/images/shopCar.png" alt="" class="scar" />
   </router-link>
    <BottomNav />
  </div>
</template>

<script>
// @ is an alias to /src
import BottomNav from "../../components/BottomNav"
import Richang from "../../components/siren/Richang"
import OrderList from "../../components/siren/OrderList"
export default {
  name: 'SiRen',
  data(){
    return{
      currentIndex: "1",
      OrderList:[]
    }
  },
  created() {
    this.$axios.get("http://localhost:3001/api/siren")
    .then(res => {
      this.OrderList=res.data.OrderList;  
    })
    .catch(error => {
      console.log(error);
    })
  },
  methods: {
    changeKey(index) {
      this.currentIndex = index;
    }
  },
  components: {
      Richang,
      OrderList,
      BottomNav
  }
}
</script>
<style lang="less">
.tabs-header{
  overflow: hidden !important;
}
.tab-name{
  font-size:0.36rem;
  font-family:PingFang-SC-Regular;
  font-weight:400;
  color:rgba(90,90,90,1);
  background-color: white;
}
.shu{
  width:0.01rem;
  height:0.6rem;
  border:0px solid #B4B4B4  
}

.scar{
  position: fixed;
  top:10.5rem;
  right: 0.5rem;
  width: 0.85rem;
 }
</style>

