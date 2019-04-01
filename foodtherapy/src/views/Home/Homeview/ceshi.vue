<template>
    <div>
        <TopNav title="肺部测试" :back="back" @sendBackData="backEvent($event)"/>
        <div class="ceshi_img">
            <img :src="homedata.ceshi.ceshimg" alt="">
        </div>
        <div class="ceshi_tetx">
            <span>{{homedata.ceshi.tetx}}</span>人参与了测试
        </div>
        <router-link to="/kaice" tag="div" class="ceshi_anniu">
            <p>
                开始测试
            </p>

        </router-link>
    </div>
</template>
<script>
import TopNav from "../../../components/TopNav"
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
    name:"Ceshi",
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
*{
    font-size:0.26rem;
}
.ceshi_img{
    width:7.5rem;
   height:8.81rem;
}
.ceshi_tetx{
    width:2.32rem;
    height:0.25rem;
    font-size:0.26rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    margin-top: 1.8rem; 
    margin-left: 2.6rem;  
}
.ceshi_tetx span{
    color:rgba(255,5,5,1);
}
.ceshi_anniu{
    width:6rem;
    height:0.9rem;
    background:rgba(67,191,146,1);
    border-radius:0rem;
    margin-top: 0.32rem;
    margin-left: 0.75rem;
    text-align: center;
    line-height: 0.9rem;
}
.ceshi_anniu p{
    font-size:0.36rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
}

</style>


