<template>
    <div>
        <Calendar
            v-on:choseDay="clickDay"
            v-on:changeMonth="changeDate"
            :sundayStart="true" 
        >
        </Calendar>
        <div class="calendar">
            <div>
                <img src="../../assets/images/siren/bodya.png" alt="" class="r-img">
                <span class="r-span">身体症状</span>  
                <img src="../../assets/images/siren/right.png" alt="" class="r-right">
            </div>
            <div>
                <img src="../../assets/images/siren/tody.png" alt="" class="r-img">
                <span class="r-span">今日目标</span>
                <img src="../../assets/images/siren/right.png" alt="" class="r-right">
            </div>
        </div>
        <router-link to="/shopcar">
        <img src="../../assets/images/shopCar.png" alt="" class="scar" />
        </router-link>
        <BottomNav />
    </div>
</template>
<script>
import Calendar from 'vue-calendar-component';
import BottomNav from "../../components/BottomNav"
export default {
    name:"Rli",
    components: {
        Calendar,
        BottomNav
    },
    data() {
        return{
            
        }
    },
    methods: {
        clickDay(data) {
            //console.log(data); //选中某天
        },
        changeDate(data) {
           // console.log(data); //左右点击切换月份
        },
        // clickToday(data) {
        //     console.log(data); //跳到了本月
        // }
    }
}
</script>
<style scoped>
.calendar{
    height: 6.0rem;
    margin-top: 0.4rem;
    background-color: white
}
.r-img{
    width:0.5rem;
    height:0.43rem;
    margin-left: 0.5rem;
}
.r-span{
    font-size:0.3rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(53,53,53,1);
    margin-left: 0.3rem;
}
.r-right{
    width:0.16rem;
    height:0.29rem;
    margin-left: 4rem;
}
.scar{
  position: fixed;
  top:10.5rem;
  left:6rem;
 }
</style>