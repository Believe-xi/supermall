<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="itemImg"></slot></div>
    <div v-else><slot name="itemActiveImg"></slot></div>
    <slot name="itemTitle"></slot>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  props:{
    path:String
  },
  methods:{
    itemClick(){
      if(this.isActive) return
      this.$router.push(this.path)
    }
  },
  computed:{
    isActive(){
      // console.log(this.$route.path,this.path);
      return this.$route.path === this.path
    }
  }
};
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  font-size: 14px;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>