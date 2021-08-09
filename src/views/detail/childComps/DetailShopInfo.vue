<template>
  <div class="shop-info" v-if="Object.keys(shop).length > 0">
    <div class="shop-top">
      <img :src="shop.logo" alt="" />
      <span class="title">{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left shop-middle-item">
        <div class="info-sells">
          <div class="sells-count">{{ shop.sells | sellCountFilter }}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="sells-count">{{ shop.goodsCount }}</div>
          <div class="sells-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-right shop-middle-item">
        <table>
          <tr class="" v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ isred: item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ isgreen: item.isBetter }">
              {{ item.isBetter | betterFilter }}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  components: {},
  filters: {
    sellCountFilter(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
    betterFilter(value) {
      if (value) return "高";
      return "低";
    },
  },
};
</script>

<style scoped >
.shop-info {
  padding: 25px 8px;
  border-top: 5px solid #f2f5f8;
  border-bottom: 5px solid #f2f5f8;
}
.shop-top {
  line-height: 45px;
}
.shop-top img {
  width: 45px;
  height: 45px;
  vertical-align: middle;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.shop-top .title {
  padding-left: 10px;
}
.shop-middle {
  display: flex;
  height: 100px;
}
.shop-middle-item {
  flex: 1;
  align-items: center;
  color: black;
}
.shop-middle-left {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.info-sells,
.info-goods {
  flex: 1;
}
.info-goods {
  border-right: 1px solid black;
}
.sells-text,
.goods-text {
  font-size: 14px;
  padding-top: 5px;
}
.shop-middle-right {
  font-size: 13px;
  /* padding-top: 15px; */
  display: flex;
  justify-content: center;
}

.shop-middle-right td {
  padding: 3px;
}
.score {
  color: #5ea732;
}
.isred {
  color: #f13e3a;
}
.shop-middle-right .better {
  padding: 0;
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}
.shop-middle-right .isgreen {
  background-color: #f13e3a;
}
.shop-bottom {
  text-align: center;  
}

.enter-shop {
  margin: 0 auto;
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>
