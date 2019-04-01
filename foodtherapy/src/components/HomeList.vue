<template>
  <div class="list">
    <div v-for="(list,index) in Lists" :key="index">
      <router-link :to="{name:'HomeListView',params:{id:list.id}}" tag="div" class="list_core">
        <div class="list_title">
          <p v-html="list.Listtitle"></p>
        </div>
        <div class="list_content">
          <div class="list_content_img">
            <img :src="list.Listimg" alt>
          </div>
          <div class="list_content_tetx">
            <p>{{list.Listtetx}}</p>
          </div>
          <div class="list_foot">
            <!-- <span>2533</span>  -->
            <span>{{list.Listnum}}</span>
            {{tetx}}
          </div>
        </div>
        <div class="list_xian">
          <hr>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeList",
  data() {
    return {
      tetx: "次阅读"
    };
  },
  props: {
    Lists: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
* {
  font-size: 12px;
}
.list {
  width: 7.5rem;
  margin-top: 0.2rem;
}
.list_core {
  width: 7rem;
  height: 2.12rem;
  padding: 0.2rem 0;

  /* background: red; */
  margin: 0 auto;
}
.list_title {
  width: 5rem;
  font-size: 0.27rem;
}
.list_title p{
  color: #1A1A1A;
  font-size:0.3rem;
  line-height: 0.6rem;
  font-family:PingFang-SC-Regular;
  font-weight:400;
}
.list_content {
  width: 100%;
  height: 1.41rem;
  overflow: hidden;
}
.list_content_img {
  width: 2.12rem;
  height: 1.41rem;
  float: left;
  overflow: hidden;
}
.list_content_tetx {
  width: 6.8rem;
  height: 0.8rem;
  font-size: 0.26rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
}
.list_content_tetx p {
  margin-left: 2.23rem;
  font-size:0.26rem;
  font-family:PingFang-SC-Regular;
  font-weight:400;
  line-height: 0.3rem;
}

.list_foot {
  /* width:0.7rem; */
  width: 1.7rem;
  height: 0.4rem;
  font-size: 0.24rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  margin-left: 5.52rem;
  margin-top: 0.23rem;
}
.list_foot span {
  color: rgba(255, 85, 85, 1);
}
.list_xian {
  width: 100%;
  height: 0.5rem;
  padding-top: 0.25rem;
}
hr{
  background-color: #e8e8e8;
}
</style>


