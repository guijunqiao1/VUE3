<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}</h2>
    <h2>欢迎来到{{ school }}，坐落于{{ address }}</h2>
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
  import {useCountStore} from "./store/count";
  //从pinia库中引入storetoRefs方法(该方法用于将pinia库中的最终返回的对象中的数据进行过滤性的响应式转化)
  import { storeToRefs } from "pinia";

  let x = useCountStore();
  //此处将对象主体的属性直接进行获取便于template中的各个属性的直接赋值的声明
  let {sum,school,address} = storeToRefs(x);//由于直接通过该方式进行值的赋取的方式获取到的是非响应式的值，而是单一的值，则此处使用storetoRefs
  //方法将内容转化为对应的响应式的数据之所以不直接使用toRefs方法的原因在于会将所有的store中的属性内容转化为Ref对象的形式,而storetoRefs方法则可以进行选择性的过滤转化

  //数据
  let n = ref(1);
  //方法
  function add(){
    x.increment(n.value);
  }
  function minus(){
    x.decrement(n.value);
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

<!-- 需要注意的是虽然storetoRefs方法是过滤，但是其实过滤的还不够完全(也就是不能在数据上进行细致的区分转换，只能在数据和方法
上进行区分转化) -->
