<template>
    <div>
        <ul class="top-nav">
            
                <router-link to="/minelist" exact tag="li">全部</router-link>
            
            
                <router-link to="/minelist/fukuan" tag="li">待付款</router-link>
            
         
                <router-link to="/minelist/fahuo" tag="li">待发货</router-link>
           
            
                <router-link to="/minelist/shouhuo" tag="li">待收货</router-link>
            
                <router-link to="/minelist/pingjia" tag="li">待评价</router-link>
            
            
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name : "MineListcon"
}
</script>
<style scoped>

.top-nav{
    width:100%;
    height:0.68rem;
    background:rgba(255,255,255,1);
    display: flex;
    overflow: hidden;
}
.top-nav>li{
    
    font-size:0.26rem;
    flex-grow: 1;
    float: left;
    text-align: center;
    line-height: 0.68rem;  
    
}
.router-link-active {
    color:rgba(71,192,148,1);
      border-bottom: 0.03rem solid rgba(67,191,146,1);
      
    }
</style>
