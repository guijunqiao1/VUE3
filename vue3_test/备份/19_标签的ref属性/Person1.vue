<template>
  <div class="Person">
    <h2 ref="title2">你好</h2>
    <button @click="showLog">点我输出h2这个元素</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref} from "vue"
  //数据
  let title2 = ref();//创建一个title2用于存储ref标记的内容
  //方法
  function showLog(){
    console.log(title2.value);//此处的title获取到的是当前文件下的
  }
</script>