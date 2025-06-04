<template>
  <div class="father">
    <h3>父组件</h3>
    <!-- v-model用在html标签上 -->
    <!-- <input type="text" v-model="username"> -->
    <!-- 下方为本质，首先:value用于实现数据映射到页面;后一个键值对的含义为为input标签绑定上了一个输入事件，其中函数体内
    容为将当前的响应式数据username进行修改为输入对象的具体内容(并且可以通过对象的结构直接进行索引获取到修改的对象的value
    的内容)的操作,同时需要注意的是此处为@符下的特殊的函数书写的形式即将函数体内容直接进行呈现(另外的书写的形式还有@input
    ="函数名"、@input="函数名("传递的实参")"、@input="emitter.emit("指定的事件",传递的实参)"、@input="Emits("指定的
    通过组件作为介质传递过来的方法名",传递的实参)")倒数两个的实际案例为前两节的实例(emitter库、defineEmits接收组件方法)-->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->
    <!-- 并且上述的语句中的（<HTMLInputElement>）的结构为断言的结构（ts内容），表示解释当前的内容“一定”为HTML中的输入元素标签对象 -->

    <!-- v-model用在组件标签上 -->
    <!-- <AtguiguInput v-model="username"/> -->
    <!-- 下方为组件标签上使用v-model的本质： -->
    <AtguiguInput 
     :modelvalue="username" 
     @update:modelvalue=" username = $event "
    />
    <!-- 上述绑定的自定义事件的内容中的$event为实际调用Emits的时候传递的实参对应的位置 -->
  </div>
</template>

<script setup lang="ts" name="Father">
  import {ref} from "vue";
  import AtguiguInput from "./AtguiguInput.vue";

  //数据
  let username = ref("zhangsan");

</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>

<!--
首先对原先v-model属性的使用进行归纳：
通俗的案例演示：
v-bind：
<Person/ v-bind:value:"inputValue">
此处虽然将设置的inputValue变量的值提供给属性值中的inputValue，但是当用户在页面上对实际的value进行修改的时候则无法将
inputValue进行动态的修改并获取(所谓不能获取也就是当前的inputValue变量的值为原先设置好了的而不是用户提供的)
v-model:
<Person/ v-model:inputValue>则是将上述的情况进行双向的绑定的情况的结合--并且v-model是专门针对value的属性的
-->


<!-- 此处对v-model属性的使用提出三个问题用于更好的理解v-model的底层逻辑：
1、为什么v-model传一个参数就能实现双向绑定并且完成组件的通信?
答：首先将v-model属性的本质拆开的input的形式和原先的input标签的v-model的书写的格式进行区别：
（1）<input type="text" v-model="username">
（2）<input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value">
（3--2的另一种写法）<input type="text" :value="username" @input="Emits("update:modelvalue",(<HTMLInputElement>$event.target).value)">
之所以可以进行双向绑定的原因在于前者的username变量对象和后续的数据=>页面(:value="username")以及页面=>数据(@input内容)的操作对象都是username变量对象,
并且前者的对象是直接进行用于呈现的，故不多做解释;但是后者的@input方法最终的执行函数的内容被赋值操作则同样是username这个变量本身，则可一个变量进行v-input方法最终的执行函数的内
容被赋值操作则同样是username这个变量本身，则可一个变量进行v-model的双向绑定;上述都是关于双向绑定的实现，下方为组件之间的通信的实现：首先必须是使用v-model的底层模式进行拆开书写，
因为最终调用的@input方法需要嵌套上使用的组件方法中的函数体的内容中则含有着提供该组件方法的文件的信息内容（因为使用的是原生事件和自定义事件的嵌套的写法的使用，而不是直接的事件本身的单纯的设置的形式）

2、v-model的底层实现通信的原因？
答：首先底层的形式为<input :value="" @input=" '执行的函数体内容' ">,如果使用的是Emits方法的形式则可以在当前组件的原生事件的执行内容的基础上进行组件函数的使用即可完成组件间的通信(本质其实是因为
组件方法中的函数体中可以蕴含外部组件提供的参数)

3、为什么明明v-model的底层本可以使用<input :value="modelvalue" @input="modelvalue = (<HTMLInputElement>$event.target).value">进行双向绑定的实现、为什么还使用
<input :value="modelvalue" @input="Emits("update:modelvalue",($event.target).value)">进行@input的事件的嵌套？
答：因为使用后者的时候的modelvalue方法是外部提供的组件方法,并且其中可能含有外部组件需要传递过来的信息内容,并且在该组件方法中进行当前组件的实参的传递可以实现v-model的组件通信效果

本质上v-model进行通信的实现还是和custom-event的本质是一样的，都是通过组件方法的内容进行通信的，但是v-model还实现了双向绑定

v-model的通信主要使用在父子之间的原因是：
首先组件标签身上的v-model="username"语句用于父亲传递给子的信息，而执行@input的时候的实际使用Emits()方法进行组件方法的调用的时候传递子组件中的实参到组件方法
的定义位置进行执行(在父组件中定义的,底层的名称为@update:modelvalue="username = $event"的自定义事件,其中username为父组件中的响应式数据同时也是父组件传递给
子组件的内容(其实也就是v-model的值的内容),其中$event为自定义事件被使用Emits执行的时候传递的实参的占位) -->