<template>
    <div>
        <TopNav title="每日食谱" :back="back" @sendBackData="backEvent($event)"/>
        <div  class="shipu">
            <div v-for="(itme,index) in homedata.shipu.title" :key="index">        
                <div class="shipu_title">{{itme}}</div>            
                <div class="shipu_center" v-for="(itme,index) in homedata.shipu.imgs" :key="index">
                    <div class="shipu_zhezhao"></div>
                    <p class="shipu_center_tetx">{{itme.wenzi}}</p>   
                    <img :src="itme.img" alt="">
                    
                                
                    </div>                                 
            </div>
        </div>   
    </div>     
</template>
<script>
import TopNav from "../../../components/TopNav"
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
    name:"Shipu",
    data(){
        return{
            back:{
                backText:"< 返回"
            },
            
        }
    },
     computed: {
        ...mapState(["homedata"]) 
    },
    components:{
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
body{
    height: 100%;
    background:rgba(255,255,255,1);
}
.shipu{
    width:7.5rem;
    height: 12.44rem;
    background:rgba(255,255,255,1);
    overflow: hidden;
}
.shipu_title{
    width:1.18rem;
    height:0.52rem;
    background:rgba(67,191,146,1);
    border-radius:0.52rem;
    margin-top: 0.3rem;
    margin-left: 0.51rem;
    font-size:0.26rem;
    font-family:PingFang-SC-Regular;
    color:rgba(255,255,255,1);
    line-height:0.52rem;
    text-align: center;
    margin-bottom: 0.1rem;
    
}
.shipu_center{
    width:6.49rem;
    height:1.52rem;
    margin-left: 0.51rem;
    margin-bottom: 0.25rem;
    /* position: relative;     */
}
.shipu_center img{
    width: 100%;
    height: 100%;  
}
.shipu_zhezhao{
    width: 6.49rem;
    height: 1.52rem;
    position: fixed;
    /* z-index: 1; */
     background:rgba(0,0,0,0.5);
}
.shipu_center_tetx{
    font-size:0.43rem;
    line-height: 1.52rem;
    color:rgba(255,255,255,1);
    position: fixed;
    left: 3.34rem;
    z-index: 1;
   
}

</style>


