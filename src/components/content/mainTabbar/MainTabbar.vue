<template>
  <div>
    <tabbar>
      <tabbar-item path="/home">
        <template v-slot:itemImg>
          <img src="~assets/img/tabbar/home.svg" alt="" />
        </template>
        <template v-slot:itemActiveImg>
          <img src="~assets/img/tabbar/home_active.svg" alt="" />
        </template>
        <template v-slot:itemTitle>
          <div>首页</div>
        </template>
      </tabbar-item>
      <tabbar-item path="/category">
        <template v-slot:itemImg>
          <img src="~assets/img/tabbar/category.svg" alt="" />
        </template>
        <template v-slot:itemActiveImg>
          <img src="~assets/img/tabbar/category_active.svg" alt="" />
        </template>
        <template v-slot:itemTitle>
          <div>分类</div>
        </template>
      </tabbar-item>
      <tabbar-item path="/shopcart">
        <template v-slot:itemImg>
          <img src="~assets/img/tabbar/shopcart.svg" alt="" />
        </template>
        <template v-slot:itemActiveImg>
          <img src="~assets/img/tabbar/shopcart_active.svg" alt="" />
        </template>
        <template v-slot:itemTitle>
          <div>购物车</div>
        </template>
      </tabbar-item>
      <tabbar-item path="/profile">
        <template v-slot:itemImg>
          <img src="~assets/img/tabbar/profile.svg" alt="" />
        </template>
        <template v-slot:itemActiveImg>
          <img src="~assets/img/tabbar/profile_active.svg" alt="" />
        </template>
        <template v-slot:itemTitle>
          <div>我的</div>
        </template>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from "components/common/tabbar/Tabbar.vue";
import TabbarItem from "components/common/tabbar/TabbarItem.vue";

export default {
  name:'MainTabbar',
  components: {
    Tabbar,
    TabbarItem,
  },
};
</script>

<style>
</style>