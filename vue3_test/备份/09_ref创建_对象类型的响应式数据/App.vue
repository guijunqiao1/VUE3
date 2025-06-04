<template>
  <div class="person">
    <h2>汽车信息：一辆{{car.brand}}车价值{{car.price}}</h2>
    <button @click="changePrice">修改汽车价格</button>
    <br>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{g.name}}</li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏的名称</button>
  </div>
</template>

<script setup lang="ts" name = "Person">
  import { ref } from 'vue';
  //数据
  let car = ref({
    brand:'奔驰',
    price:100,
  })

  let games = ref([
    { id: 'ahsgdyfa01', name: '英雄联盟' },
    { id: 'ahsgdyfa02', name: '王者荣耀' },
    { id: 'ahsgdyfa03', name: '原神' }
  ])

  function changeFirstGame(){
    games.value[0].name = "流行蝴蝶剑";//注意此处的响应式数据的使用方式,由于使用了ref的实际数据“全部”存放在value中
    //所以在进行数组中明确的索引指定应该发生在value中，并且随后使用.运算符进行明确的属性的指定即可
  }
  function changePrice(){
    car.value.price += 10;
  }
</script>

<!-- 此处对使用ref创建对象类型的响应式数据进行解析：
1、首先清除ref最终创建的对象和reactive最终创建的对象之间的区别在于：前者创建的对象是只含有value值的，并且其中的value
值存放的即为响应式数据，而reactive创建的对象中的属性值和原先的属性值一致，但是是直接作为响应式数据存在的
2、和基本数据类型的ref创建的用法一直，对于template模块中的变量直接进行setup中的变量的自动填充即可;但是在script部分则需要使用
实例化对象名.value.属性名的形式进行操作--和基本数据类型的语法类似，但是需要注意value属性出现的位置
3、本质上使用ref进行对象类型的响应式数据创建的本质其实是在value中存放上reactive进行底层的使用，将Proxy的内容放置在value中进行直接的使用
，由于不是显式调用故不需要引入(import){reactive}即可完成此链式过程
4、由3、提供的原理的本质可以得出就算需要响应化的对象是深层次的也同样可以完成（因为最终借助的还是reactive构造函数）
-->
