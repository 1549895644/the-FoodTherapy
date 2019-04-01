<template>
    <div>
        <TopNav 
        :back="back" title="收货地址"
        :leftMsg="leftMsg" 
        :middleMsg="middleMsg"
        :url="url" 
        @sendBackData="backEvent($event)"/>
        
        <Address @jumpHandler="jump"/>
    </div>
</template>
<script>
import TopNav from "../../components/TopNav";
import Address from '../../components/Address'
export default {
    name:'Adress',
     data(){
        return{
            leftMsg:"返回",
            middleMsg:"收货地址",
             back: {
                closeImg: require("../../assets/images/back.png"),
                backText: "返回"
            },
            url:require ('../../assets/images/shopcar/back.png')
        }
    },
    methods: {
        jump(){
            this.$router.push("/newaddress")
        },
        backEvent(event) {
            this.$router.push("/orderok")
        }

        
    },
    components:{
        TopNav ,
        Address
    }
}
</script>

<style scoped>

</style>
