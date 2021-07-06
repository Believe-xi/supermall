<template>
  <div>
    <swiper>
      <template>
        <swiper-item v-for="item in banner" :key="item.id">
          <template> 
            <a :href="item.link">
              <img :src="item.image" alt="">
            </a>
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
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style>
</style>