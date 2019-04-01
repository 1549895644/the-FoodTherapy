<template>
    <div>
        <TopNav title="健康信息" :back="back" @sendBackData="backEvent($event)"/>
        <div class="userImg">
            <img src="../../assets/images/mine/head_pic.png" alt="">
        </div>
        <div class="health_info">
            <ul>
                <router-link tag="li" to="/basicinfo" class="first_li">
                    <p>基础信息</p>
                    <span class="go_forward">&gt;</span>
                </router-link>
                <router-link to="/chronic" tag="li">
                    <p>体检/慢性病管理</p>
                    <span class="go_forward">&gt;</span>
                </router-link>
                <div class="health_test">健康测试</div>
                <router-link tag="li" to="/test">
                    <p>
                        <span class="tizhi">我的体质：</span>
                        <span class="test" >{{this.$store.state.isTextState}}</span> &
                        <span class="test" >{{this.$store.state.ProTextState}}</span> 
                    </p>
                    <span class="go_forward">&gt;</span>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
import TopNav from "../../components/TopNav"
export default {
    name:"HealthInfo",
    data(){
        return{
            back:{
                closeImg:require("../../assets/images/back.png"),
                backText: "返回"
            }
        }
    },
    components:{
        TopNav
    },
    methods: { 
        backEvent(event) {
            // window.history.back();
            this.$router.push("/mine")
            
        },
    },
}
</script>
<style lang="less" scoped>
.userImg{
    width: 1.15rem;
    height: 1.15rem;
    margin: 0.6rem auto;

    img{
        width: 100%;
    }
}
.health_info{
    width: 100%;
    font-size:0.28rem;
    color: #313131;
    li{
        padding: 0 0.2rem;
        display: flex;
        background-color: #ffffff;
        box-sizing: border-box;
        height: 0.76rem;

        p{
            flex-grow: 1;
            line-height: 0.76rem;
            color: #313131;
        }
        .go_forward{
            font-size: 0.45rem;
            text-align: center;
            width: 0.76rem;
            font-weight: lighter;
            color: #6C6C6C;
        }

    }
    .first_li{
        margin-bottom: 0.02rem;
    }
    .health_test{
        font-size: 0.3rem;
        text-align: center;
        margin-top: 0.2rem;
        line-height: 0.7rem;
    }
}

</style>

