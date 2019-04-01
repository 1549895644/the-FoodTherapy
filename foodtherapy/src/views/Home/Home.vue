<template>
  <div class="home">
    <BottomNav />
    <Swiper :banners="banners"/>
    <HomeTop :Tops="Tops"/>
    <HomeList :Lists="Lists"/>   
  </div>
</template>

<script>
// @ is an alias to /src
import BottomNav from "../../components/BottomNav"
import Swiper from "../../components/Swiper"
import HomeTop from "../../components/HomeTop"
import HomeList from "../../components/HomeList"
import { mapMutations } from "vuex"
export default {
  name: 'home',
  components: {
    BottomNav,
    Swiper,
    HomeTop,
    HomeList
  },
  data(){
    return{
      banners:[],
      Tops:[],
      Lists:[],
      homedata:{}       
    }
  },
  methods:{
    ...mapMutations(["setOrder"]),
  },
  created() {     
    this.$axios.get("http://localhost:3001/api/index")
    .then(res => {
      this.banners=res.data.banners; 
      this.Tops=res.data.Tops;
      this.Lists=res.data.Lists;
      this.homedata=res.data;
      this.setOrder(this.homedata);           
    })
    .catch(error => {
      console.log(error);
    })
  }
   
}
</script>
<style lang="less" scoped>
*{
  background: white;
  }

</style>

