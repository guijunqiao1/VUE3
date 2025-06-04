<template>
  <div class="app">
    <h2>我是App组件</h2>
    <Suspense>
      <template v-slot:default>
        <Child/>
      </template>
      <template v-slot:fallback>
        <h2>加载中.......</h2>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts" name="App" setup>
  import Child from './Child.vue';
  import { Suspense } from 'vue';
</script>

<style>
  .app {
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
    background-color: #ddd;
  }
</style>
<!-- 
//注意此处的插槽的使用方式和之前学过的组件通信的插槽的使用之间的区别：之前为父组件中的插头(template)中的内容直接替换到子组件中的
<slot>插槽标签并且插槽中的内容被完全替换之后即为被用作父组件的内容的一部分实现通信，而此处则为Suspense模块下的特定插头的语法，表示的含义是
当子组件中的异步(也就是await方法的执行)正在发生的时候，子组件中隐性地会自带上的两个插槽的名称分别为default、fallback，当异步执行过程中则fallback进行显示
default消失，而当异步执行完毕之后则是default插槽存在fallback插槽消失,从而在插头中设置内容进行嵌入并且直接完成异步过程中的内容的呈现最终实现。
同时还需要注意的是实际上的fallback插槽存在的位置并不是子组件中，而是在父组件中的一个临时创建的可快速进行访问的插槽中的(进而完成异步过程中的内容设计的实现)。 -->

<!-- 下方为官方解释：
<Suspense> 组件用于处理异步组件加载时的状态。在 Vue 3 中，如果一个组件或其子组件包含异步加载逻辑（例如通过网络加载数据或组件），你可以使用 <Suspense> 组件来提供一个加载中的占位符。
<template v-slot:default> 是默认插槽，它包含了默认情况下要显示的内容，即 <Child/> 组件。
<template v-slot:fallback> 是后备插槽，当 <Child/> 组件或其内容尚未加载完成时，会显示其中的内容，即 "加载中......."。
关于插槽的理解:

你提到插槽的作用有些混淆。在 Vue 中，插槽（slots）是用于在父组件中向子组件传递内容的一种机制。在这里，<template v-slot:default> 和 <template v-slot:fallback> 是 Vue 3 中 Suspense 组件特有的用法，不同于普通的插槽传递机制。
当 <Child/> 组件加载完毕时，<template v-slot:default> 中的内容（即 <Child/> 组件）会显示，而 <template v-slot:fallback> 中的内容会被隐藏。
用途和实现:

<Suspense> 组件使得在加载异步内容时，能够更优雅地处理用户体验，提供加载中的提示，并在内容加载完成后显示实际内容，避免了用户在等待时看到空白或无反馈的情况。 -->