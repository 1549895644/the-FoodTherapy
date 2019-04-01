<template>
    <div>
        <MineListTop :title="this.title"></MineListTop>

        <MineListcon/>
        
    </div>
</template>
<script>
import MineListTop from "../../../components/MineListTop.vue"
import MineListcon from "../../../components/MineListcon.vue"
export default {
    name : 'Minelist',
    data(){
        return{
            title : "我的订单"
        }
    },
    components: {
        MineListTop,
        MineListcon
    }
}
</script>
<style scoped>

</style>
