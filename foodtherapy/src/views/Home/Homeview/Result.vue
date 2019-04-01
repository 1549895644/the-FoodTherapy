<template>
    <div>
        <TopNav title="肺部测试" :back="back" @sendBackData="backEvent($event)"/>
        <div class="result">
            <p class="result_title">测试结果</p>
            <div class="result_content">{{homedata.result.result_content}}</div>
            <p class="result_xian"></p>
            <div class="result_resources">结果仅供参考</div>
             <p class="result_xian_rigit"></p>
        </div>
        <div class="recommend">
            <div class="recommend_title">为您推荐：</div>
            <dir class="recommend_content" v-for="(itme,index) in homedata.result.recommend" :key="index">
                <div class="recommend_content_img">
                    <img :src="itme.recommendimg" alt="">
                    <p>{{itme.recommendtitle}}</p>
                    </div>                              
            </dir>
        </div>
    </div>
</template>
<script>
import TopNav from "../../../components/TopNav"
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
    name:"Result",
     data(){
        return{
            back:{
                backText:"< 关闭"
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
           this.$router.replace('/')      
        },
    },
}
</script>
<style scoped>
.result{
    width:7.5rem;
    height:5.97rem;
    background:rgba(255,255,255,1);
    margin-top: 0.16rem;
    overflow: hidden;
    
}
.result_title{
    width:1.6rem;
    height:0.34rem;
    font-size:0.28rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(0,0,0,1);
    margin-left: 3.2rem;
    margin-top: 0.7rem;
}
.result_content{
    width:5.27rem;
    height:1rem;
    font-size:0.22rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(0,0,0,1);
    margin-left: 1.1rem;
    margin-top: 0.63rem;
    line-height: 0.38rem;
    
}
.result_resources{
    width:1.4rem;
    height:0.2rem;
    font-size:0.2rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(149,149,149,1);
    margin-top: 1.68rem;
    margin-left: 0.1rem;
    float: left;
}
.result_xian{
    width: 1.38rem;
    height: 0.04rem;
    background-color: #f1f1f1;
    margin-left: 1.7rem;
    margin-top: 1.8rem;
    float: left;
}
.result_xian_rigit{
    width: 1.38rem;
    height: 0.04rem;
    background-color: #f1f1f1;
    margin-left: 0.1rem;
    margin-top: 1.8rem;
    float: left;
}
.recommend{
    width:7.5rem;
    height:6.18rem;
    background:rgba(255,255,255,1);
    margin-top: 0.14rem;
    overflow: hidden;
}
.recommend_title{
    width:1.31rem;
    height:0.25rem;
    font-size:0.26rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(0,0,0,1);
    margin-left: 0.19rem;
    margin-top: 0.21rem;
}
.recommend_content{
    width:6.70rem;
    margin-left: 0.41rem;
    font-size:0.2rem;
    font-family:PingFang-SC-Regular;
    color:rgba(0,0,0,1);
   
}
.recommend_content_img{
    width: 2.98rem;
    height:1.72rem;
    float: left;
    margin-top: 0.15rem;
    margin-left: 0.25rem;
    text-align: center;
    margin-bottom: 0.1rem;
}
.recommend_content_img img{
    width:2.98rem;
    height:1.32rem;    
}
.recommend_content_img p{
    margin-top: 0.15rem;
}

</style>


