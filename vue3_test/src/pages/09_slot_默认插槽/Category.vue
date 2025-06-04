<template>
  <div class="Category">
    <h2>{{ title }}</h2>
    <div v-if="title==='热门游戏列表'">
      <slot>默认内容</slot>
    </div>
    <div v-if="title==='今日美食城市'">
      <slot></slot>
    </div>
    <div v-if="title==='今日影视推荐'">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts" name="Game">
  defineProps(['title']);
</script>

<style scoped>
.Category {
  width: 200px;
  height: 300px;
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
h2 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
</style>