<template>
    <div class="ShiLiaoItem">
        <div class="food_img">
            <img :src="item.img" alt="">
        </div>
        <div class="food_info">
            <div class="food_name">{{item.name }}</div>
            <div class="food_desc">{{item.text}}</div>
            <div class="buy_food">
                <div class="price">
                    <span>￥</span>
                    <span>{{ item.price }}</span>
                </div>
                <div class="people_count">
                    <span>{{ item.count }}</span>
                    <span>人付款</span>
                </div>
                <div class="other">...</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"ShiLiaoItem",
    props:{
        item:{
            type:Object,
            default:function(){
                return{}
            }
        }
    }
}
</script>
<style lang="less" scoped>
*{
    overflow: visible;
}
.ShiLiaoItem{
    font-size: 0.3rem;
    display: flex;
    background-color: #ffffff;
    padding: 0.2rem;
    .food_img{
        width: 2.2rem;
        margin-right: 0.2rem;
        img{
            width: 100%;
        }

    }
    .food_info{
        .food_name{
            font-size: 0.28rem;
            font-weight: bold;
            margin-bottom: 0.3rem;
            color:rgba(51,51,51,1);
        }
        
        .food_desc{
            font-size: 0.24rem;
            line-height: 0.38rem;
            color:rgba(95,95,95,1);
        }
    }
    .buy_food{
        .price{
            float: left;
            margin-right: 1.9rem;
            color: #EE2020;
            font-size: 0.24rem;
            span:nth-child(1){
                font-size: 0.18rem;
            }
        }
        .people_count{
            float: left;
            margin-right: 1rem;
            font-size: 0.18rem;
            color: #818181;
        }
        .other{
            float: right;
            // margin-left: 1rem;
        }

    }
}
</style>

