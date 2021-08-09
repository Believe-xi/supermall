<template>
  <div id="home">
    <nav-bar class="navColor">
      <template v-slot:center>
        <div>购物车</div>
      </template>
    </nav-bar>
    <tab-control
      :title="['流行', '新款', '精选']"
      @tabClick="tabClick"
      :class="{ isTabFixed: isTabFixed }"
      ref="tabcontrol1"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      class="wrapper1"
      ref="scroll"
      @scroll="showScroll"
      :probeType="3"
      :isPullUpLoad="isPullUpLoad"
      @pullingUp="loadMore"
    >
      <home-swiper :banner="banner" @imgLoad="imgLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :title="['流行', '新款', '精选']"
        @tabClick="tabClick" 
        ref="tabcontrol"
      ></tab-control>
      <goods-list :goods="goodsShow"></goods-list>
    </scroll>
    <back-top @click.native="topClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";


import { getHomeMultidata, getHomeGoods } from "network/home.js";
import {itemListenerMixin,backTopMixin} from 'common/mixin.js'

export default {
  name:'Home',
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
  },
  data() {
    return {
      banner: null,
      recommends: null,
      goods: {
        pop: { page: 0, list: [], scrollY: 0 },
        new: { page: 0, list: [], scrollY: 0 },
        sell: { page: 0, list: [], scrollY: 0 },
      },
      currentType: "pop",
      isPullUpLoad: true,
      isTabFixed: false,
      saveY: 0,
      offsetTop: 0,
      scrollY: 0,
    };
  },
  mixins:[itemListenerMixin,backTopMixin],
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("new");
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
  },
 
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.saveY();
    // console.log(this.saveY);
    // 2.
    this.$bus.$off('itemImageLoad',this.itemListener)
  },
  computed: {
    goodsShow() {
      console.log(this.goods[this.currentType].list)
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    // 事件监听
    tabClick(index) {
      // 储存当前类型的scroll
      
      this.goods[this.currentType].scrollY = this.scrollY;
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabcontrol.isCurrent = index;
      this.$refs.tabcontrol1.isCurrent = index;
      // 跳转到某个位置
      if(this.isTabFixed){
        // 判断 吸顶是否出现 出现就开始保存scrollY跳转  进行跳转
      const sco = -this.goods[this.currentType].scrollY >= -this.offsetTop ? this.goods[this.currentType].scrollY : this.offsetTop
      this.$refs.scroll.scrollTo(0,sco,500)

      }
    },
    showScroll(position) {
      this.TopBack(position)
      this.isTabFixed = -position.y >= -this.offsetTop;
      this.scrollY = position.y;
      // console.log(position);
    },
    loadMore() {
      // this.$refs.scroll.finishPullUp();
      const scroll = this.$refs.scroll.scroll;
      this.getHomeGoods(this.currentType);

      setTimeout(() => {
        scroll.refresh();
        scroll.finishPullUp();
      }, 500);
    },
    imgLoad() {
      this.offsetTop = -this.$refs.tabcontrol.$el.offsetTop;
      for (let key in this.goods) {
        this.goods[key].scrollY = this.offsetTop;
      }
    },
    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].page++;
        this.goods[type].list.push(...res.data.list);
      });
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.navColor {
  color: #fff;
  background-color: var(--color-tint);

  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
}
.wrapper1 {
  position: absolute;
  overflow: hidden;
  height: calc(100% - 49px);

  padding-bottom: 49px;
}
.isTabFixed {
  position: fixed;
  top: 43px;
  left: 0;
  right: 0;
}
</style>