import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderInfo: {},
    userInfo: {},
    isTextState: "简易版尚未测试",
    ProTextState: "专业版尚未测试",
    homedata: {},
    isLogin: false,
    arrByZM:[],
    Alldata: [
      {
        id: 0,
        images: require("./assets/images/myOrder.png"),
        title: "安心食疗店",
        food: "五谷杂粮粥",
        xiaoguo: "增进食欲,促进消化",
        baozhiqi: "七天退换",
        newprice: "￥54",
        oldprice: "￥60",
        shuliang: "X1",
        allprice: "共1件商品 合计：￥54.00（含运费￥0.00）",
        logo : require("./assets/images/login-logo.png")

      },
      {
        id: 1,
        images: require("./assets/images/myorder2.png"),
        title: "安心食疗店",
        food: "药膳汤",
        xiaoguo: "治疗疾病、养生保健",
        baozhiqi: "七天退换",
        newprice: "￥54",
        oldprice: "￥60",
        shuliang: "X1",
        allprice: "共1件商品 合计：￥54.00（含运费￥0.00）"

      },
      {
        id: 2,
        images: require("./assets/images/myorder3.png"),
        title: "安心食疗店",
        food: "药膳鸡汤",
        xiaoguo: "养心安神、抗疲劳、养颜美容",
        baozhiqi: "七天退换",
        newprice: "￥54",
        oldprice: "￥60",
        shuliang: "X1",
        allprice: "共1件商品 合计：￥54.00（含运费￥0.00）"

      }

    ],
    XiangqingData: {
      names: "王焱",
      telephone: "15181321992",
      adress: "北京市海淀区西三旗桥东金燕龙大厦",
      dingdanhao: "830179046666",
      xiandantime: "2016-12-01",
    },
    cityState:""
  },
  mutations: {
    setOrder(state, order) {
      state.orderInfo = order
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    setarrByZM(state,arrByZM){
      state.arrByZM=arrByZM
    },
    setOrder(state, homedata) {
      state.homedata = homedata
    },
    setOrder(state,homedata){
      state.homedata = homedata
    },
    userStatus(state, flag) {
      state.isLogin = flag
    },
    setCity(state,city){
      state.cityState = city;
    },
    changeTextState(state) {
      state.isTextState = "压力型"
    },
    changeProTextState(state) {
      state.ProTextState = "紧张压力型"
    },
  },
  actions: {
    changeTextAction({ commit }) {
      commit("changeTextState");
    },
    changeProTextAction({ commit }) {
      commit("changeProTextState")
    },
    setUser({ commit }, flag) {
      commit("userStatus", flag)
    },
    changeCityAction({ commit},city){
      commit("setCity",city)
    }
  },
  getters: {
    getuserInfo(state) {
      return state.userInfo ? state.userInfo : "订单由问题，请重新下单"
    },
    userStatus(state, flag) {
      state.isLogin = flag
    },
     //获取登录状态
     isLogin: state => state.isLogin,
  },

})
