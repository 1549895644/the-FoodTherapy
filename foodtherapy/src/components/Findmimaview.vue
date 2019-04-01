<template>
    <div class="all">
        <div class="phonenum"><i class="el-icon-mobile-phone pone-tubiao"></i><input type="text" placeholder=" 请输入手机号"></div>
        <div class="passw">
            <i class="el-icon-goods  pone-tubiao"></i>
            <input type="text" placeholder="请输入验证码">
            <div class="huoqu">获取验证码</div>
        </div>
        <div class="xiangqing-buttom" v-on:click="nexthander">
                        确认
        </div>
    </div>
</template>
<script>
export default {
    name : 'Findmiemaview',
    methods : {
        nexthander(){
            this.$router.push("/chongzhi")
        }
    }
}
</script>
<style scoped>
.all{
    width:100%;
    height: 100%;
    background-color: rgba(255,255,255,1);
    padding-bottom: 6rem;
}
.phonenum{
    width: 6rem;
    height: 1rem;
    border-bottom: 0.02rem solid #43BF92;
    padding-top : 1rem;
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
    

}
.pone-tubiao{
    font-size: 0.4rem;
    color: #CACACA;
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
    margin-top: 2.5rem;
    margin-left: 1.2rem;
  
    
}
</style>
