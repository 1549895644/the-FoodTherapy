<template>
  <div class="box">
    <div class="container">
      <!-- 姓名 -->
      <div class="item_box">
        <div class="msg">姓名</div>
        <input type="text" placeholder="最少两个字，最多12个字" @blur="getnameHandler" v-model="name">
      </div>
      <!-- 电话 -->
      <div class="item_box">
        <div class="msg">电话</div>
        <input type="text" placeholder="请填写正确手机号" v-model="phone" @blur="getphoneHandler">
      </div>
      
      <!-- 省份 -->
      <div class="item_box">
        <div class="msg">省份</div>
        <input type="text" placeholder="北京">
      </div>
      <!-- 城市 -->
      <div class="item_box">
        <div class="msg">城市</div>
        <input type="text" placeholder="北京">
      </div>
      <!-- 地区 -->
      <div class="item_box">
        <div class="msg">地区</div>
        <input type="text" placeholder="海淀区">
      </div>
      <!-- 地址 -->
      <div class="item_box">
        <div class="msg">地址</div>
        <input type="text" v-model="address" @blur="getaddressHandler" placeholder="最少两个字，最多12个字">
      </div>
      <!-- 邮编 -->
      <div class="item_box">
        <div class="msg">邮编</div>
        <input type="text" placeholder="输入正确的邮箱" v-model="email" @blur="getemailHandler">
      </div>
      <!-- 保存 -->
      <div class="new" @click="togetgoods">保存并使用</div>
    </div>
  </div>
</template>

<script>
import  {mapMutations} from 'vuex'
export default {
  name: "NewAddress",
  data() {
    return {
      phone: "",
      name: "",
      address: "",
      email: "",
      userInfo: {}
    };
  },
  methods: {
      ...mapMutations(['setUserInfo']),
    togetgoods() { 
      this.$emit("togetgoodsHandler", event);
      this.setUserInfo(this.userInfo)
     
    },
    // 电话号码验证
    getphoneHandler() {
      if (!(/^1(3|4|5|7|8)\d{9}$/.test(this.phone))) {
        this.phone = "";
        return false;
      }

      this.userInfo["phone"] = this.phone;
    },
    // 姓名验证
    getnameHandler() {
      let reg = /^[\u4E00-\u9FA5]{2,4}$/;
      if (!reg.test(this.name)) {
        this.name = "";
      } else {
        this.name = this.name;
        this.userInfo["name"] = this.name;
      }
    },
    // 地址验证
    getaddressHandler() {
      let reg = /^[\u4E00-\u9FA5]{2,12}$/;
      if (!reg.test(this.address)) {
        this.address = "";
      } else {
        this.address = this.address;
        this.userInfo["address"] = this.address;
      }
    },
    getemailHandler() {
      let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (!reg.test(this.email)) {
        this.email = "";
      } else {
        this.email = this.email;
        this.userInfo["email"] = this.email;
      }
    }
  }
};
</script>

<style scoped lang="less">
.box {
  width: 100%;
  background-color: white;
}
.new {
  width: 5.12rem;
  height: 0.76rem;
  line-height: 0.76rem;
  background: rgba(67, 191, 146, 1);
  border-radius: 0.1rem;
  margin: 0 auto;
  font-size: 0.36rem;
  text-align: center;
  margin-top: 0.2rem;
}
.container {
  width: 7.1rem;
  background-color: white;
  margin: 0 auto;
}
.item_box {
  width: 7.1rem;
  display: flex;
  border-bottom: 1px solid #b8b8b8;
  input {
    font-size: 0.24rem;
    flex-grow: 6;
    height: 1rem;
    line-height: 1rem;
    color: #b8b8b8;
  }
}
.msg {
  width: 1.05rem;
  height: 1rem;
  line-height: 1rem;
  text-align: left;
  font-size: 0.3rem;
  flex-grow: 1;
}
</style>

