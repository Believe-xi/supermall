<template>
  <div class="goodsList">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"></goods-list-item>
  </div>
</template>
 
<script>
import GoodsListItem from './GoodsLiseItem.vue'
export default {
  props:{
    goods:{ 
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style scoped>
  .goodsList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>