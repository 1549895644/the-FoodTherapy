<template>
    <div class="all">
                    <div class="quxiao"><span  v-on:click="minehander">取消</span></div>
                    <div class="zhuce"><span  v-on:click="loginhander">登陆</span></div>
                    <div class="login-logo"><img :src="Alldata[0].logo" alt=""></div>
                    <div class="phonenum"><i class="el-icon-mobile-phone pone-tubiao"></i><input type="text" placeholder=" 请输入手机号"></div>
                    <div class="passw">
                        <i class="el-icon-goods  pone-tubiao"></i>
                        <input type="text" placeholder="请输入密码">
                        <div class="huoqu">获取验证码</div>
                    </div>
                    <div class="xiangqing-buttom">
                        确认
                    </div>
                    <div class="duoxuan">
                          <el-checkbox v-model="checked" class="fuxuan"><span class="fuxuan-zi">我已阅读并同意</span></el-checkbox>
                        
                        <i class="el-icon-d-arrow-left"></i><span class="gaoliang">用户协议</span><i class="el-icon-d-arrow-right"></i>
                    </div>
    </div>
</template>
<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
    name : "Zhuceview",
    data() {
      return {
        checked: true
      };
    },
    computed: {
        getAlldata(){},
        ...mapState(["Alldata"])     
    },
    methods : {
        loginhander(){
            this.$router.push("/login")
        },
        minehander(){
            this.$router.push("/mine")
        }
    }
}
</script>
<style scoped>
.all{
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,1);
    padding-bottom: 6rem;
}
.quxiao{
    font-size:0.3rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(61,180,138,1);
    float: left;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
   
   
}
.zhuce{
    font-size:0.3rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(61,180,138,1);
    float: right;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    
   
}
.phonenum{
    width: 6rem;
    height: 1rem;
    border-bottom: 0.02rem solid #43BF92;
    margin-top : 1rem;
    margin-left: 0.8rem;
}

.passw{
    width: 6rem;
    height: 1rem;
    border-bottom: 0.02rem solid #43BF92;
    margin-top : 0.2rem;
    margin-left: 0.8rem;
    position: relative;
}
.passw>input{
    font-size: 0.3rem;
}
.phonenum>input{
    outline-color: invert ;
	outline-style: none ;
	outline-width: 0px ;
	border: none ;
	border-style: none ;
	text-shadow: none ;
	-webkit-appearance: none ;
	-webkit-user-select: text ;
	outline-color: transparent ;
	box-shadow: none;
    width: 5rem;
    height: 0.8rem;
    font-size: 0.3rem;

    

}
.pone-tubiao{
    font-size: 0.4rem;
    color: #CACACA;
}
.login-logo{
    width: 2rem;
    height: 2rem;
    padding-top: 1rem;
    margin-left: 2.8rem;
    clear: both;
    
}
.login-logo>img{
    width: 100%;
    height: 100%;
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
    text-align: center;
    line-height: 0.76rem;
    margin-top: 1rem;
    margin-left: 1.2rem;
  
    
}
.huoqu{
    width:1.24rem;
    height:0.51rem;
    font-size:0.22rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    background:rgba(67,191,146,1);
    
    text-align: center;
    line-height: 0.51rem;
    position: absolute;
    top: 0.49rem;
    left: 4.76rem;
}
.duoxuan{
    font-size:0.22rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(49,49,49,1);
    margin-left: 2.8rem;
    margin-top: 0.3rem;
}
.gaoliang{
    color:rgba(61,180,138,1);
}
.duoxuan>i{
     color:rgba(61,180,138,1);
}
.fuxuan{
    margin-right: 0.2rem;
}
.fuxuan-zi{
    font-size:0.22rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(49,49,49,1);

}
</style>

