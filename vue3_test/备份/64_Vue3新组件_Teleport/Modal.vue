<template>
  <button @click="isShow = true">展示弹窗</button>
  <teleport to="body">
    <!-- 针对该传送门标签(teleport)中的属性to的内容为选择器内容(而此处则为元素选择器的情况) -->
    <div class="modal" v-show="isShow">
      <h2>我是弹窗的标题</h2>
      <p>我是弹窗的内容</p>
      <button @click="isShow = false">关闭弹窗</button>
    </div>
  </teleport>
</template>

<script name="Modal" setup lang="ts">
  import {ref} from "vue";
  //数据
  let isShow = ref(false);

</script>

<style>
  .modal {
    text-align: center;
    width: 200px;
    height: 200px;
    background-color: skyblue;
    border-radius: 10px;
    padding:5px;
    box-shadow: 0 0 5px;
    position: absolute;
    left:50%;
    top:20px;
  }
</style>