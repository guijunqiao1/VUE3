<!-- //对v-model属性的含义进行回顾，并且和v-bind属性以及ref属性之间的区别进行归纳：
ref本质为vue中进行类似DOM方式的元素标签对象的获取属性，设置了该属性对应的属性值的标签可以通过在setup部分中设置const ref属性对应的属性名 = ref()的形式直接将对应的标签
以对象的形式(RefObject类型的对象)进行获取，一般一个标签对象设置一个ref值，但当设置了两个ref值相同的对象进行对象获取的时候则是将排在前面的元素进行获取(同时获取的顺序遵循
优先获取当前文件下的对象)，当通过该属性的这种方式获取到的对象为外部组件的对象的时候，则对象的内容中的value值是隐含的(也就是相对内部文件对象为:value:{
这种{key1:value1}(打印的内容是只含标签对象的script中的变量内容，但是指定对象进行使用则为正常的对象内容)的直接格式化的形式获取到的value值中的对象的形式为value:{...}和
标签对象中内容无关的内容
}) -->
<!-- //对v-model属性的含义进行回顾，并且和v-bind属性之间的区别进行归纳:
特性	                  v-bind	                                  v-model
绑定方式	              单向绑定	                                 双向绑定
作用	      将父组件的数据绑定到 DOM 或子组件属性	          绑定数据并允许数据与视图双向同步
实现原理	          直接绑定值到属性	                封装了 v-bind:value 和 v-on:input 的功能
适用场景	      动态属性绑定（如 class、style）	            表单输入绑定、子组件数据交互
修改数据	      不允许直接通过视图修改绑定的值	          可以通过用户交互（如输入）修改绑定的值

通俗的案例演示：
v-bind:
<Person/ v-bind:value:"inputValue">
此处虽然将设置的inputValue变量的值提供给属性值中的inputValue，但是当用户在页面上对实际的value进行修改的时候则无法将inputValue进行
动态的修改并获取(所谓不能获取也就是当前的inputValue变量的值为原先设置好了的而不是用户提供的)
v-model:
<Person/ v-model:inputValue>则是将上述的情况进行双向的绑定的情况的结合--并且v-model是专门针对value的属性的
-->
<!-- //实验ref()方法和回顾defineExpose、defineProsps方法部分的内容： -->
<!-- <template>
  <div>你好</div>
  <div>{{ a }}</div>
  <div>{{ b }}</div>
</template>

<script lang="ts" name="Count" setup>
  import { defineExpose,ref } from "vue";
  const title = ref();
  let a=1;
  let b=2;
  defineExpose({a,b});
</script> -->


<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}</h2>
    <!-- 需要注意的是下方使用的v-model的含义为当前为select标签中设置的默认value为n(script中设置的初始值决定),并且后续用户点击option进行值的修改的时候也会
    使得n发生变化，并且script中的n为最新的值;同时如果主动进行选择之后获取到的n为字符串的值，原因在于标签中的内容均为字符串 -->
    <select v-model.number="n">
      <!-- 此处为select标签设置的v-model属性为number的值，表示当其中的value发生动态的改变的时候同样能够将n进行修改，并且修改的值为正常情况下进行Number类型强制转化的值 -->
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
  //数据
  let sum = ref(1); //当前求和
  let n = ref(1); //用户选择的数字
  //方法
  function add(){
    sum.value += n.value;//使用.value的形式的原因是因为sum和n都是RefObject类型的数据
  }
  function minus(){
    sum.value -= n.value;
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