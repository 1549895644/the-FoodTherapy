<template>
    <div class="siren">
      <router-link to="/rli">
           <img src="../../assets/images/siren/rili.png" alt="" class="rili"> 
      </router-link>
       
        <!--身体症状  -->
        <div>
            <div>
                <img src="../../assets/images/siren/bodya.png" alt="" class="body">
                <span class="body-span">身体症状</span>
                <img src="../../assets/images/siren/down.png" alt="" class="down">
            </div>
            <hr/>
            <div>
                <el-checkbox-group v-model="checkList">
                <el-checkbox :label="list" class="kuang" v-for="(list, index) in lists" :key="index"></el-checkbox>
                </el-checkbox-group>

                <!-- 自定义框 -->
                <div class="define">
                   <input ref="inputBox" type="text"  value="自定义" 
                  
                   onClick="if (this.value=='自定义'){this.value=''}"
                   onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" 
                   onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))"
                   class="defined-input"/>
                   <img src="../../assets/images/siren/ad.png" alt="" class="ad"   @click="addHandler">  
                </div>
            </div>
        
      <!--今日目标 -->
        
            <div>
                <img src="../../assets/images/siren/tody.png" alt="" class="body">
                <span class="body-span">今日目标</span>
                <img src="../../assets/images/siren/down.png" alt="" class="down">
            </div>
            <hr/>
            <div>
                <el-checkbox-group v-model="checkList">
                <el-checkbox :label="list1" class="kuang" v-for="(list1, index) in lists1" :key="index"></el-checkbox>
                </el-checkbox-group>

                <!-- 自定义框 -->
                <div class="define">
                   <input ref="inputBox1" type="text"  value="自定义" 
                   onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" 
                   onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))"
                   onClick="if (this.value=='自定义'){this.value=''}" class="defined-input"
                  />
                   <img src="../../assets/images/siren/ad.png" alt="" class="ad"   @click="addHandler1">  
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name:"Richang",
    data () {
      return {
        checkList: ['嗓子痛','吃早饭'],
        items: [],
        inputValue:"",
       
        lists:["嗓子痛","手脚冰冷发麻","口腔溃疡","脚脖子疼","声音沙哑肿痛","流行性感冒"],
        lists1:["吃早饭","早睡早起","按时吃药","八杯水","排便","健走3000步"],
        
      };
    },
    methods: {
    addHandler() {
        this.inputValue = this.$refs.inputBox.value
        // console.log(this.$refs.inputBox.value);
        this.lists.push(this.$refs.inputBox.value);
        this.$refs.inputBox.value=""
    },
    addHandler1() {
        this.inputValue = this.$refs.inputBox1.value
        // console.log(this.$refs.inputBox1.value);
        this.lists1.push(this.$refs.inputBox1.value);
        this.$refs.inputBox1.value=""
    },
    
   }
}
</script>
<style scoped>
*{
  overflow-x: visible;
}
.siren{
    background-color: white;
    margin-bottom: 1rem;
}
.rili{
    width:0.72rem;
    height:0.72rem;
    border:0px solid rgba(67,191,146,1);
    border-radius:50%;
    margin-left: 3.5rem;
}
.body{
    width:0.5rem;
    height:0.43rem;
    margin-left: 0.28rem;
}
.body-span{
    font-size:0.3rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(53,53,53,1);
    margin-left: 0.2rem;
}
.down{
    width:0.29rem;
    height:0.16rem;
    margin-left: 4.5rem;
}
hr{
    height:0.03rem;
    background:rgba(67,191,146,1);
}
.kuang{
    width:2rem;
    height:0.48rem;
    border:0px solid rgba(176,176,176,1);
    border-radius:0rem;
    margin-top: 0.5rem;
    margin-left: 1rem;  
}
/* 自定义框 */
.defined-input{
    width:2.13rem;
    height:0.48rem;
    border:1px solid rgba(180,180,180,1);
    border-radius:0.3rem;
    font-size:0.3rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(197,197,197,1);
    margin-left: 3rem;
    margin-top: 0.5rem;
    text-align: center;
}
.ad{
    width:0.25rem;
    height:0.25rem;
    position: relative;
    right:0.5rem;
}
</style>

