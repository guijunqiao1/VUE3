<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>银子：{{ money }}万元</h4>
    <h4>车子：一辆{{ car.brand }}车，价值{{ car.price }}万元</h4>
    <Child/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue'
  import { ref,reactive,provide } from 'vue';
  //数据
  let money = ref(100);
  let car = reactive({
    brand:"奔驰",
    price:100
  });
  //方法
  function updateMoney(value:number){
    money.value += value;
  }

  //向后代组件中传递信息--在不干扰到介质组件的前提下
  provide('MoneyContext',{money,updateMoney});//此处提供了money的相关hook
  //同时上方需要注意的是第一个传参为money为money:money的简写形式，此含义为将money这个响应式变量进行提供了;
  //但如果为money:money.value不仅不能使用money的简写的形式，同时表示传递的内容为单纯的没有响应式的值,可
  //以根据实际需要的不同的情况的值进行获取(也就是不同形式的书写)
  provide('che',car);
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>

<!-- 实现了祖先传递给子孙以及子孙传递给祖先，和之前学的$attrs方式起到相同的作用，但是不需要中间组件作为介质进行间接信息传递：
祖先传递给子孙体现在：
子孙传递给祖先体现在：updateMoney函数的实参的传递以及函数体内容的执行，实参为子代中提供的信息，而函数体中=的左边为祖先的内容则表示的是被提供了信息
-->

<!-- //先前JS中的细节的语法进行回顾： -->
<!-- 对于字符串类型的索引值是无法使用.运算符进行索引的，而应该使用的是[]进行索引 -->