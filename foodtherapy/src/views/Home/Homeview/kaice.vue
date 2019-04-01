<template>
    <div>
        <TopNav title="肺部测试" :back="back" @sendBackData="backEvent($event)"/>
       <div class="kaice">
           <p class="kaice_biaoti">1/2</p>
           <p class="kaice_biaonei">你一天吸烟的频率？</p>
           <div v-for="(itme,index) in homedata.leibiao " :key="index">
           <div class="kaice_leibiao">{{itme}}</div>
           </div>
           <router-link to="/result" tag="div" class="kaice_tijiao">提交</router-link>

       </div>
    </div>
</template>
<script>
import TopNav from "../../../components/TopNav"
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
    name:"Kaice",
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
*{
    font-size:0.28rem; 
}
.kaice{
    width: 100%;
    height: 100%;
}
.kaice_biaoti{
    width:0.4rem;
    height:0.27rem;
    font-size:0.26rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(0,0,0,1);
    margin-top: 0.95rem;
    margin-left: 0.68rem;
}
.kaice_biaonei{
    width:2.7rem;
    height:0.33rem;
    font-size:0.28rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(0,0,0,1);
    margin-left: 0.68rem;
    margin-top: 0.3rem;
    margin-bottom: 0.73rem;
}
.kaice_leibiao{
    width:5.69rem;
    height:0.8rem;
    background:rgba(255,255,255,1);
    border:0px solid rgba(180,180,180,1);
    border-radius:0.5rem;
    margin-left: 0.9rem;
    margin-bottom: 0.45rem;
    text-align: center;
    line-height: 0.8rem;    
}
.kaice_leibiao:hover{
    background: red;
}
.kaice_tijiao{
    width:6rem;
    height:0.9rem;
    background:rgba(67,191,146,1);
    border-radius:0rem;
    text-align: center;
    line-height: 0.9rem;
    font-size:0.36rem;
    font-family:PingFang-SC-Regular;
    color:rgba(255,255,255,1);
     margin-left: 0.75rem;
     margin-top: 1.02rem;
}
</style>


