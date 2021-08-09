<template>
  <div>
    <swiper class="detail-swiper">
      <template>
        <swiper-item v-for="item in topImages" :key="item" class="detail-swiper-item">
          <template>
            <img :src="item" alt="" />
          </template>
        </swiper-item>
      </template>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped >
.detail-swiper {
  height: 400px;
}
</style>
