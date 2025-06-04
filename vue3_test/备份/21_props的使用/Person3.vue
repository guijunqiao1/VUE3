<template>
  <div calss="Person">
    <!-- <h2>{{a}}</h2> -->
    <ul>
      <li v-for="(person,index) in list" v-bind:key="person.id">{{person.name}}---{{person.age}}</li>
      <!--需要注意的是使用v-for属性的标签中的内容进行模版变量的识别的时候若发现不了script部分return的变量则会查找自身定义的内容中的变量 
      此处例如person、list，同时还需要注意的是：在v-for中定义的变量的查找优先级大于script标签中return的变量;
      同时需要注意的是由于是批量进行标签的创建所以不能忘记加上key进行标签的唯一标识的设置(默认情况下遍历的索引值为key值),所谓
      的索引值即为在该类似foreach方法的使用的情况之下的(index,item)形参中的index的情况类似
      -->

      <!-- 针对上述的被遍历的数组进行描述：可以是值，表示for执行的次数，但是person值则无意义(null) -->
    </ul>
</div>
</template>

<script lang="ts" setup name="person">
  import { withDefaults,defineProps } from 'vue';
  import { type persons } from './types'
  //该引入的方法用于获取枝文件传递过来的参数--使用方式为方法名()形参为数组类型(必须)，并且数组的每个元素表示的是传递过来的每一个参数、没有顺序之分
  //defineProps(['a']);//针对该方法的使用的实际效果进行解析：首先由于setup语法糖的原因则会自动将内容返回给对应位置的变量(模版字符串的形式)
  //但是本质为使用了该方法后则自动向a这个模版中赋值，并且值的具体内容由外部设置的值决定，实际上并没有新的a变量的创建并返回的发生
  // 演示：
  //接收a
  // defineProps(['a']);
  // console.log(a);//故报错

  //若从此刻开始外部组件添加上了a这个键名的键值对
  //接收a和list，同时将props保存起来
  // let x = defineProps(['a','list']);
  // console.log(x);//{对象内容的键值对}，具体含义为根据枝文件提供的键值对进行x中的对象的键值对的赋值
  // console.log(x.a);//哈哈

  //接受list + 限制接收到且仅接收到的list类型--此操作可用于判断枝文件是否成功进行对应内容的传递 + 将props保存起来
  // let x = defineProps<{list:persons}>();
  // console.log(x);

  //接收list + 限制接收到且仅接收到的list类型 + 限制必要性(也就是判断指定的键值对的属性名是否从枝文件的属性添加处接受成功,默认值为完全限制)
  // + 指定默认值
  let x = withDefaults(defineProps<{list?:persons}>(),{
    list:()=>[{id:"ausydgyu01",name:"康师傅-王麻子-特仑苏",age:19}]
  });//加上了?则可有可无
  console.log(x);
  //对指定默认值单独情况进行分析：
  //首先引入withDefaults函数对defineProps作为第一个形参进行包裹，并且在第二个形参位上书写设置的默认值(即传递进叶子文件的键值对),
  //并且语法规定值以返回值的形式进行呈现，否则会飘红
</script>
<!-- 对上述的defineProps方法的使用中的形参传递为溢出的情况进行分析： 
首先会为x赋值一个键值对为 传递的数组元素名:undefined
-->

<!-- 对接受list + 限制接收到的list类型的情况进行分析：
正常为defineProps([index1,index2...]);
但此处为defineProps<{list:persons}>();
首先在=右方使用<>泛型表示的是对definProps方法的执行时的形参进行约束(若放在=左边则表示的是对defineProps的返回值进行约束)
并且形参必须只能为list:数组值的这个形式的属性名作为形参。
-->

<!-- 对各个阶段的判断格式进行解析：
首先是在叶子文件中使用了defineProps对指定的内容进行过滤获取，其次在=右方使用了泛式对形参进行控制，其次在枝文件中使用
接口的方式对设置的数组的对象的格式进行规范检查
-->
