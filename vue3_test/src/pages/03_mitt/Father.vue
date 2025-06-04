<template>
  <div class="father">
    <h3>父组件</h3>
    <Child1/>
    <Child2/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child1 from './Child1.vue'
  import Child2 from './Child2.vue'
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
    border-radius: 10px;
	}
  .father button{
    margin-left: 5px;
  }
</style>

<!-- 本节的mitt相关的内容之所以可以实现任意组件的通信的原因在于：
首先使用到了utils文件夹中的emitter文件作为事件对象的封装库，将mitt构造方法进行实例化得到的emitter身上捆绑上了一系列的事件，
最终在文件的末尾使用export将emitter对象进行暴露，并且其它文件(比如假设一个1号文件)可以直接import进行emitter对象的引入，并且
可以在引入的文件中直接使用该对象的绑定事件的语句进行和当前文件相关数据的事件(方法)内容的设计;而其它需要接收到当前文件信息的文件
则首先同样需要引入emitter对象，并且在对应的需求标签上使用@标志进行emitter中的事件方法的调用(格式为@click(以click举例)=
"emitter.emit(事件名,实参)"--解释说明:emitter.emit为emitter中事件调用的语法)--此处为仅进行数据的使用的emitter的使用演示 -->

<!-- 注意和之前学过的数据共享库pinia中的store文件夹下的ts文件进行区别，先前的pinia的store库对象是提前进行state数据封装完毕的
对象内容，无法动态地将组件当时的状态的变量即时地传递给另一个组件中，也就是说pinia的store库对象中的共享的数据的内容是提前设置好了的，
而此处的mitt方法则可直接地将动态的数据进行存储并传递 -->