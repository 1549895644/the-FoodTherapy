<template>
  <div>
      <MineListTop :title="this.title"/>
      <Findmimaview/>
  </div>
</template>

<script>
import Findmimaview from "../../components/Findmimaview"
import MineListTop from "../../components/MineListTop.vue"
export default {
  name: 'home',
  data(){
      return{
          title :"找回密码"
      }
  },
  components: {
    Findmimaview,
    MineListTop
  }
}
</script>
<style lang="less" scoped>

</style>