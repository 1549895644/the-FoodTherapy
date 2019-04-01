<template>
    <div>
       <TopNav title="姓名"/>
          <router-link to="/" tag="div">
           <div @click="clickHander">
           <img src="../../assets/images/mine/left.png" alt="" class="left">
           <span class="left-span">返回</span>
          </div>
          </router-link>

          <div class="touxiang">
             <img src="../../assets/images/mine/jiaren.png" alt="" class="jiaren">
          </div>

        <div class="name-tiao">

         <div class="name-text">
         <img src="../../assets/images/mine/shizhong.png" alt="" class="shizhong">
         <span class="ceshi">显示体质</span>
         <span class="dec">测试于XXX天前</span>   
         <img src="../../assets/images/mine/right.png" alt="" class="right">
        </div>

         <div class="name-text">
         <span class="ceshi1">显示体质简介</span>
        </div>
        <div class="name-text">
         <span class="ceshi2">重新测试体质</span>
        </div>
        <div class="name-text">
         <img src="../../assets/images/mine/duihao.png" alt="" class="duihao">
         <span class="ceshi3">慢性病</span>
         <span class="dec1">已选择X项</span>   
         <img src="../../assets/images/mine/right.png" alt="" class="right">
        </div>

        </div>
        
      
       <BottomNav/>
    </div>
</template>
<script>
import BottomNav from "../../components/BottomNav";
import TopNav from "../../components/TopNav";
export default {
    name:"Myname",
    methods:{
   clickHander(){
     window.history.back();
   }
 },
    components: {
    BottomNav,
    TopNav,
    
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
.touxiang{
  height: 4rem;
  background:rgba(255,255,255,1);
}
.jiaren{
  width:1.5rem;
  height:1.5rem;
  margin-top: 1rem;
  margin-left: 3rem;
}
.name-tiao{
  height: 3.3rem;
  background:rgba(255,255,255,1);
  margin-top: 0.4rem;
}
.name-text{
  height:0.8rem;
  border-bottom: 1px solid rgba(23, 23, 23, 0.37);
}
.shizhong{
    width:0.6rem;
    height:0.6rem;
    position:  absolute;
    top: 5.4rem;
    left: 0.4rem;
}
.duihao{
    width:0.6rem;
    height:0.6rem;
    position:  absolute;
    top: 7.8rem;
    left: 0.4rem;
}
.ceshi{
    font-size:0.4rem;
    font-weight:400;
    color:rgba(23,23,23,1);
    position:  absolute;
    top: 5.5rem;
    left: 1.5rem;
}
.ceshi1{
    font-size:0.4rem;
    font-weight:400;
    color:rgba(23,23,23,1);
    position:  absolute;
    top: 6.3rem;
    left: 0.4rem;
}
.ceshi2{
    font-size:0.4rem;
    font-weight:400;
    color:rgba(23,23,23,1);
    position:  absolute;
    top: 7.1rem;
    left: 0.4rem;
}
.ceshi3{
    font-size:0.4rem;
    font-weight:400;
    color:rgba(23,23,23,1);
    position:  absolute;
    top:7.9rem;
    left: 1.4rem;
}
.right{
    width:0.12rem;
    height:0.23rem;
    margin-left: 7rem;
    margin-bottom: 0.3rem;
}
.dec{
    height:0.29rem;
    font-size:0.2rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(23, 23, 23, 0.37);
    position:  absolute;
    top: 5.6rem;
    left: 5rem;
}
.dec1{
    height:0.29rem;
    font-size:0.2rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(23, 23, 23, 0.37);
    position:  absolute;
    top: 8rem;
    left: 5.5rem;
}
</style>