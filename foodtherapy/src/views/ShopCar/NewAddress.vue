<template>
    <div>
        <TopNav
        :back="back" title="新增地址" @sendBackData="backEvent($event)" 
        :leftMsg="leftMsg" 
        :middleMsg="middleMsg"
        :url="url" 
        />
        <NewAdd @togetgoodsHandler="toggds"/>
        


    </div>
</template>
<script>
import TopNav from "../../components/TopNav";
import NewAdd from "../../components/NewAdd"
export default {
    name:'NewAddress',
     data(){
        return{
            leftMsg:"返回",
            middleMsg:"新增收货地址",
             back: {
                    closeImg: require("../../assets/images/back.png"),
                    backText: "返回"
            },
            url:require ('../../assets/images/shopcar/back.png')
        }
    },
    methods: {
        /* adressHandler(){
        }, */
        toggds(){
            this.$router.push("/getgoods")
        },
        backEvent(event) {
            this.$router.push("/adress")
        }
       
    },
    components:{
        TopNav,
        NewAdd
    }
}
</script>
<style lang="less" scoped>

</style>
