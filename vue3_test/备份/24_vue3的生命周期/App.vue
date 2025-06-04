<template>
  <person v-if="isShow"/>
  <h1>你好</h1>
</template>

<script lang="ts" setup name="App">
import {onMounted, ref} from "vue"
  import person from "./Person5.vue"
  let isShow = ref(true);

  //用于实验的生命周期函数的执行
  onMounted(()=>{
    console.log("父挂载完毕~~");
  })
</script>

<!-- 实验结果为子执行在父之前，由于在index.html中的src执行main.ts文件的时候，main.ts中又执行App.vue，
而在vue文件中html元素加载完毕才会加载script标签中的内容，则由import语句进入到Person5.vue文件中执行子语句了-->