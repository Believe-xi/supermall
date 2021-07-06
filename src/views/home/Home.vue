<template>
  <div>
    <nav-bar class="navColor">
      <template v-slot:center>
        <div>购物车</div>
      </template>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-view></recommend-view>
  </div>
  
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'

import {getHomeMultidata} from 'network/home.js'

export default {
  data(){
    return {
      banner:null,
      recommend:null
    }
  },
   created(){
     getHomeMultidata().then(res=>{
       console.log(res);
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
  },
  methods:{},
  components:{
    NavBar,
    HomeSwiper
  },

}
</script>

<style>
  .navColor{
    color: #fff;
    background-color: var(--color-tint);
  }
</style>