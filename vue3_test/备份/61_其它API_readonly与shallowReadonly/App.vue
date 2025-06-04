<template>
  <div class="App">
    <h2>当前sum1为：{{ sum1 }}</h2>
    <h2>当前sum2为：{{ sum2 }}</h2>
    <h2>当前car1为：{{ car1 }}</h2>
    <h2>当前car2为：{{ car2 }}</h2>
    <button @click="changeSum">点我sum+1</button>
    <button @click="changeBrand1">修改品牌</button>
    <button @click="changeColor1">修改颜色</button>
    <button @click="changePrice1">修改价格</button>
  </div>
</template>

<script lang="ts" name="App" setup>
  import { ref,readonly,reactive,shallowReadonly } from 'vue';
  //数据
  let sum1 = ref(0);
  // readonly作用：用于创建一个对象的深只读副本
  let sum2 = readonly(sum1);//readonly方法的形参位置要求为响应式数据，故在此处不能为sum1.value的形式，并且此后的sum2无法修改
  let car1 = reactive({
    brand:"奔驰",
    options:{
      color:"红色",
      price:100
    }
  })
  let car2 = shallowReadonly(car1);//此为浅层只读类型的值，也就是在进行car2.属性 = 某个值的时候进行直接修改的值是无法奏效的(并且会飘红)，
  //而如果使用的是car2.属性1.属性2 = 某个值的时候进行直接的修改则是正常能够进行修改的
  //方法
  function changeSum(){
    sum1.value++;
  }
  function changeBrand1(){
    car1.brand ="宝马";
  }
  function changeColor1(){
    car1.options.color="绿色"
  }
  function changePrice1(){
    car1.options.price+=10;
  }
</script>

<style>
</style>

<!-- 都是根据需要保护的数据的哪个部分进行readonly方法的使用 -->