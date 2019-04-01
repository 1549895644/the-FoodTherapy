<template>
    <div>
       <TopNav :back="back" @sendBackData="backEvent($event)"/>
       <div v-if="arrByZM.length>0">
            <TabList :tabList="arrByZM"/>
       </div>
       <div v-else>
          您搜索的食谱不存在
       </div>
    </div>
</template>
<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
import TopNav from "../../components/TopNav"
import TabList from "../../components/TabList"
export default {
    name:"Sosuo",
     data(){
        return{
           back:{
                closeImg:require("../../assets/images/back.png"),
                backText: "返回",  
            },
                      
        }
    },
     computed: {
        ...mapState(["arrByZM"]),         
    },
    components: {
    TabList,
    TopNav
   },
   methods: {
        backEvent(event) {
            window.history.back();
            
        },
    },   
}
</script>
<style scoped>

</style>


