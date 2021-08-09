<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
};
</script>

<style scoped>
.tabbar {
  background-color: #f4f4f4;
  height: 49px;
  display: flex;
  text-align: center;
  z-index: 9;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 3px 6px rgba(100, 100, 100, 0.8);
}
</style>