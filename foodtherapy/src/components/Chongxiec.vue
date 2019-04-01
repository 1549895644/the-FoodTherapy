<template>
  <div>
    <div class="container">
      <!-- 复选框 -->
      <el-checkbox-group v-model="checkedItem" @change="getdata(ele)">
        <el-checkbox></el-checkbox>
      </el-checkbox-group>
      <!-- 图片容器 -->
      <div class="img_container">
        <img :src="ele.img" alt>
      </div>
      <!-- text容器 -->
      <div class="text_container">
        <div class="container_top">
          <p class="title">{{ele.title}}</p>
          <p class="write">编辑</p>
        </div>
        <div class="container_bottom">
          <div>
            单价:
            <span class="price">{{ele.price}}</span>
          </div>
          <div class="count">
            <div class="decrement" @click="decreHandler">-</div>

            <input class="contrlCount" type="text" v-model="num" @input="countChangeHandler">
            <div @click="addHandler">+</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  name: "Chongxiec",
  data() {
    return {
      num: 1,
      ischecked: [],
      checkAll: false,
      // checkedCities: ['上海', '北京'],
      checkedItem: [],
      // cities: cityOptions,
      isIndeterminate: true
    };
  },
  props: {
    ele: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    countChangeHandler() {
      // console.log(1)
    },
    getdata(ele) {
      this.ischecked.push(ele);
      console.log(ele);

      this.$set(ele, "num", this.num);
      this.$emit("getdata", this.num);
    },

    addHandler() {
      this.num++;
    },
    decreHandler() {
      this.num--;
      if (this.num < 1) {
        this.num = 1;
      }
    },

    handleCheckedItemChange(value) {
      console.log(value);
      // let checkedCount = value.length;
      // this.checkAll = checkedCount === this.cities.length;
      // this.isIndeterminate =
      //   checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>
<style scoped lang="less">
.container {
  width: 7.1rem;
  margin: 0 auto;
  height: 2.34rem;
  background: #ffffff;
  margin-top: 0.55rem;
  overflow: hidden;
}
.img_container {
  width: 1.83rem;
  height: 1.83rem;
  margin-top: 0.22rem;

  background-color: rebeccapurple;
  display: flex;

  img {
    width: 100%;
    height: 100%;
  }
}
.el-checkbox-group {
  float: left;
}
.text_container {
  width: 4.46rem;
  height: 1.83rem;
  float: right;
  margin-top: -1.8rem;
  .container_top {
    width: 100%;

    display: flex;
    .title {
      font-size: 0.28rem;
      flex: 1;
    }
    .write {
      font-size: 0.28rem;
    }
  }
}
.container_bottom {
  width: 100%;
  display: flex;
  font-size: 0.28rem;
  margin-top: 1rem;
  .price {
    color: red;
  }
}
.count {
  display: flex;
}
.contrlCount {
  margin: 0 0.2rem;
  height: 0.3rem;
  width: 1rem;
  border: 1px solid #555;
}
.decrement {
  margin-left: 1rem;
}

.el-checkbox__input {
  margin-top: 1rem;
}
.el-checkbox-group[data-v-754254b2] {
  margin-top: 1rem;
}
</style>

