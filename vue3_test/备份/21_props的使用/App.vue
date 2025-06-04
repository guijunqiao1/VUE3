<template>
  <!-- 务必看懂这一行代码： -->
  <!-- <h2 a="1 + 1" v-bind:b="1 + 1" c="x" v-bind:d="x" ref="qwe" >测试</h2> -->
  <Person a="哈哈" v-bind:list="personList"/>
  <!-- 注意此处在引入的标签中设置的a属性和先前在标签上设置的ref属性之间的区别，后者为用于当前文件中获取到对象的一种属性的专门的使用方式
  (具体获取的语法为:目标标签的ref属性值=ref()),同时当进行对该获取标签对象进行打印操作的时候，则一般由于ref本身的原则是不会对外部文件的
  Proxy对象属性(内容为对应文件的script标签中自动return的变量)进行对应的显示的，但是在组件文件中设置export类似方法将对应的属性进行暴露
  即可完成对外显示当前return的数据的内容(注意不包含标签对象本身，而是仅有script中return的数据)-->
  <!-- 同时还需要注意的是：在当前文件下的组件标签中设置的属性本身的是属于当前的枝文件主动传递给改组件文件(叶子文件)的一个属性,
  对于该叶子文件可以通过引入其他方法的方式并执行对应的函数完成对该传入的属性进行使用的操作 -->
</template>

<script lang="ts" setup name="person">
  import Person from "./Person3.vue";
  import { reactive } from "vue";
  import {type persons} from "./types";
  //注意此处引入模版中暴露的接口模块的语法,{}是针对对象文件中的某个属性或者方法都进行指向的导入，针对接口文件而言则也需要使用{}
  //进行解构赋值，但是对于没有使用export关键字的文件而言使用import进行引入的时候的内容则为整个文件的组件(当引入文件为vue文件的情况时)
  
  let x= 10;
  let personList = reactive<persons>([
    {id:"atguigu01",name:"张三",age:18,x:123},
    {id:"atguigu02",name:"李四",age:20},
    {id:"atguigu03",name:"王五",age:22},
  ])
  console.log(reactive([{id:"atguigu01",name:"张三",age:18},{id:"atguigu02",name:"李四",age:20},{id:"atguigu03",name:"王五",age:22}]));
  // console.log(personList)--未使用模版的情况下;//首先此处先对使用了reactive转化后的数组类型的特殊对象进行研究，结果为
  //{Proxy,[{...},{...},{...}}的形式，而使用模版是对=右边的返回值的整体进行检测的，则在使用personlist:persons = 
  //reactive({})的时候则是根据{Proxy,Array[]}中的内容进行对象式的数组查询(因为自定义的模版查询方式Persons是针对纯数组类
  //型的对象元素进行逐个排查的),此时需要使用personlist = reactive<persons>({})的形式将原先的的内容进行替代，表示的含义
  //为将Proxy对象"中的"数组中的元素进行逐个模版规范的排查
</script>

<!-- 此处对标签中的v-bind以及v-model属性之间的区别进行总结：
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
<Person/ v-model:inputValue>则是将上述的情况进行双向的绑定的情况的结合
-->
