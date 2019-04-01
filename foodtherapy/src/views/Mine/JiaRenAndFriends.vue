<template>
  <div class="friends">
    <TopNav :back="back" title="家人和朋友" titltRight="添加" @sendBackData="backEvent($event)"/>
    <div class="head_content">
      <p>我们为不同性别，年龄和地区的人设计了不同的定制服务，请认真填写</p>
      <!-- <img src="../../assets/images/mine/head_pic.png" alt> -->
      <div class="change_pic">
       <el-upload
        class="avatar-uploader"
        action="/pic/posts"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        <!-- <i v-else>上传头像</i> -->
      </el-upload>
      </div>
    </div>

    <div class="userInfo_change">
      <ul>
        <li>
          <p class="change_title">名字</p>
          <div class="get_nito">
            <input class="click" placeholder="点击输入" ref="nameDom" @keyup="NameValueHandler">
            &nbsp;&nbsp;{{ nameValue }}
            <span class="semiology"></span>
          </div>
        </li>
        <router-link tag="li" to="/chronic">
          <p class="change_title">慢性病</p>
          <div class="get_nito">
            <span class="semiology">&gt;</span>
          </div>
        </router-link>
        <li>
          <p class="change_title">性别</p>
          <div class="get_nito">
            <div class="sex">
              <div
                v-for="(item,index) in sexData"
                :key="index"
                :class="{'selected':nowIndex==index}"
                @click="selectedHandler(index)"
              >{{ item }}</div>
            </div>
          </div>
        </li>
        <li>
          <DateComponent class="change_title"/>
          <div class="get_nito">
            <span class="semiology">&gt;</span>
          </div>
        </li>
        <router-link tag="li" to="/city">
          <p class="change_title">城市</p>
          <div class="get_nito">
            <span class="city">{{ this.$store.state.cityState}}</span>
            <span class="semiology">&gt;</span>
          </div>
        </router-link>
      </ul>
    </div>
    <router-link to="/firendslist" tag="div" class="complete_btn">完成</router-link>
  </div>
</template>
<script>
import TopNav from "../../components/TopNav";
import DateComponent from "../../components/DateComponent"
export default {
  name: "Friends",
  data() {
    return {
      back:{
        closeImg:require("../../assets/images/back.png"),
        backText: "返回",  
      
      },
      imageUrl: '',
      nameValue:"",
      sexData:["男","女"],
      nowIndex:0
    };
  },
  components: {
    TopNav,
    DateComponent,
  },
  methods: {
    backEvent(event) {
      this.$router.push("/mine");
    },
    NameValueHandler(value){
      if(value.code=="Enter"){
        this.nameValue = this.$refs.nameDom.value;
      console.log(this.$refs.nameDom.value);
        this.$refs.nameDom.value="";
        this.$refs.nameDom.placeholder=""
      }
    },
    selectedHandler(index){
      this.nowIndex = index   
    },
     handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
          console.log("上传头像图片只能是 JPG 格式!");
          
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
          console.log("上传头像图片大小不能超过 2MB!");
          
        }
        this.$axios.post("/pic/posts",{
          file:file
        })
        .then(res =>{
          // console.log(res);
          
        })
        return isJPG && isLt2M;
      },
      showHandler(event){
        console.log(11);
        
        this.$emit("sendShowData",event)
      }
    }
  }

</script>
<style lang="less">
.friends {
  .head_content {
    padding: 0.2rem;
    background-color: #ffffff;
    text-align: center;
    p {
      width: 5rem;
      margin: 0 auto;
      font-size: 0.28rem;
      text-align: center;
    }
    img {
      width: 1rem;
      height: 1rem;
      margin: 0 auto;
      display: block;
    }
    .change_pic {
      font-size: 0.35rem;
      text-align: center;
      // border: 1px solid #707070;
      display: inline-block;
      margin: 0 auto;
      padding: 0.08rem 0.15rem;
      border-radius: 0.1rem;
    }
  }
  .userInfo_change {
    font-size: 0.28rem;
    margin-top: 0.25rem;
    ul {
      li {
        background-color: #ffffff;
        display: flex;
        padding: 0 0.2rem;
        box-sizing: border-box;
        margin-bottom: 0.02rem;
        line-height: 0.76rem;
        color: #313131;
        height: 0.76rem;
        .change_title {
          flex-grow: 1;
        }
        .get_nito {
          color: #555;
          display: flex;
          .sex {
            // overflow: hidden;
            display: inline-block;
            div {
              float: left;
              width: 0.65rem;
              height: 0.4rem;
              border: 1px solid #555;
              line-height: 0.4rem;
              text-align: center;
              margin-top: 0.1rem;
              border-radius: 0.2rem;
            }
            .selected {
              color: #43bf92;
              border-color: #43bf92;
            }
          }
          .click {
            display: inline-block;
            text-align: right;
          }
          .semiology {
            font-size: 0.4rem;
            line-height: 0.76rem;
            display: inline-block;
          }
        }
      }
    }
  }
  .complete_btn {
    width: 5.1rem;
    height: 0.76rem;
    text-align: center;
    line-height: 0.76rem;
    background-color: #43bf92;
    font-size: 0.3rem;
    color: #ffffff;
    margin: 0 auto;
    margin-top: 2.8rem;
    border-radius: 0.1rem;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 0.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .dateData{
    float: right;
    margin-right: 0.1rem;
  }
  .city{
    margin-right: 0.2rem;
  }
}
</style>

