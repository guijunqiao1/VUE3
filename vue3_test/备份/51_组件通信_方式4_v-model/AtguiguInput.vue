<template>
  <!-- <input type="text"> -->
  <!-- 为上述原生input标签设置上外部传递过来的组件属性以及方法从而达到该input双向绑定的效果的实现 -->
  <input type="text" :value="modelvalue" @input="Emits('update:modelvalue',(<HTMLInputElement>$event.target).value)"/>
  <!-- 上述的:value实现数据到页面的实现而@input用于将自定义事件进行调用，并且传递的实参为当前的输入对象，并且需要注意的是传递的实参的目的地并不是
  input事件本身，而是update:modelvalue这个自定义事件中的$event中--此处的$event是input信息对象但是实参传递的位置是update:modelvalue这个自定义事件中; -->
  <!-- //此处的input本质上是一个原生事件嵌套上自定义事件的事件执行形式，这样的形式中使用Emits的形式将自定义事件的内容直接移动到当前的原生的事件的函数体内部，
  并且是经过Emits方法中的实参进行传递过后的内容，所以此处的事件绑定的实际内容为:@input="@update:modelvalue=" username = $event ""==>@input="@update:modelvalue=" modelvalue = $event""==>@input="modelvalue = $event"==>@input=" modelvalue = (<HTMLInputElement>$event.target).value " -->

  <!-- 对上述发生的3次转化(==>)进行逐次的解析：首先第一次使因为username本质上是一个响应式对象，并且被当前的input中的value进行共享地址了，之后进行修改的本质其实就是当前的input中的value的内容发生的动态的变化也就是当前文件中的modelvalue变量的变化;第二次的转化的原因在于本质是一个触发条件和触发的函数内容的执行
  所以直接将中介的自定义函数进行省略即可;第三次是因为调用Emits方法中的第二个参数为传递的实参的位置进行函数体中的$event的实际映射 -->
</template>

<script setup lang="ts" name="AtguiguInput">
  import { defineProps } from 'vue';
  import { defineEmits } from 'vue';

  //接收父组件传递过来的组件属性
  defineProps(['modelvalue']);
  //接收父组件传递过来的组件方法
  const Emits = defineEmits(['update:modelvalue']);
</script>

<style scoped>
  input {
    border: 2px solid black;
    background-image: linear-gradient(45deg,red,yellow,green);
    height: 30px;
    font-size: 20px;
    color: white;
  }
</style>

<!-- 此处对标签上直接绑定上的事件的语法形式进行总结：
1、提前定义好了的函数的嵌套的形式：<input type="text" @input="handleInput">
2、函数体内容直接进行执行的形式：<input type="text" @input="username = $event.target.value">
3、v-model属性的本质拆解的形式(本质为2的情况)：<input type="text" v-model="username">
4、原生事件和自定义事件之间的嵌套执行的形式：<AtguiguInput :modelvalue="username" @update:modelvalue="username = $event"/> -->
