<!--
首先对原先学过的props进行回顾： 
先前的学过的Props相关的知识是其中的一个方法:defineProps，用于将枝文件中使用键值对的形式呈现的组件属性内容决定要不要在子组件中
进行传递,注意和defineExpose(ref属性的章节中提到)方法之间的区别，defineExpose为在组件中设置ref属性用于替代DOM功能进行标签对象
获取的时候的value值中呈现该组件标签中的什么内容进行设置的方法，形参为对象的形式(其中的键值对可以简写为a,b,c的形式)
-->

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

  //首先此处需要对$subscribe属性进行使用--需要注意的是该属性存在于store对象中
  x.$subscribe((mutate,state)=>{//此处的含义为修改$subscribe函数体的内容(本质是形参位上的回调函数的内容)，
    console.log("talkStore里面保存的数据发生了变化");//注意：并不是立即调用而是修改函数体的内容，这并不会立即执行

    //此处在每次进行x的store库中的state数据修改的时候进行修改后的state的Proxy形式的对象的存储在本地浏览器中的形式
    localStorage.setItem("talkList",JSON.stringify(state.talkList));//注意存储的具体对象需要使用.运算符进行索引
    //此处已经存入的state.talkList本质为对象数组
  });
  //上述的回调函数中的两个形参分别表示的是：发生修改的对象信息(也就是具体是哪个对象发生了改变以及其他的改变的信息)的对象形式的内容、修改后的对象数据内容(注意和x对象内容之间的区别此处的state相当于是x的提纯为仅含state的Proxy对象的情况)

  //方法
  function getLoveTalk(){
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
