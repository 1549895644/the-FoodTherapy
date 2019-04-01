<template>
    <div>
    <swiper :options="swiperOption">
    <swiper-slide v-for="(banner, index) in banners" :key="index">
        <img :src="banner" alt>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    
    name:"Swiper",
    components: {
    swiper,
    swiperSlide
  },
     data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
         autoplay: {
            delay: 1000,//1秒切换一次
        },
         loop : true
      }
    };
  },
   props: {
    banners: {
      type: [Array,Object],
      default: function() {
        return [];
      }
    }
  }
}
</script>
<style scoped>

</style>


