<template>
    <div>
        <div v-for="(item,index) in Alldata" 
                :key="index">
            <div class="nav">
            <span class="navzi">
                {{item.title}}
            </span>
        </div>
        
        <div class="shiliaowarp">
            <div class="tu"><img :src="item.images" alt=""></div>
            <div class="xiaoguo">
                <span class="zhonglei">{{item.food}}</span>
                <span class="xiao">{{item.xiaoguo}}</span>
                <span class="bao">{{item.baozhiqi}}</span>
            </div>
            <div class="price">
                <span class="price-xian">{{item.newprice}}</span>
                <del class="price-yuan">{{item.oldprice}}</del>
                <span class="shuliang">{{item.shuliang}}</span>
            </div>
        </div>
        
        <div class="allprice">
            <span class="allprice-zi">{{item.allprice}}</span>
        </div>
        <div class="tijiao">
            <div class="anniu-queren">确认收货</div>
            <router-link :to='{name : "Xiangqing" , params : {id : item.id}}' tag="div" class="anniu-chakan">查看物流</router-link>
            <div class="anniu-yanchang">延长物流</div>
        </div>
        </div>
    </div>
</template>
<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
    name : "Allcontent",
   
     computed: {
        getAlldata(){},
        ...mapState(["Alldata"])
       
    
    }
}
</script>
<style scoped>
.nav{
    width:7.5rem;
    height:1rem;
    background:rgba(255,255,255,1);
    margin-top: 0.3rem;
    clear: both;
    position: relative;
    
}
.navzi{
    
    font-size:0.3rem;
    color:rgba(143,143,143,1);
    position: absolute;
    top: 0.3rem;
    left: 0.3rem;
    
}
.shiliao{
    width: 7.5rem;
    height: 2rem;
}
.shiliaowarp{
    width: 6.7rem;
    height: 1.31rem;
    margin: 0.345rem auto;
    
}
.shiliaowarp>div{
    float: left;

}
.tu{
    width:1.5rem;
    height:1.31rem; 

}
.tu>image{
    width: 100%;
}
.xiaoguo{
    width: 2.9rem;
    height: 1.31rem;

    margin-left: 0.5rem;
    position: relative;
}
.price{
    width: 1rem;
    height: 1.31rem;

    margin-left: 0.8rem;
    position: relative;
}
.zhonglei{
    
    font-size:0.26rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(143,143,143,1);
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
}
.xiao{
    font-size:0.22rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(143,143,143,1);
    display: inline-block;
    position: absolute;
    top: 0.5rem;
    left: 0;
}
.bao{
    font-size:0.22rem;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(164,0,0,1);
    display: inline-block;
    position: absolute;
    top: 0.9rem;
    left: 0;
    width: 1rem;
    height: 0.3rem;
    border: 0.03rem solid #A40000;
    text-align: center;
    line-height: 0.3rem;
}
.price-xian{
    font-size:0.22rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(143,143,143,1);
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
}
.price-yuan{
    font-size:0.22rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(143,143,143,1);
    display: inline-block;
    position: absolute;
    top: 0.5rem;
    right: 0;
}
.shuliang{
    font-size:0.22rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(143,143,143,1);
    display: inline-block;
    position: absolute;
    top: 1rem;
    right: 0;
}
.allprice{
    width:7.5rem;
    height:0.68rem;
    background:rgba(255,255,255,1);
    position: relative;
}
.allprice-zi{
    display: block;
    width:4.31rem;
    height:0.22rem;
    font-size:0.22rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(143,143,143,1);
    position: absolute;
    right: 0.3rem;
    top: 0.2rem;
}
.tijiao{
    width:7.5rem;
    height:0.68rem;
    background:rgba(255,255,255,1);
    margin-top: 0.03rem;
}

.tijiao>div{
    width:1.2rem;
    height:0.4rem;
    font-size:0.22rem;
    border-radius: 0.2rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(143,143,143,1);
    text-align: center;
    line-height: 0.4rem;
    float: right;
    margin-right: 0.5rem;
    margin-top: 0.1rem;
    
}
.anniu-queren{
    border: 0.03rem solid #43BF92;
    background-color: #43BF92;
    color: #FFFFFF !important; 
    
}
.anniu-yanchang{
    border: 0.03rem solid #8F8F8F;
}
.anniu-chakan{
    border: 0.03rem solid #8F8F8F;
}

</style>
