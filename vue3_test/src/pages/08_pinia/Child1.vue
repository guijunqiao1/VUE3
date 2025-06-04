<template>
  <div class="Child1">
    <h2>Child1本身的信息-----------------------</h2>
  </div>
</template>

<script lang="ts" name="Child1" setup>
  import { reactive } from 'vue';
  //将外部store中的对象进行引入，此时需要实现Child1向Child2发送信息
  import {useCountStore} from "./store/Child1_to_Child2";
  let x= useCountStore();

  //数据
  let Child1 = reactive({
    name:"Child1",
    age:19
  });
  //将Child1存入pinia中
  x.jiezhi.unshift(Child1);
</script>
<style>
  .Child1 {
    background-color: skyblue;
    width:100px;
    padding: 10px;
  }
</style>
<!-- 
//上述需要注意的是由于自身作为子组件被其他组件进行引入的话会导致CSS内容被原样保留以及对应的标签对应的属性也都会被原样保留，
也就是需要注意多个组件进行统一引入的时候的CSS样式、class类名的重复的情况--------------------
此处对父组件中引入多个子组件的情况下，其中的子组件：
请问使用vue进行多个子组件进行引入并使用的时候，若子组件中的template中的标签的类名和其他子组件中的类名相同是不是在映射到父组件中
的时候保留class的特性并且在对应的CSS部分中的内容设置的时候是不是对整个父组件中的style进行内容的直接填充？并且针对父组件中的<Child1/>
<Child2/>的这样的格式首先将Child1的style直接先放在父组件的style中，并且后续的Child2的style会放在原先填充的style标签的下方 -->