<template>
  <div class="App">
    <h2>姓名：{{ person1.name }}</h2>
    <h2>年龄：{{ person1.age }}</h2>
    <h2>汽车：{{ car2 }}</h2>
    <button @click="car2.price+=2">点我汽车价格加2</button>
    <button @click="person1.age +=1 ">修改年龄</button>
    <!-- 上述为事件的直接的内容定义的放置形式 -->
  </div>
</template>

<script lang="ts" name="App" setup>
  import { reactive, toRaw,markRaw } from 'vue';
  //数据
  // toRaw 
  let person1 = reactive({
    name:"tony",
    age:18
  })
  let person_raw = toRaw(person1);
  console.log("响应式数据",person1);
  console.log("原始数据",person_raw);

  // markRaw
  let car = markRaw({
    brand:"奔驰",
    price:100
  });
  let car2 = reactive(car);//创建失败的内容--原生car对象内容
  console.log(car);
  console.log(car2);

  //上述需要注意的是toRaw后的对象是仍然可以被响应化的，也就是表明markraw是mark这个词本身在起到特殊的作用而不是raw本身
</script>

<style>

</style>