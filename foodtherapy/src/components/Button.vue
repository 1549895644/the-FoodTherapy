<template>
    <div class="button">
        <button class="btn" @click="ToSkipHandler($event)">{{ title }}</button>
    </div>
</template>
<script>
export default {
    name:"Button",
    data(){
        return{

        }
    },
    props:{
        title:{
            type:String,
            default:"默认值"
        }
        
    },
    methods: {
        ToSkipHandler(event) {
            this.$emit("getSkipEvent",event)
        },
    },
}
</script>
<style lang="less" scoped>
.button{
    width: 100%;
}
.btn{
    width: 3rem;
    background-color: #43bf92;
    font-size: 0.36rem;
    text-align: center;
    color: #ffffff;
    line-height: 0.9rem;
    border-radius: 0.1rem;
    margin:  0 auto;
    margin-top: 0.5rem;
    display: block;
}
</style>


