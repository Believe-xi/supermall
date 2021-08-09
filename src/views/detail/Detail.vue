<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav"
      :topImages="topImages"
      @navClick="navClick"
      ref="nav"
    ></detail-nav-bar>
    <scroll class="detail-scroll" ref="scroll" :probe-type="3" @scroll="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        class="goods-info"
        :detailInfo="detailInfo"
        @imgLoad="imgLoad"
        :probeType="3"
        @scroll="scroll"
        :isPullUpLoad="true"
        @pullingUp="pullingUp"
      ></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo" ref="param">
      </detail-param-info>
      <detail-comment-info :commentInfo="commentInfo" ref="comment">
      </detail-comment-info>
      <goods-list
        :goods="recommends"
        ref="recommend"
        class="goods-list"
      ></goods-list>
    </scroll>
    <back-top @click.native="topClick" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from "./childComps/DetailbottomBar.vue";

import Scroll from "components/common/scroll/Scroll.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

import {
  getDetailData,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail.js";
import { itemListenerMixin, backTopMixin } from "common/mixin.js";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      navArrYs: [],
      navDebounce: null,
      navcurrentY: 0,
      message: "",
      toastShow: false,
    };
  },
  mixins: [itemListenerMixin, backTopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,

    Scroll,
    GoodsList,
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetailData(this.iid).then((res) => {
      const data = res.result;
      // swiper 信息抽取
      this.topImages = data.itemInfo.topImages;
      // console.log(data);
      // 商品详情 收据抽取
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //店铺名 信息抽取
      this.shop = new Shop(data.shopInfo);

      this.detailInfo = data.detailInfo;

      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.cRate !== 0) this.commentInfo = data.rate.list[0];

      getRecommend().then((res) => {
        this.recommends = res.data.list;
      });
      let timer;
      this.navDebounce = function () {
        let that = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
          that.navArrYs.push(0);
          that.navArrYs.push(that.$refs.param.$el.offsetTop);
          that.navArrYs.push(that.$refs.comment.$el.offsetTop);
          that.navArrYs.push(that.$refs.recommend.$el.offsetTop);
          that.navArrYs.push(Infinity);

          console.log(that.navArrYs);
        }, 1000);
      };
    });
  },
  mounted() {},
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
      this.navDebounce();
    },
    scroll(position) {
      let positionY = -position.y;
      this.isShowBackTop = -position.y > 1000;
      let length = this.navArrYs.length;
      // navbar定位计算
      for (let i = 0; i < length - 1; i++) {
        if (
          this.navcurrentY != i &&
          positionY >= this.navArrYs[i] &&
          positionY < this.navArrYs[i + 1]
        ) {
          this.navcurrentY = i;
          this.$refs.nav.iscurrent = this.navcurrentY;
        }
      }
      this.TopBack(position);
    },
    pullingUp() {},
    navClick(index) {
      this.$refs.scroll.scrollTo(0, -this.navArrYs[index], 100);
    },
    addCart() {
      let product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      this.$store.dispatch("addCart", product).then((res) => {
        this.$toast.show(res,1500);
      });
    },
  },
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemListener);
  },
};
</script>

<style scoped >
#detail {
  height: 100vh;
  position: relative;
  background-color: #fff;
  z-index: 10;
}
.detail-scroll {
  height: calc(100%);
  overflow: hidden;
  position: absolute;
  background-color: #fff;
  /* z-index: 3; */
  top: 44px;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.goods-info {
  position: relative;
}
.goods-list {
  padding-bottom: 60px;
}
</style> 
