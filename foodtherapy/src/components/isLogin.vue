<template>
        <div class="all">
                <span class="quxiao" v-on:click="minehanderl">取消</span>
                <span class="zhuce" v-on:click="zhucehander">快速注册</span>
                <div class="login-logo"><img :src="Alldata[0].logo" alt=""></div>
                <div class="phonenum">
                    <i class="el-icon-mobile-phone pone-tubiao"></i>
                    <input ref="phonenum" @blur.prevent="cellPhoneCount(sellPrice)" type="text" placeholder=" 请输入手机号"  v-model="sellPrice">
                    <i class="el-icon-check pone-tubiao2" ref="duigou1"></i>
                    <i class="el-icon-close pone-tubiao3" ref="chacha1"></i>
                </div>
                <div class="passw">
                    <i class="el-icon-goods  pone-tubiao"></i>
                    <input ref="passw" @blur.prevent="changeCount(buyVolume)" type="text" placeholder="请输入密码" v-model="buyVolume" maxlength="20" >
                    <i class="el-icon-check pone-tubiao2" ref="duigou"></i>
                    <i class="el-icon-close pone-tubiao3" ref="chacha"></i>
                  
                </div>
                <div class="xiangqing-buttom" v-on:click="Loginhander">
                    确认
                </div>
                <div class="wangji" v-on:click="wangjihander">
                    <span>忘记密码？</span>
                </div>
        </div>
</template>
<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
    name : "Login",
    data(){
        return{
            sellPrice :"",
            buyVolume:"",
            pattern:/^[\w]{6,16}$/,
            cellPhone:/^1(3|4|5|7|8)\d{9}$/,
        }
    },
     computed: {
        getAlldata(){},
        ...mapState(["Alldata"]) 
    },
    watch:{
        
      
        
    },
    methods : {
        wangjihander(){
            this.$router.push("/find")
        },
        zhucehander(){
            this.$router.push("/zhuce")
        },
        minehanderl(){
            this.$router.push("/mine")
            
        },
         //手机号验证
        cellPhoneCount(sellPrice){
            if (this.cellPhone.test(this.sellPrice)) {
                this.$refs.duigou1.style.display="block";
                this.$refs.chacha1.style.display="none"
               
                
                 
            }else{
               this.$refs.duigou1.style.display="none";
               this.$refs.chacha1.style.display="block" 
            }
        },
        //密码验证
        changeCount(buyVolume){
            if (this.pattern.test(this.buyVolume)) {
                this.$refs.duigou.style.display="block";
                this.$refs.chacha.style.display="none"
            }else{
                this.$refs.chacha.style.display="block";
                this.$refs.duigou.style.display="none"
                
            }
        },
        Loginhander(){
                
           console.log("aaa")
           this.$axios.post("http://localhost:3001/api/login",({
            username:this.sellPrice,
            password:this.buyVolume

            }))
            .then(data => {
               
                for(var i in data.data){
                    if(this.sellPrice==data.data[i].username&&this.buyVolume==data.data[i].password){
                            this.$router.push("/mine")
                        }else if(this.sellPrice==""||this.buyVolume==""){
                            alert("请填写用户名或密码")
                        }else{
                            alert("密码或用户名不正确")
                        }
                }
                
            })
            .catch(error => {
                console.log(error);
            })
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
    position: relative;
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
    padding-left: 0.1rem;

}
.pone-tubiao2{
     font-size: 0.4rem;
     color: green;
     display: none;
     position:absolute;
     bottom: 0;
     right: 0;
}
.pone-tubiao3{
    font-size: 0.4rem;
     color: red;
     display: none;
     position:absolute;
     bottom: 0;
     right: 0;
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
.wangji{
    font-size:0.28rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(32,32,32,1);
    position: absolute;
    top: 9rem;
    left: 5rem;
}
</style>
