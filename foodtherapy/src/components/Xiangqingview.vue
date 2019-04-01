<template>
    <div>
        <div class="xiangqing-top">
            <div class="tubiao"><i class="el-icon-location"></i></div>
            
            <span class="ming">姓名：{{XiangqingData.names}}</span>
            <span class="phone">{{XiangqingData.telephone}}</span>
            <span class="adress">地址：{{XiangqingData.adress}}</span>
            
        </div>
        <div class="xiangqing-time">
            <span class="danhao">订单号：{{XiangqingData.dingdanhao}}</span>
            <span class="xiandantime">下单时间：{{XiangqingData.xiandantime}}</span>
        </div>
        <div class="xiangqing-father">
            <div class="tu">
                <img :src="Alldata[this.dataid].images" alt="">
            </div>
            <p class="cai-title">{{Alldata[this.dataid].food}}</p>
            <p class="cai-price">{{Alldata[this.dataid].newprice}}</p>
            <p class="shuliang">{{Alldata[this.dataid].shuliang}}</p>
            <p class="zongshu">数量 :1</p>
            <p class="zongprice">价格：{{Alldata[this.dataid].shuliang}}</p>
            <p class="bazhang">大小：大盒；包装：盒装</p>           
        </div>
        <div class="xiangqing-title">
            <span class="genzong">物流跟踪</span>
        </div>
        <div class="xiangqing-wancheng">
            <div class="dingdan">
                <span class="el-icon-circle-check-outline tubiao2"></span>
                <span class="dingdan-wan">您的订单已完成</span>
                <span class="dingdan-time">2016-12-01 12:00</span>
            </div>
            <div class="dingdaner">
                <span class="el-icon-circle-check-outline tubiao2"></span>
                <span class="dingdan-wan">您的订单已完成</span>
                <span class="dingdan-time">2016-12-01 12:00</span>
            </div>
            <div class="dingdaner">
                <span class="el-icon-circle-check-outline tubiao2"></span>
                <span class="dingdan-wan">您的订单已完成</span>
                <span class="dingdan-time">2016-12-01 12:00</span>
            </div>

            <div class="xiangqing-buttom">
                确认收货
            </div>
        </div>
        
    </div>
</template>
<script>
import {mapState, mapGetters, mapMutations } from 'vuex'
export default {
    name : "Xiangqingview",
    data(){
        return{
           dataid : this.$route.params.id
        }
    } ,
    computed: {
        getAlldata(){},
        ...mapState(["Alldata","XiangqingData"])
       
    
    }


    
}
</script>
<style scoped>
.xiangqing-top{
    width:100%;
    height:2.4rem;
    background:rgba(255,255,255,1);
    position: relative;
}
.xiangqing-time{
    width:100%;
    height:1rem;
    position: relative;
}
.xiangqing-father{
    width:100%;
    height:2.02rem;
    background:rgba(255,255,255,1);
    position: relative;
}
.xiangqing-title{
    width: 100%;
    height: 1rem;
    position: relative;
}
.xiangqing-wancheng{
    width:100%;
    height:5.55rem;
    background:rgba(255,255,255,1);

}
.tubiao{
   
    font-size: 0.5rem;
    color: #43BF92;
    display: inline-block;
    position: absolute;
    top: 0.7rem;
    left: 0.5rem;    
    
}

.ming{
    font-size:0.3rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(44,44,44,1);
    position: absolute;
    top: 0.5rem;
    left: 1.5rem;
}
.phone{
    font-size:0.3rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(44,44,44,1);
    position: absolute;
    top: 0.5rem;
    left: 4rem;
}
.adress{
    font-size:0.3rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(44,44,44,1);
    position: absolute;
    top: 1rem;
    left: 1.5rem;
}
.danhao{
    font-size:0.24rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    position: absolute;
    top: 0.5rem;
    left:0.5rem ;
}
.xiandantime{
    font-size:0.24rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    position: absolute;
    top: 0.5rem;
    left: 4rem;
}
.tu{
    width:1.13rem;
    height:0.99rem;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
}
.tu>img{
    width: 100%;
}

.cai-title{
    font-size:0.26rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(0,0,0,1);
    position: absolute;
    top: 0.5rem;
    left: 2rem;
}
.cai-price{
    font-size:0.26rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(0,0,0,1);
    position: absolute;
    top: 0.5rem;
    left: 6.8rem;
}
.zongshu{
    font-size:0.24rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(90,90,90,1);
    position: absolute;
    top: 1.5rem;
    left: 6.5rem;
}
.shuliang{
    font-size:0.26rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(0,0,0,1);
    position: absolute;
    top: 1rem;
    left: 7rem;
}
.zongprice{
    font-size:0.24rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(66,66,66,1);
    position: absolute;
    top: 1.5rem;
    left: 5rem;
}
.bazhang{
    font-size:0.24rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(90,90,90,1);
    position: absolute;
    top: 1.5rem;
    left: 2rem;
}
.genzong{
    font-size:0.26rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(59,59,59,1);
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
}
.dingdan{
    width: 100%;
    height: 1rem;
    font-size:0.26rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(67,191,146,1);
    border-bottom: 0.02rem solid #A6A6A6;
    position: relative;
}
.dingdaner{
    width: 100%;
    height: 1rem;
    font-size:0.26rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(83,83,83,1);
    border-bottom: 0.02rem solid #A6A6A6;
    position: relative;
}
.dingdan-wan{
    position: absolute;
    top: 0.2rem;
    left: 1rem;
}
.dingdan-time{
    position: absolute;
    top: 0.6rem;
    left: 1rem;
}
.tubiao2{
    font-size: 0.4rem;
    position : absolute;
    top: 0.4rem;
    left: 0.2rem;
}
.xiangqing-buttom{
    width:5.12rem;
    height:0.76rem;
    font-size:0.36rem;
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    color:rgba(255,255,255,1);
    background:rgba(67,191,146,1);
    border-radius:0rem;
    margin: 1rem auto;
    text-align: center;
    line-height: 0.76rem;
    border-radius: 0.1rem;
}

</style>
