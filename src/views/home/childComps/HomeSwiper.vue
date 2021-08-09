<template>
  <div>
    <swiper class="home-swiper">
      <template>
        <swiper-item v-for="item in banner" :key="item.id">
          <template> 
            <a :href="item.link">
              <img :src="item.image" alt="" @load="imgLoad">
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
  data(){
    return {
      flag:true
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods:{
    imgLoad(){
      if(this.flag)
      this.$emit('imgLoad')
      this.flag = false
    }
  }
};
</script>

<style scoped>
  .home-swiper{
    /* padding-top: 44px; */
  }
</style>