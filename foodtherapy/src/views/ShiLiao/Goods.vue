<template>
  <div>
  <div>
  <img src="../../assets/images/shiliaoFang/fang1.png" alt="">
  <router-link to="/" tag="div">
   <div @click="clickHander">
     <img src="../../assets/images/back.png" alt="" class="back">
     <span class="back-span">返回</span>
   </div>
   </router-link>
  <router-link to="/">
   <img src="../../assets/images/share.png" alt="" class="share">
   </router-link>
   <div class="goods-text">
   <span class="goods-span1">红豆薏仁粉</span>
   <span class="goods-span2">￥98</span>
   </div>
  </div>

  <div>
  <h5>商品详情</h5>
  <img src="../../assets/images/shiliaoFang/wugu.png" alt="">
  </div>

  
  
  <h4>产品特点</h4>
  <div class="goods-chanpintop">
 
  <img src="../../assets/images/shiliaoFang/jingxuantext.png" alt="" class="goods-jingxuan-text">
  <img src="../../assets/images/shiliaoFang/jingxuan.png" alt="" class="goods-jingxuan">
  <div class="chanpin-text">
  <p>沂蒙姑娘精选来自沂蒙地区农家种植的优质红小豆进行严格
  的人工挑选练出色泽鲜艳、颗粒饱满的豆子集中运往沂蒙姑
  娘加工车间进行淘洗、晾干、烘焙等一系列加工工艺，确保
  粉材优质</P>
  </div>
  </div>

  <div class="goods-chanpincenter">
  <img src="../../assets/images/shiliaoFang/xianmotext.png" alt="" class="goods-jingxuan-text">
  <img src="../../assets/images/shiliaoFang/xianmo.png" alt="" class="goods-jingxuan">
  <div class="chanpin-text">
  <p>沂蒙姑娘精选来自沂蒙地区农家种植的优质红小豆进行严格
  的人工挑选练出色泽鲜艳、颗粒饱满的豆子集中运往沂蒙姑
  娘加工车间进行淘洗、晾干、烘焙等一系列加工工艺，确保
  粉材优质</P>
  </div>
  </div>

 <div class="goods-chanpintop">
  <img src="../../assets/images/shiliaoFang/meibaotext.png" alt="" class="goods-jingxuan-text">
  <img src="../../assets/images/shiliaoFang/meibao.png" alt="" class="goods-jingxuan">
  <div class="chanpin-text">
  <p>沂蒙姑娘精选来自沂蒙地区农家种植的优质红小豆进行严格
  的人工挑选练出色泽鲜艳、颗粒饱满的豆子集中运往沂蒙姑
  娘加工车间进行淘洗、晾干、烘焙等一系列加工工艺，确保
  粉材优质</P>
  </div>
  </div>

  <div class="goods-chanpincenter">
   <div class="goods-jieshao">
    <img src="../../assets/images/shiliaoFang/hongdou.png" alt="" class="fen1">
    <img src="../../assets/images/shiliaoFang/fenfen1.png" alt="" class="fen2">
    <img src="../../assets/images/shiliaoFang/fenfen2.png" alt="" class="fen3">
    <img src="../../assets/images/shiliaoFang/hu.png" alt="" class="fen4">
    
   </div>
   <p class="goods-jieshaofen">粉粉</p>
    <p class="goods-jieshaoshi">的主要食材</p>
  </div>

  <div class="gongyi-beijing">
    <span class="gongyi">传统工艺</span>
    <span class="gongyi1">精细研磨</span>
    <img src="../../assets/images/shiliaoFang/yingwen.png" alt="" class="ying">
    <img src="../../assets/images/shiliaoFang/diwen.png" alt="" class="di">
    <img src="../../assets/images/shiliaoFang/yanmo.png" alt="" class="di">
    <p class="p1">低温烘焙，瞬间熟化工艺</p><p class="p2">研磨成粉</p>
  </div> 

 <div class="goods-bottom">
    <h2>加入购物车</h2>
    <div>
      <span>食谱</span>
      <img src="../../assets/images/shiliaoFang/yiren.png" alt="" class="yiren">
      <img src="../../assets/images/shiliaoFang/add.png" alt="" class="shipu-add" v-on:click="buyHandler">
    </div>
    <div>
      <span>单品</span>
      <img src="../../assets/images/shiliaoFang/danpin1.png" alt="" class="danpin1">
      <img src="../../assets/images/shiliaoFang/add.png" alt="" class="danpin1-add" v-on:click="buyHandler">
      <img src="../../assets/images/shiliaoFang/danpin2.png" alt="" class="danpin2">
      <img src="../../assets/images/shiliaoFang/add.png" alt="" class="danpin2-add" v-on:click="buyHandler">
    </div>
  </div> 

   <router-link to="/shopcar">
   <img src="../../assets/images/shopCar.png" alt="" class="scar" />
   </router-link>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Goods',
  methods:{
   clickHander(){
     window.history.back();

   },
    buyHandler() {
     alert("添加成功");
    }
  },
  components: {
     
  }
}
</script>
<style lang="less" scoped>
.back{
   width:0.21rem;
   height:0.39rem;
   position: absolute;
   top:0.5rem;  
   left: 0.3rem;
}
.back-span{
   font-size:0.3rem;
   font-family:PingFang-SC-Medium;
   font-weight:500;
   color:rgba(255,255,255,1);
   position: absolute;
   top:0.5rem;  
   left: 0.7rem;
 
}
.share{
   width:0.36rem;
   height:0.34rem;
   position: absolute;
   top:0.4rem;  
   right:0.3rem;
   
}
.goods-text{
  overflow: hidden
}
.goods-span1{
  font-size:0.4rem;
  font-family:PingFang-SC-Regular;
  font-weight:400;
  color:rgba(0,0,0,1);
  float: left;
  padding-left: 0.2rem;
}
.goods-span2{
   font-size:0.4rem;
   font-family:PingFang-SC-Regular;
   font-weight:400;
   color:rgba(241,14,14,1);
   float: left;
   padding-left: 4rem;
}
h5{
  font-size:0.26rem;
  font-family:PingFang-SC-Regular;
  font-weight:400;
  color:rgba(0,0,0,1);
  text-align:center;
  margin: 0.3rem 0.4rem;
}
h4{
  height:0.34rem;
  font-size:0.36rem;
  font-family:PingFang-SC-Regular;
  font-weight:bold;
  color:rgba(0,0,0,1);
  line-height:0.31rem;
  margin: 0.5rem 0.2rem;
  text-align:center;
}
.goods-chanpintop{
  background-image: url("../../assets/images/shiliaoFang/huawenright.png");
  background-size: 4.2rem;
  background-repeat:no-repeat;
  background-position:3rem -0.1rem;
}
.goods-chanpincenter{
  background-image: url("../../assets/images/shiliaoFang/huawen.png");
  background-size: 4.2rem;
  background-repeat:no-repeat;
  background-position:0.5rem -0.1rem;
}
.goods-jingxuan-text{
  width:0.64rem;
  height:1.26rem;
  margin: 0.9rem 0.7rem 0.2rem 1.7rem;
}
.goods-jingxuan{
  width:1.63rem;
  height:1.63rem;
}

