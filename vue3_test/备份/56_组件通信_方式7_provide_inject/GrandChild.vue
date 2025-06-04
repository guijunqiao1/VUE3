<template>
  <div class="grand-child">
    <h3>我是孙组件</h3>
    <h4>银子：{{ money }}</h4>
    <h4>车：一辆{{ car.brand }}车，价值{{ car.price }}万元</h4>
    <button @click="updateMoney(2)">点我银子父亲的银子加二以及我从父亲那里获取到的银子也加二</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
  import { inject } from 'vue';

  //inject注射方法的第一个形参表示的是祖先组件提供的信息名，第二个形参表示的是该信息名对应的信息值的默认值的设置
  let {money,updateMoney} = inject('MoneyContext',{money:0,updateMoney:(xingcan:number)=>{}});//需要返回值接受(注射)到传入的信息
  let car = inject('che',{brand:"未知",price:0});//需要返回值接受(注射)到传入的信息
  //上述设置的默认值不仅起到了默认值的预赋值的效果同时还为inject返回值的时候提供了返回值类型提供了隐晦的类型提示
</script>

<style scoped>
  .grand-child{
    background-color: orange;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
  }
</style>
<!-- //需要注意的是：一个Proxy类型的对象中的数据都是有响应性的{a:1,b:2},如果使用解构赋值的方式对其中的a进行单独的获取则仍然具有响应性 -->