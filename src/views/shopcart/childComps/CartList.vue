<template>
  <div class="cartlist">
    <scroll class="wrapper" ref="scroll">
      
    <cart-list-item v-for="(item,index) in $store.state.cartList" :key="index" :product="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'
import CartListItem from './CartListItem.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    Scroll,
    CartListItem
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped >
.cartlist {
  height: calc(100vh - 44px);
}
.wrapper{
  height: calc(100% - 95px);
  overflow: hidden;
}
</style>
