<template>
<div class="top"> 
    <router-link :to="top.to"   v-for="(top,index) in Tops" :key="index" >   
        <div  class="HomeTop" >
            <img :src="top.img" alt="" > 
            <p >{{top.titles}}</p>            
        </div>                    
    </router-link>
    
    </div>
    
</template>
<script>
export default {
    name:"Hometop",
    data(){
        return{
            
        }

    },
    props:{
        Tops:{
             type: Array,
            default: function() {
                return [];
            }
        },   

    }
    
}
</script>
<style scoped>
*{
    font-size: 12px;
}
.top{
    width: 7.5rem;
    height: 2.22rem;
    overflow: hidden;
}
.HomeTop{
        width:3.05rem;
        height:2.25rem;
        margin-left: 0.5rem;
        float: left;   
        text-align: center; 
}
.HomeTop img{
    width:100%;
    height:1.85rem;
}
.HomeTop p{
     width:100%;
    font-size:0.27rem; 
    line-height: 0.45rem;
    color:rgba(103,101,101,1);  
}
/* .title{
    width:1.1rem;
    height:0.4rem;
    font-size:0.27rem; 
    color:rgba(103,101,101,1);
    margin-left: 1.4rem;   
    float: left;    
}
.two p{
    margin-left: 2.5rem;
} */
</style>


