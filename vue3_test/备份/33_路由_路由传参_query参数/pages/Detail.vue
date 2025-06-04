<template>
  <ul class="news-list">
    <li>编号：{{query.id}}</li>
    <li>标题：{{query.title}}</li>
    <li>内容：{{query.content}}</li>
    <!-- 此处利用vue3的性质直接将自动返回的route对象变量中的query属性进行使用 -->
  </ul>
</template>

<script setup lang="ts" name="Detail"> 
  import { useRoute } from 'vue-router';//此处进行useRoute方法的hook(所谓的hook也就是通过名称进行明确的包(变量或者方法))引入，用于将获取到路由方法进行使用
  import { toRefs } from 'vue';

  //使用获取路由参数的方法(返回值为对象类型)
  let route = useRoute();
  console.log(route);//为对象(Proxy)的形式，其中query属性存放的内容即为当前url中的查询字符串的内容(以键值对的形式进行呈现)
  //需要注意的是上述使用useRoute方法获取到的url中的路由信息对象的值为单纯的非响应式的值，则会导致每次虽然route本身的
  //内容确实发生了动态的修改，但是由于自身不为响应式的数据，则不会将当前文件下的template标签中的对应的模板的内容修改.

  let {query} = toRefs(route);//需要注意的是本身route是具有响应式的(Proxy)，但是针对一个Proxy响应式对象而言，其中的属性单独而言是不具有响应式的,
  //，而此处使用了{}解构赋值的方式将Proxy对象中的某个属性进行单独获取(由于单独不具有响应式，故此处使用toRefs方法进行转换)
</script>

<style>
  .new-list {
    list-style: none;
    padding-left: 20px;
  }
  .news-list>li {
    line-height: 30px;
  }
</style>

<!--
1、后续对template标签中的值的响应性进行判断，同时对toRefs方法进行回顾:
首先如果不使用toRefs方法对query的值进行响应式化，但是由于useRoute方法的执行(假设每次执行的时候url已经发生了改变),会导致
query本质上是可以获取到发生改变的值的，但是只是在呈现的时候会进行动态值的赋值，但是当组件挂载后，则在组件中进行一系列的操纵
就会因为不是响应式的值进行修改了，故如果需要对当前组件中设置的query相关的值进行响应化操作，则需要使用toRefs对原先的route响应式
对象的属性响应化操作


2、同时将每一次组件的却换都导致当前文件的内容的执行的原因进行解释:
每次在占位标签中进行组件的切换，由于正常在setup语法糖中设置的非生命周期函数包裹的部分都是默认在setup()这个创建组件的生命周期中的，所以是最优先执行的内容，之后当创建中的内容执行完毕之后才会开始挂载
-->

<!-- 注意切换挂载发生的一系列变化的顺序是：
首先切换是由含RouteView(或者说是RouteLink)标签的vue文件中开始触发的，并且RouteLink标签本身作为触发路由切换(挂载切换)的按钮
存在，当触发的时候，则首先发生url内容的单纯修改，而后使得RouteView开始寻找对应路由的组件的内容，就开始向main.ts文件中连通上的
路由器(router)中的路由进行查找，找到后则首先执行对应组件(vue文件)的创建生命周期，也就是其中的setup语法糖部分的内容会被首先的执行，
而后执行挂载，将整个创建完毕的组件挂载到寻求组件的RouteView身上，最终完成挂载的切换
-->

<!-- 补充说明：
【toRefs 与 toRef】
作用：将一个响应式对象中的每一个属性，转换为ref对象。 -->
