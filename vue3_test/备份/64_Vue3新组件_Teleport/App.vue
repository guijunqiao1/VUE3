<template>
  <div class="outer">
    <h2>我是App组件</h2>
    <img src="https://img0.baidu.com/it/u=1523722729,1126408876&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1734886800&t=08f93e914507af8937d4563341aeecfd" alt="尚硅谷">
    <br></br>
    <Modal/>
  </div>
</template>

<script name="App" setup lang="ts">
  import Modal from './Modal.vue';

</script>

<style>
  .outer {
    background-color: #ddd;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 10px;
    width:400px;
    height:400px;
    filter: saturate(200%);
    /* 在设置了filter属性之后的子元素在使用fixed定位的参照物就不是默认的视口了而是父元素，故需要使用到teloport将Modal子标签传送到
    body标签中，执行传送的流程为：当父元素执行到标签元素的内容时候之后执行到了teleport标签的时候则会将内容直接放置到原先父元素的位置的后置位(同级的话，否则就是父元素的外层的前置位) */
  }
  img {
    width:180px;
  }
</style>