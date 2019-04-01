<template>
    <div>
        <div class="top">
            <span>
                订单详情
            </span>
            <div class="backhome" v-on:click="backhomehander">
                <span class="el-icon-arrow-left tubiao" ></span> 
                <span class="zi" v-on:click="backhomehander">返回</span>              
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name : "MineListTop",
    methods: {
        backhomehander :function(event){
            this.$router.push("/minelist")
        }
    }
    
}

</script>
<style scoped>
.top{
    background-color: #43BF92;
    width: 100%;
    height: 1rem;
    font-size: 0.36rem;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    text-align: center;
    line-height: 1rem;
   
}
.backhome {
    float: left;  
    overflow: hidden;
}

.tubiao{
    font-size:0.5rem; 
    color : rgba(255,255,255,1);
    line-height: 1rem
   
}
.zi{
    font-size:0.3rem;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    position: relative;
    top: -0.05rem;
   
    

}
</style>

