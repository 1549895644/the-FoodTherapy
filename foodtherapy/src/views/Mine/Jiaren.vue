<template>
    <div>
        <TopNav title="家人和朋友"/>
          <router-link to="/" tag="div">
           <div @click="clickHander">
           <img src="../../assets/images/mine/left.png" alt="" class="left">
           <span class="left-span">返回</span>
          </div>
         </router-link>
        <router-link to="/">
         <span class="top-span">修改信息</span>
        </router-link>
        <img src="../../assets/images/mine/jiaren.png" alt="" class="jiaren">
<!-- 头像结束 -->
        <div class="jiaren-tiao">
         <img src="../../assets/images/mine/shizhong.png" alt="" class="shizhong">
         <span class="ceshi">尚未测试</span>
         <img src="../../assets/images/mine/right.png" alt="" class="right">
        </div>
        <div class="jiaren-tiao">
         <img src="../../assets/images/mine/duihao.png" alt="" class="shizhong">
         <span class="bing">慢性病</span>
         <img src="../../assets/images/mine/right.png" alt="" class="right">
        </div>
        
      
       <BottomNav/>
    </div>
</template>
<script>
import BottomNav from "../../components/BottomNav";
import TopNav from "../../components/TopNav";
export default {
    name:"Jiaaren",
    methods:{
   clickHander(){
     window.history.back();
   }
 },
    components: {
    BottomNav,
    TopNav
  }
}
</script>
<style lang="less" scoped>
.title{
    font-size:0.36px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
}
.left{
   width:0.21rem;
   height:0.39rem;
   position: absolute;
   top:0.3rem;  
   left: 0.3rem; 
}
.left-span{
   font-size:0.3rem;
   font-family:PingFang-SC-Medium;
   font-weight:500;
   color:rgba(255,255,255,1);
   position: absolute;
   top:0.3rem;  
   left: 0.7rem;
}
.top-span{
    font-size:0.3px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    position:  absolute;
    top:0.35rem; 
    left: 6rem;
}
.jiaren{
    width:1.15rem;
    height:1.15rem;
    margin-top: 2.3rem;
    margin-left: 3rem;
}
.jiaren-tiao{
    width:6.64rem;
    background:rgba(255,255,255,1);
    border-radius:10px;
    margin-top: 0.6rem;
    margin-left: 0.5rem;
}
.shizhong{
    width:0.51rem;
    height:0.51rem;
    margin-left: 0.3rem;
    
}
.ceshi{
    height:0.29rem;
    font-size:0.3rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(23,23,23,1);
    position:  absolute;
    top: 5.65rem;
    left: 1.5rem;
}
.bing{
    height:0.29rem;
    font-size:0.3rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(23,23,23,1);
    position:  absolute;
    top: 7.4rem;
    left: 1.5rem;
}
.right{
    width:0.12rem;
    height:0.23rem;
    margin-left: 5rem;
    margin-bottom: 0.1rem;
}
</style>
