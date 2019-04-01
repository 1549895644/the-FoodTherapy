<template>
  <div class="container">
    <div class="container_box">
      <div class="templ_top">
        <span class="name">李馨</span>
        <span class="phone">12344445555</span>
      </div>
      <div class="addr">
          <p>北京市海淀区西三旗桥东金燕龙大厦101</p>
      </div>
      <div class="templ_bottom">
          <div  @click="colHandler" class="circle" :class="[{ active: flag }]"></div>
          <div class="moren" ><p >设置默认地址</p></div>
          <div class="del">删除</div>
          <div class="rewrite">编辑</div>
      </div>
    </div>
    <div class="new" @click="newAdHandler">
        新增地址
    </div>
  </div>
</template>
<script>
export default {
  name: "Address",
  data(){
    return{
      flag:false
    }
  },
  methods:{
    newAdHandler(event){
      this.$emit("jumpHandler",event)
    },
    colHandler(){
      this.flag = !this.flag

    }
  }
};
</script>
<style scoped lang="less">
/* *{
  background: white;
} */

.container{
  width: 100%;
  height: 100%;
}
.container_box{
    width: 7.1rem;
    height: 2.5rem;
    margin: 0 auto;

}
.templ_top {
  font-size: 0.3rem;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: left;
}
.phone {
  margin-left: 0.8rem;
}
.addr{
    width: 100%;
    font-size:0.3rem;
    margin-top: 0.1rem;
}
.name{
    position:absolute;
    left: 0.23rem;
}
.templ_bottom{
    width:100%;
    
}
.active{
  background-color: green;
}
.circle{
    width: 0.31rem;
    height: 0.31rem;
    border: 0.5px solid rgba(67,191,146,1);
    border-radius: 50%;
    margin-top: 0.4rem;
    float: left;
    margin-right: 0.2rem;
}
.moren{
    font-size:0.26rem;
    float: left;
    margin-top:0.4rem;
    color: #43BF92; 
}
.del{
    float: left;
    font-size:0.26rem;
    margin-top:0.4rem;
    margin-left: 3.72rem;
}
.rewrite{
    float: right;
    font-size:0.26rem;
    margin-top:0.4rem;
    margin-right: 0.12rem;
    
}
.new{
    width:5.12rem;
    height:0.76rem;
    line-height: 0.76rem;
    background:rgba(67,191,146,1);
    border-radius:0.1rem;
    margin: 0 auto;
    font-size:0.36rem;
    text-align: center;
    margin-top: 0.2rem;
}
</style>

