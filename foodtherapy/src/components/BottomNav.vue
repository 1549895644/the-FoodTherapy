<template>
  <div class="BottomNav">
    <ul>
        <router-link tag="li" to="/" exact >
            <div class="li_img first_tag">
                <img src="../assets/images/home_1.png" alt="">
                <img src="../assets/images/home.png" alt="">
            </div>
            <div class="li_text">首页</div>
        </router-link>
        <router-link tag="li" to="/shiliao" >
            <div class="li_img second_tag" >
                <img src="../assets/images/shiliao_1.png" alt="">
                <img src="../assets/images/shiliao.png" alt="">
            </div>
            <div class="li_text">食疗坊</div>
        </router-link>
        <router-link tag="li" to="/siren">
            <div class="li_img third_tag">
                <img src="../assets/images/siren_1.png" alt="">
                <img src="../assets/images/siren.png" alt="">
            </div>
            <div class="li_text">私人定制</div>
        </router-link>
        <router-link tag="li" to="/mine">
            <div class="li_img forth_tag">
                <img src="../assets/images/mine_1.png" alt="">
                <img src="../assets/images/mine.png" alt="">

            </div>
            <div class="li_text">我的</div>
        </router-link>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'BottomNav',
  components: {
  }
}
</script>
<style lang="less" scoped>
.BottomNav{
    position: relative
}
ul{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 0.98rem;
    overflow: hidden;
    display: flex;
    background-color: #ffffff;
    padding-top: 0.1rem;
    box-sizing: border-box;

}
li{
    height: 100%;
    flex-grow: 1;
}
.li_img :nth-child(2){
    display: none
}
.li_img{
    margin: 0 auto;
    position: relative;
}
.li_img img{
    width: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
}
.first_tag{
    width:0.48rem;
    height: 0.52rem;
}
.second_tag{
width:0.51rem;
height: 0.5rem;
}
.third_tag{
    width:0.5rem;
    height:0.49rem;
}
.forth_tag{
    width:0.41rem;
    height:0.51rem;
}
.li_text{
 text-align: center;
font-size:0.2rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(101,101,101,1);
}
.active .li_img :nth-child(1){
    display: none;
}
.active .li_img :nth-child(2){
    display: block;
}
.active .li_text{
    color: #43bf92;
}
</style>

