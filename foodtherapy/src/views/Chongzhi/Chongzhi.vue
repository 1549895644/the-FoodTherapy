<template>
  <div>
      <MineListTop :title="this.title"/>
      <Chongzhiview/>
  </div>
</template>

<script>
import Chongzhiview from "../../components/Chongzhiview.vue"
import MineListTop from "../../components/MineListTop.vue"
export default {
  name: 'home',
  data(){
      return{
          title :"重置密码"
      }
  },
  components: {
    Chongzhiview,
    MineListTop
  }
}
</script>
<style lang="less" scoped>

</style>