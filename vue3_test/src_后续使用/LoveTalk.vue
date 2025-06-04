<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="item in talkList" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" name="LoveTalk" setup>
  import { useLoveTalkStore } from '@/store/lovetalk';
  import { storeToRefs } from 'pinia';
  
  let x = useLoveTalkStore();

  let {talkList} = storeToRefs(x);

  x.$subscribe((mutate,state)=>{
    console.log("talkStore里面保存的数据发生了变化");

    localStorage.setItem("talkList",JSON.stringify(state.talkList));
  });

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
