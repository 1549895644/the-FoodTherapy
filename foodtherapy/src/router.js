import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import ShiLiao from './views/ShiLiao/ShiLiao'
import SiRen from './views/SiRen/SiRen'
import Mine from './views/Mine/Mine'
import Minelist from './views/Mine/Minelist/Minelist.vue'
import All from "./views/Mine/Minelist/All.vue"
import Fukuan from "./views/Mine/Minelist/Fukuan.vue"
import Fahuo from "./views/Mine/Minelist/Fahuo.vue"
import Shouhuo from "./views/Mine/Minelist/Shouhuo.vue"
import Pingjia from "./views/Mine/Minelist/Pingjia.vue"
import Xiangqing from "./views/Mine/Minelist/Xiangqing.vue"
import Login from "./views/Login/Login.vue"
import Zhuce from "./views/Zhuce/Zhuce.vue"
import Findmima from "./views/Findmima/Findmima.vue"
import Chongzhi from "./views/Chongzhi/Chongzhi.vue"
import Goods from './views/ShiLiao/Goods'
import Rli from './views/SiRen/Rli'
import OrderList from './components/siren/OrderList'
import Adress from './views/ShopCar/Adress'
import NewAddress from './views/ShopCar/NewAddress'
import OrderOk from './views/ShopCar/OrderOk'
import GetGoods from './views/ShopCar/GetGoods'
import ShopCar from './views/ShopCar/ShopCar'
import Ceshi from "./views/Home/Homeview/ceshi.vue"
import Shipu from "./views/Home/Homeview/shipu.vue"
import Kaice from "./views/Home/Homeview/kaice.vue"
import Result from "./views/Home/Homeview/Result.vue"
import Sosuo from "./views/ShiLiao/sosuo.vue"
import HomeListView from "./views/Home/Homeview/HomeListView.vue"
import HealthInfo from "./views/Mine/HealthInfo"
import Friends from "./views/Mine/JiaRenAndFriends"
import FriendsList from "./views/Mine/FriendsList"
import BasicInfo from "./views/Mine/BasicInfo"
import ChronicDisease from "./views/Mine/ChronicDisease"
import Test from "./views/Mine/Test"
import SimpleTest from "./views/Mine/SimpleTest"
import ProfessionalTest from "./views/Mine/ProfessionalTest"
import Jiaren from "./views/Mine/Jiaren"
import Myname from "./views/Mine/Myname"
import City from "./components/city"



Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,     
    },
    {
      path: '/ceshi',
      name: 'ceshi',
      component: Ceshi, 
    },
    {
      path: '/kaice',
      name: 'kaice',
      component: Kaice, 
    },
    {
      path: '/result',
      name: 'Result',
      component: Result, 
    },
    {
      path: '/shipu',
      name: 'shipu',
      component: Shipu, 
    },
    {
      path: '/shiliao',
      name: 'ShiLiao',
      component: ShiLiao,
     
    },
    {
      path: '/siren',
      name: 'SiRen',
      component: SiRen
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine ,
    },
    {
      path:'/minelist',
      name : 'Minelist',
      component : Minelist,
      children :[
        {
          path:'/',
          name : 'All',
          component : All,
        },
        {
          path:'fukuan',
          name : 'Fukuan',
          component :Fukuan,
        },
        {
          path:'fahuo',
          name : 'Fahuo',
          component : Fahuo,
        },
        {
          path:'shouhuo',
          name : 'Shouhuo',
          component : Shouhuo,
        },
        {
          path:'pingjia',
          name : 'Pingjia',
          component : Pingjia,
        },
      ]
    },
    {
      path: '/xiangqing/:id',
      name: 'Xiangqing',
      component: Xiangqing ,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login ,
    },
    {
      path: '/zhuce',
      name: 'Zhuce',
      component: Zhuce ,
    },
    {
      path: '/find',
      name: 'Findmima',
      component: Findmima ,
    },
    {
      path: '/chongzhi',
      name: 'Chongzhi',
      component: Chongzhi ,
      component: Mine
    },
   
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/rli',
      name: 'Rli',
      component: Rli
    },
    {
      path: '/orderlist',
      name: 'OrderList',
      component: OrderList
      
    },
    {
      path: '/shopcar',
      name: 'ShopCar',
      component: ShopCar
    },
    {
      path: '/adress',
      name: 'Adress',
      component: Adress
    },
    {
      path: '/newaddress',
      name: 'NewAddress',
      component: NewAddress
    },
    {
      path: '/orderok',
      name: 'OrderOk',
      component: OrderOk
    },
    {
      path: '/getgoods',
      name: 'GetGoods',
      component: GetGoods
      
    }, 
    {
      path: '/shopcar',
      name: 'ShopCar',
      component: ShopCar
      
    },
    {
      path:'/healthinfo',
      name:'HealthINfo',
      component:HealthInfo
    },
    {
      path:'/firends',
      name:'Friends',
      component:Friends
    },
    {
      path:'/firendslist',
      name:'FriendsList',
      component:FriendsList
    },
    {
      path:'/basicinfo',
      name:'BasicInfo',
      component:BasicInfo
    },
    {
      path:'/chronic',
      name:'ChronicDisease',
      component:ChronicDisease
    },
    {
      path:'/test',
      name:'Test',
      component:Test
    },
    {
      path:'/simpletest',
      name:'SimpleTest',
      component:SimpleTest
    },
    {
      path:'/professionaltest',
      name:'ProfessionalTest',
      component:ProfessionalTest
    },
    {
      path:'/homelist/:id',
      name:'HomeListView',
      component:HomeListView
    },
    {
      path:'/sosuo',
      name:'Sosuo',
      component:Sosuo
     
    },
    {
      path:'/jiaren',
      name:'Jiaren',
      component:Jiaren
    },
    {
      path:'/myname',
      name:'Myname',
      component:Myname
    },
    {
      path:'/city',
      name:'City',
      component:City
    }
   

  ]
})
