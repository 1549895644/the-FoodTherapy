<template>
    <div>
        <TopNav :back="back" @sendBackData="backEvent($event)"/>
        <div class="home_list">
            <div class="list_conter">
                <div v-html="homedata.Lists[this.$route.params.id ].Listtitle" class="list_conter_title"></div>
                <div class="list_conter_xian"></div>
                <div class="list_conter_author">作者：王焱</div>
                <div class="list_conter_img">
                    <img :src="homedata.Lists[this.$route.params.id ].Listimg" alt="">
                </div>
                <div class="list_conter_jianjie">你是重度零食依赖者吗？无论看书看片，心情好的时候，还是心情不好的时候，无论忙的时候还是闲的时候，嘴巴可都没闲过！吃吃喝喝本是人生常态，要不我们为什么要活着！可是如今零食里的添加剂越来越多，即使很多标榜「安全」的零食，也存在很多隐患。一定要擦亮眼睛哎呀！</div></div>
                <div class="list_conter_conter1" v-for="(itme,index) in homedata.HomeList.list_conters" :key="index">
                    <p>{{itme.title}}</p>{{itme.tetx}}
                </div>
                <div class="list_conter_xian2"></div>
                <div class="list_tuijian_title">为你推荐</div>
                <div class="list_tuijian_shi">
                    <div class="list_tuijian_shipu">食谱</div>
                    <div  class="list_tuijian_img">
                        <img :src="homedata.HomeList.list_tuijian1" alt="">
                    </div>
                </div>
                <div class="list_tuijian_shi">
                    <div class="list_tuijian_shipu">单品</div>
                    <div  class="list_tuijian_img2">
                        <img :src="homedata.HomeList.list_tuijian3" alt="">                    
                    </div>
                    <div  class="list_tuijian_img3">
                        <img :src="homedata.HomeList.list_tuijian2" alt="">                    
                    </div>
                </div>
                <div class="list_car">
                    <img :src="homedata.HomeList.list_car" alt="">
                    </div>                                
               
        </div>
    </div>
</template>
<script>
import TopNav from "../../../components/TopNav"
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
    name:"HomeListView",
     data(){
        return{
            back: {
                closeImg: require("../../../assets/images/back.png"),
                backText: "返回"
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
    width: 100%;
    height: 100%;
    background:rgba(255,255,255,1);
}
.home_list{
    width: 100%;
    background:rgba(255,255,255,1);
    overflow: hidden;

}
.list_conter{
    width: 6.95rem;
    height: 100%;
    margin: 0 auto;
}
.list_conter_title{
    width:6.75rem;
    height:1.81rem;
    font-size:0.6rem;
    color:rgba(69,184,137,1);
    margin: 0 auto;
    margin-top: 0.48rem;
    text-align: center;
    margin-bottom: 0.4rem;
}
.list_conter_xian{
    width:6.75rem;
    height:0.01rem;
    background:rgba(176,176,176,1);
    opacity:0.7;
}
.list_conter_author{
    width:1.4rem;
    height:0.27rem;
    font-size:0.24rem;
    font-family:PingFang-SC-Regular;
    color:rgba(55,55,55,1);

}
.list_conter_img{
    width:3.36rem;
    height:2.23rem;
    margin: 0 auto;
    margin-top: 0.28rem;
}
.list_conter_jianjie{
    width:6.94rem;
    height:1.91rem;
    font-size:0.24rem;
    line-height: 0.4rem;
    font-family:PingFang-SC-Regular;
    color:rgba(42,183,137,1);
    margin: 0 auto;
    margin-top: 0.21rem;
}
.list_conter_conter1{
    width:7.06rem;
    height:100%;
    font-size:0.24rem;
    line-height: 0.4rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    
    margin: 0 auto;
    margin-top: 0.64rem;
}
.list_conter_conter1 p{
     font-size:0.28rem;
     color:rgba(67,191,146,1);
}
.list_conter_xian2{
    width:6.75rem;
    height:0.01rem;
    background:rgba(176,176,176,1);
    opacity:0.7;
    margin: 0 auto;
    margin-top: 1.23rem;
    
}
.list_tuijian_title{
    width:1.4rem;
    height:0.29rem;
    font-size:0.3rem;
    font-family:PingFang-SC-Regular;
    color:rgba(35,35,35,1);
    margin-left: 0.35rem;
}
.list_tuijian_shi{
    width: 4.7rem;
    height: 2.11rem;
}
.list_tuijian_shipu{
    width:0.42rem;
    height:0.22rem;
    font-size:0.2rem;
    font-family:PingFang-SC-Regular;
    color:rgba(0,0,0,1);
    margin-left:0.4rem;
    margin-top: 1rem;
    float: left;
}
.list_tuijian_img{
    width:2.91rem;
    height:1.11rem;
    margin-left: 0.45rem;
    margin-top: 0.5rem;
    float: left;
}
.list_tuijian_img2{
    width: 1.13rem;
    height: 0.99rem; 
    margin-left: 0.45rem;
    margin-top: 0.4rem;
    float: left;
}
.list_tuijian_img3{
    width: 1.66rem;
    height: 1.11rem; 
    margin-left: 0.45rem;
    margin-top: 0.4rem;
    float: left;
    margin-bottom: 0.5rem;
}
.list_car{
    width:0.82rem;
    height:0.82rem;
    border:0.01rem solid rgba(67, 191, 146, 1);
    border-radius:50%;
    margin-top: -1.3rem;
    margin-left: 6.2rem;
}
.list_car img{
    width: 80%;
    height: 80%;
    margin-left: 0.1rem;
    margin-bottom: 0.15rem;
}
.mystyle{
    color: red !important;
}


</style>


