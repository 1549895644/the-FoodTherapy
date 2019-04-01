<template>
  <div class="list">
    <div v-if="OrderList" class="order-link">
        
        <router-link to="/shopcar" :key="index"  tag="li" v-for="(item,index) in OrderList" class="order-link">
        <h5><img src="../../assets/images/siren/deng.png" alt="" class="deng">
        根据你的<span class="order-span">{{ item.name }}</span>推荐</h5>
        <img src="../../assets/images/siren/wuzhenzhou.png" alt="" class="listimg">
      
       <p class="order-p">{{ item.text }}</p>
       <p class="order-p1">{{ item.other }}</p>
       
       <span class="list-s1">{{ item.price }}</span>
      
      
       </router-link>
    </div>
     <div v-else>正在加载数据...</div>
     
  </div>
</template>
<script>
export default {
  name: 'OrderList',
  props: {
    OrderList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
}
</script>
<style scoped>
.list{
    width: 100%;
    background:rgba(255,255,255,1);
}
.listimg{
    width:2.22rem;
    height:2.21rem;
    float: left;
    margin-left: 0.2rem;
}
.order-link{
   /* border:1px solid rgba(197,199,198,1); */
}
h5{
font-size:0.24rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(53,53,53,1);
margin-left: 0.2rem;
margin-bottom: 0.1rem;
}
.order-span{
    font-size:0.28rem;
    font-family:PingFang-SC-Regular;
    font-weight:700;
    color:rgba(53,53,53,1);
    margin: 0 0.1rem;
}
.order-p{
  font-size:0.36rem;
  font-family:PingFang-SC-Heavy;
  font-weight:800;
  color:rgba(109,109,109,1);
  position: relative;
  left:0.3rem; 
  top:0.2rem;
}
.order-p1{
    font-size:0.24rem;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(109,109,109,1);
    position: relative;
    left:0.3rem; 
    top:0.4rem; 
}
.list-s1{
  font-size:0.3rem;
  font-family:PingFang-SC-Heavy;
  font-weight:800;
  color:rgba(209,108,52,1);
  position: relative;
  left:0.3rem; 
  top:0.6rem;
}
.deng{
  width:0.2rem;
  height:0.32rem;
  margin-top: 0.2rem;
}

</style>
