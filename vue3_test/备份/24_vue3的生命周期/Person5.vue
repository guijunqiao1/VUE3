<template>
  <div class="person">
    <h2>当前求和为：{{sum}}</h2>
    <button @click="add">点我sum加一</button>
  </div>
</template>

<script lang="ts" setup name="Person">//需要注意的是setup进行组件创建的内容的包裹的部分是除开其他生命周期钩子执行的部分
  import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from "vue"
  //数据
  let sum = ref(0);
  //方法
  function add(){
    sum.value++;
  }

  //生命周期
  //创建--setup，在原先直接的setup语句中就已经将组建的创建的内容提前写好了
  console.log("组件创建完毕");
  
  //挂载前
  onBeforeMount(()=>{//需要注意的是和vue2中的函数体内容的放置位置之间的区别，此处表明了vue3中的生命周期对应的函数并不是函数
    console.log("组件挂载前");
  })
  //挂载后
  onMounted(()=>{
    console.log("子组件挂载完毕");
  })
  //更新前
  onBeforeUpdate(()=>{
    console.log("组件更新前");
  })
  //更新后
  onUpdated(()=>{
    console.log("组件更新完毕");
  })
  //卸载前
  onBeforeUnmount (()=>{
    console.log("组件卸载前");
  })
  //卸载后
  onUnmounted (()=>{
    console.log("组件卸载完毕");
  })
</script>

<!-- 注意和vue2中的生命周期对应的函数之间的区别：此处为函数的调用，传递的实参的内容即为立即执行的依据(本质即为函数体内容) -->





