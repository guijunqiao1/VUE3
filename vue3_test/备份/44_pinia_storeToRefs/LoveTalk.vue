<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="item in talkList" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" name="LoveTalk" setup>
  import { useLoveTalkStore } from './store/lovetalk';
  import { storeToRefs } from 'pinia';
  
  let x = useLoveTalkStore();

  let {talkList} = storeToRefs(x);
  //方法
  function getLoveTalk(){//此处的语句表示将正常进行土味情话的添加语句封装到click事件中的含义
    x.getLoveTalk();
  }
  
</script>

<style>
  .talk {
    background-color: orange;
    padding:10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button{
    margin:0 5px;
    height:25px;
  }
</style>

<!-- 本节内容为将获取到土味情话的方法使用第三种修改数据的方式封装到lovetalk.ts文件中 -->

<!-- 需要注意的是使用export部分暴露的函数对象，则在外部文件引入的时候应该使用解构赋值的变量名对应进行接收表示的含义是该对象(文件对象)中的对应变量的内容的导入 -->