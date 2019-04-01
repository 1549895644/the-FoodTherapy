<template>
    <div>
        <div class="all">
        <div class="phonenum"><input type="text" placeholder=" 请输入新密码"></div>
        <div class="passw">
           
            <input type="text" placeholder="请输入确认密码">
        </div>
        <div class="yanzheng">
            <input type="text" placeholder="验证码" >
            <input type="button" class="huoqu" v-model="checkcode">
        </div>
        <div class="xiangqing-buttom" v-on:click="backloginhander">
                        确认
        </div>
        <div class="qiehuan" v-on:click="handleCode" >换一张，看不清</div>

    </div>
    </div>
</template>
<script>
export default {
    name : 'chongzhiview',
    data(){
        return{
            checkcode:""
        }
    },
    mounted () {
        this.generatedCode()
    },
    methods : {
        generatedCode (event) {
            const random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
            let code = ''
            for (let i = 0; i < 4; i++) {
                let index = Math.floor(Math.random() * 36)
                code += random[index]
            }
            this.checkcode = code
        },
        handleCode () {
            this.generatedCode()
        },
        backloginhander(){
            this.$router.push("/login")
        }
    },
    
}
</script>
<style scoped>
.all{
    width: 100%;
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
 
}
.yanzheng{
    width: 3rem;
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
    left: 1.76rem;
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
.qiehuan{
    font-size:0.24rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(75,75,75,1);
    width:2rem;
    position: absolute;
    top: 5.1rem;
    left: 4.2rem;
}
</style>
