<template>
  <div class="count">
    <h2>当前求和为：{{ x.sum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script lang="ts" name="Count" setup>
  import {ref} from "vue";
  //引入pinia中的共享求和数据的库进行引入
  import {useCountStore} from "./store/count";

  // 在求和数据库中取出库对象
  let x = useCountStore();
  //以下两种方式都可以获取到库中的state属性中的数据
  // console.log(x.sum);
  // console.log(x.$state.sum);
  
  //数据
  let n = ref(1); //用户选择的数字
  //方法
  function add(){
    x.sum += n.value;
  }
  function minus(){
    x.sum -= n.value;
  }
</script>

<style>
  .count {
    background-color: skyblue;
    padding:10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button{
    margin:0 5px;
    height:25px;
  }
</style>

<!-- 此处对RefObject对象类型的数据进行.value的使用场景的总结： 
let obj = reactive({
  a:1,
  b:2,
  c:ref(3)
})
let x = ref(4);
console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
console.log(x.value);
倒数第二之所以不使用.value是因为本质是存在于Proxy对象中的属性，则在嵌套赋值的时候就已经将RefObject类型的属性进行value的直接赋值了(拆解)
-->
