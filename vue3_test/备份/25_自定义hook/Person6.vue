<template>
  <div class="person">
    <h2>当前求和为：{{sum}} 乘以10后为{{bigSum}}</h2>
    <button @click="add">点我sum加一</button>
    <hr>
    <img v-for="(dog,index) in dogList" :src="dog" :key="index">
    <button @click="getDog">再来一只小狗</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import Sum from "./hooks/uesSum";
  import Dog from "./hooks/useDog";
  let {sum,add,bigSum} = Sum();
  let {dogList,getDog} = Dog();
</script>

<style>
  button {
    margin:0 5px;
  }
  li {
    font-size: 20px;
  }
  .person {
    box-shadow: 0 0 10px;
    margin-right: 10px;
    background-color: skyblue;
    border-radius: 10px;
  }
  img {
    height: 10px;
    margin-right: 10px;
  }
</style>

<!-- 对import是否使用{}进行总结： -->
<!-- 当默认导出一个变量或者方法等的时候，也就是你在模块A中，export default a ，那么你导入时，始终不需要花括号，而
person文件则是由于setup语法糖的原因则会默认导出组件，则不需要使用{}进行解构赋值 -->

<!-- 同时按钮不要点击的太频繁，若太频繁则会被服务器当做是攻击进而将当前的IP进行封禁，则无法发送请求了 -->

<!-- 需要注意的是reactive响应化的数组任然是数组，但是是Proxy表示的对象类型的数组 -->

<!-- 当每一次响应式数据dogList发生改变的时候html模块也会动态发生改变从而产生动态产生狗图片的效果 -->

