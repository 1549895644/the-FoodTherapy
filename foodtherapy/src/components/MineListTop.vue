<template>
    <div>
        <div class="top">
            <span>
                {{title}}
            </span>
            <div class="backhome">
                <span class="el-icon-arrow-left tubiao"></span>
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
            // window.history.go(-1)
            this.$router.push("/mine")
        }
    },
    props :{
        title: String,
        required: true
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
.zi{
    font-size:0.3rem;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    position: relative;
    top: -0.05rem;
   
    

}
.tubiao{
    font-size:0.5rem; 
    color : rgba(255,255,255,1);
    line-height: 1rem
   
}
</style>

