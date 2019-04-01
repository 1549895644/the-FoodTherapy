<template>
  <div class="list">
    <div v-if="tabList">
        <router-link to="/goods" :key="index"  tag="li" v-for="(item,index) in tabList">
        <img :src="item.img" alt="" class="listimg">
       <h5>{{ item.name }}</h5>
       <p>{{ item.text }}</p>
       <div class="list-xinxi">
       <span class="list-s1">{{ item.price }}</span>
       <span class="list-s2">{{ item.count }}</span>
       <span class="list-s3">{{ item.other }}</span>
       </div>
       </router-link>
    </div>
     <div v-else>正在加载数据...</div>
     
  </div>
</template>

<script>
export default {
  name: 'TabList',
  props: {
    tabList: {
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
    width:7.5rem;
    background:rgba(255,255,255,1);
    margin: 0.3rem;
}
.listimg{
    width:2.22rem;
    height:2.21rem;
    float: left;
    margin-right: 0.2rem;
}
h5{
font-size:0.28rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(51,51,51,1);
}
p{
  width:4.54rem;
  height:0.65rem;
  font-size:0.24rem;
  font-family:PingFang-SC-Regular;
  font-weight:400;
  color:rgba(95,95,95,1);
  margin-top: 0.2rem;
}
.list-xinxi{
  overflow: hidden;
}
.list-s1{
  font-size:0.18rem;
  font-family:PingFang-SC-Regular;
  font-weight:400;
  color:rgba(238,32,32,1);
}
.list-s2{
  font-size:0.18rem;
  font-family:PingFang-SC-Regular;
  font-weight:400;
  color:rgba(129,129,129,1);
  position: relative;
  left:1.0rem; 
}
.list-s3{
font-size:0.4rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(128,128,128,1);
position: relative;
left:2.0rem;
top:-0.1rem; 
}
</style>
