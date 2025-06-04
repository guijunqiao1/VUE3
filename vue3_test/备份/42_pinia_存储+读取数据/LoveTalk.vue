<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="item in x.talkList" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" name="LoveTalk" setup>
  import axios from 'axios';
  import { nanoid } from 'nanoid';
  import { useLoveTalkStore } from './store/lovetalk';
  // 在土味情话数据库中取出库对象
  let x = useLoveTalkStore();
  //方法
  async function getLoveTalk(){
    //发送请求
    const result = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");//该方法用于向指定url发送GET请求,并且响应的结果通过

    let Object = {
      id:nanoid(),
      title:result.data.content
    }
    x.talkList.unshift(Object);
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

