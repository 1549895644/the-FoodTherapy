import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from 'axios';
import dateTime from 'vue-date-time-m';
import qs from "querystring"
import Tabs from "./components/Tabs"
import {Picker} from "vant"
import 'vant/lib/picker/style';
Vue.use(Picker);
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false
Vue.prototype.$axios=Axios
Vue.use(ElementUI);
Vue.use(Tabs);
Vue.component('data-time', dateTime);


Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if(config.method === 'post'){
    config.data = qs.stringify(config.data)
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if(response.status !== 200){
    return {
      msg:"请求失败"
    }
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
}); 


/* Vue.prototype.$axios = Axios;
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; */




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
