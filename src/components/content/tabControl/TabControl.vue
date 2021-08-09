<template>
  <div class="tabcontrol">
    <div
      v-for="(item, index) in title"
      :key="index"
      :class="{ active: index === isCurrent }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isCurrent: 0,
    };
  },
  methods:{
    itemClick(index){
      this.isCurrent = index
      this.$emit('tabClick',index);
    }
  }
};
</script>

<style scoped>
.tabcontrol {
  display: flex;
  justify-content: space-around;

  height: 44px;
  line-height: 44px;
  font-size: 15px;
  background-color: #eee;
  z-index: 9;
}
.tabcontrol span {
  flex: 1;
  padding: 4px;
}
.active {
  color: var(color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>