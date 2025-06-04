<template>
  <div class="about">
    <h2>大家好，欢迎来到尚硅谷直播间</h2>
  </div>
</template>

<script lang="ts" setup name="About">
  import { onMounted,onUnmounted,onBeforeMount,onBeforeUnmount } from 'vue';
  //挂载前
  onBeforeMount(()=>{
    console.log("挂载前");
  })
  //挂载完毕
  onMounted(()=>{
    console.log("挂载完毕");
  })
  //卸载前
  onBeforeUnmount(()=>{
    console.log("卸载前");
  })
  //卸载完毕
  onUnmounted(()=>{
    console.log("卸载完毕");
  })
</script>

<style>
  /* 关于 */
  .about {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: rgb(85,84,84);
    font-size: 18px;
  }
</style>