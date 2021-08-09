<template>
  <div class="bottom">
    <nav-bar class="title">
      <template v-slot:left>
        <div class="title-img" @click="imgClick">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      </template>
      <template v-slot:center>
        <div class="title-center">
          <div
            v-for="(item, index) in title"
            :key="item"
            class="center-item"
            :class="{ active: iscurrent === index }"
            @click="navClick(index)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
 
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      // 动态显示tabbar
      iscurrent: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    navClick(index) {
      this.iscurrent = index;
      this.$emit('navClick',index)
    },
    imgClick(){
      this.$router.back()
    }
  },
};
</script>

<style scoped >
.active {
  color: var(--color-high-text);
}

.title-img img {
  width: 30%;
  vertical-align: middle;
}

.title-center {
  display: flex;
  font-size: 14px;
}
.center-item {
  flex: 1;
}
.title {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: #fff;
}
.bottom {
  padding-bottom: 44px;
}
</style>