.chanpin-text p{
  width:6.3rem;
  height:2.3rem;
  font-size:0.2rem;
  font-family:PingFang-SC-Regular;
  font-weight:400;
  color:rgba(0,0,0,1);
  line-height:0.37rem;
  text-align: left;
  margin-left: 0.8rem;
}
.fen1{
  width:1.61rem;
  height:1.6rem;
  float: left;
  margin: 0.8rem 0.3rem 1rem 1rem;
}
.fen2{
  width:2.17rem;
  height:2.64rem;
  float: left;
}
.fen3{
  width:1.61rem;
  height:1.6rem;
  float: left;
  margin-top: 0.8rem;
  margin-left: 0.3rem;
}
.fen4{
    width:4.5rem;
    height:3rem;
    opacity:0.41;
    position: absolute;
    top: 27rem;
    left: 1.5rem;
}
.goods-jieshao{
  margin-top: 2rem;
}
.goods-jieshaofen{
  width:0.63rem;
  height:0.5rem;
  font-size:0.31rem;
  font-family:PingFang-SC-Regular;
  font-weight:bold;
  color:rgba(0,0,0,1);
  position: relative;
  top: -4.8rem;
  right: 1.6rem;

}
.goods-jieshaoshi{
  font-size:0.27rem;
  font-family:PingFang-SC-Regular;
  font-weight:400;
  color:rgba(0,0,0,1);
  position: relative;
  top: -4.3rem;
  left: 0.2rem;
}
.gongyi-beijing{
  background-image: url("../../assets/images/shiliaoFang/huawenright.png");
  background-size: 4.2rem;
  background-repeat:no-repeat;
  background-position:3rem -0.1rem;
}
.gongyi{
  font-size:0.44rem;
  font-family:PingFang-SC-Regular;
  font-weight:400;
  color:rgba(0,0,0,1);
  margin-left: -1rem;
}
.gongyi1{
  font-size:0.44rem;
  font-family:PingFang-SC-Regular;
  font-weight:400;
  color:rgba(0,0,0,1);
  margin-left: 0.3rem;
}
.ying{
  width:2.78rem;
  height:0.12rem;
  margin-left: 2.5rem;
  display: block
}
.di{
width:2.31rem;
height:2.31rem;
margin-left: 1rem;
margin-top: 0.3rem;

}
.p1{
font-size:0.23rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(1,1,1,1);
margin-left: 0.8rem;
}
.p2{
font-size:0.23rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(1,1,1,1);
margin-top: -0.3rem;
margin-left: 5rem;
}

.scar{
  position: fixed;
  bottom: 0.5rem;
  left:6rem;
 }
 .goods-bottom{
  width:7.5rem;
  height:3.76rem;
  background:rgba(255,255,255,1);
  margin-top: 1rem;

 }
h2{
font-size:0.26rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(0,0,0,1);
margin-left: 0.3rem;
}
.goods-bottom span{
  font-size:0.2rem;
  font-family:PingFang-SC-Regular;
  font-weight:400;
  color:rgba(0,0,0,1);
  float: left;
  margin-left: 0.5rem;
  margin-top: 0.6rem;
}
.yiren{
  width:2.91rem;
  height:1.11rem;
  margin: 0.3rem 0.6rem;
}
.danpin1{
  width:0.97rem;
  height:0.97rem;
   margin: 0.3rem 0.6rem;
}
.danpin2{
  width:0.97rem;
  height:0.97rem;
   margin: 0.3rem 0.4rem;
}
.shipu-add{
  width:0.34rem;
  height:0.34rem;
  position: relative;
  bottom:1.4rem;
  right: 0.7rem;
}
.danpin1-add{
  width:0.34rem;
  height:0.34rem;
  position: relative;
  bottom: 1.3rem;
  right: 0.7rem;
}
.danpin2-add{
  width:0.34rem;
  height:0.34rem;
  position: relative;
  bottom:1.3rem;
  right: 0.5rem;
}
</style>
