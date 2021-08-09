<template>
  <div class="cart">
    <nav-bar>
      <template v-slot:center class="nav-bar">购物车({{Cartlength}})</template>
    </nav-bar>
   <cart-list></cart-list>
  <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'
import CartList from './childComps/CartList.vue'
import {mapGetters } from 'vuex'
export default {
  name:'shopCart',
  components:{
    NavBar,
    CartList,
    CartBottomBar
  },
  computed:{
    ...mapGetters (['Cartlength'])
  },
  activated(){
  }
}
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: white;
  }
  
</style>