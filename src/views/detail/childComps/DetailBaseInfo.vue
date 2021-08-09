<template>
  <div class="detail-base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title"><p>{{goods.title}}</p></div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
     <span>{{goods.columns['0']}}</span>
      <span>{{goods.columns['1']}}</span> 
      <span v-if="goods.services[goods.services.length-1].name">{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goods:{
      type:Object,  
      default(){
        return {}
      }
    }
  },
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped > 
.detail-base-info {
  padding: 10px;
  color: #999;
}
.info-title {
  color: #222;
  font-weight: 500;
}
.info-price {
  margin: 20px 0;
}
.n-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.o-price {
  font-size: 13px;
  text-decoration:line-through;
  padding-left: 5px;
}
.discount {
  display: inline-block;
  height: 24px;
  line-height: 24px;
  background-color: var(--color-high-text);
  font-size: 10px;
  padding: 2px 5px ;
  color: #fff;
  border-radius: 10px;
  position: relative;
  top: -8px;
  margin-left: 5px;
}
.info-other {
  display: flex;
  height: 30px;
  line-height: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(100,100,100,.1);
  font-size: 14px;
  justify-content:space-between;
}
.info-service {
  display: flex;
  font-size: 14px;
  height: 60px;
  line-height: 60px;
  color: #333;
  justify-content:space-between;

}
.info-service-item img {
  width: 14px;
  vertical-align: middle;
}
</style>
