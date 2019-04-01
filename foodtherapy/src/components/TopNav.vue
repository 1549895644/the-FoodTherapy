<template>
  <div class="top_nav">
    <div class="back" @click="backHandler">
      <div class="backImg">
        <img :src="back.closeImg" alt="">
        <span class="back_text">{{ back.backText}}</span>
      </div>
    </div>
    <div class="topNav_title">{{ title }}</div>
    <div class="title_right" @click="completeHandler">
      <img :src="shareImg" alt="">
      {{ titltRight }}
      </div>
  </div>
</template>
<script>
export default {
  name: "TopNav",
  data() {
    return {};
  },
  props: {
    back: {
      type: Object,
      default: function() {
        return {};
      }
    },
    title: {
      type: String,
      default: ""
    },
    titltRight:{
      type:String,
      default:""
    },
    shareImg:{
      type:String,
      dafault:""
    }
  },
  methods: {
      backHandler(event) {
        //   console.log(event);
          this.$emit("sendBackData",event)
          
          
      },
      completeHandler(event){
        this.$emit("successData",event)
      }
  },
};
</script>
<style lang="less" scoped>
.top_nav {
  width: 100%;
  height: 0.88rem;
  background: rgba(67, 191, 146, 1);
  display: flex;
  justify-content: center;
  padding: 0 0.2rem;
  box-sizing: border-box;
}
.top_nav > div {
  flex-grow: 1;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.88rem;
  color: rgba(255, 255, 255, 1);
}
.top_nav .topNav_title {
  font-size: 0.36rem;
  width: 5.05rem;
}
.top_nav .title_right {
  width: 1.17rem;
  text-align: right;
}
.top_nav .backImg{
    width: 1rem;
}
.top_nav .title_right img{
  width: 0.44rem;
  margin-top: 0.2rem;
}
.top_nav.backImg{
  height: 100%;

}
.top_nav .backImg img{
  vertical-align: middle;
  width: 0.27rem;
  margin-right: 0.05rem;

}
</style>

