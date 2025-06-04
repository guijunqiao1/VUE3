<!-- <template> -->
  <!-- <div class="father"> -->
    <!-- <h3>父组件</h3> -->
		<!-- 下方的绑定事件的方法的实参中的$event表示的是点击事件对象(DOM)本身 -->
		<!-- <button @click=" str = `${$event}` ">点我</button> -->
		<!-- 需要注意的是onclick绑定的事件可以直接就是函数体的内容(当内容只有一行的时候) -->
		<!-- <Child/> -->
  <!-- </div> -->
<!-- </template> -->

<!-- <script setup lang="ts" name="Father"> -->
	<!-- // import Child from './Child.vue';
	// import { ref } from 'vue';
	//数据
	// let str = ref("你好");
	//方法
	// function test(value,event){
	// 	str.value = "哈哈";
	// } -->


<!-- </script> -->

<!-- 上述内容为对应细节知识点铺垫的演示，下方为正常的通信方式自定义事件方法的演示： -->
<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>儿子给的玩具：{{toy}}</h4>
		<Child @send-toy="saveToy"/>
	</div>
</template>

<script lang="ts" setup name="Father">
	import Child from './Child.vue';
	import {ref} from "vue";

	//数据
	let toy = ref("");

	//方法--用于保存传递过来的玩具
	function saveToy(value:string){
		console.log("执行了自定义函数",value);
		toy.value = value;
	}

</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
    border-radius: 10px;
	}
	.father button{
		margin-right: 5px;
	}
</style>

<!-- 需要注意的是自定义事件本身的执行的函数体内容是依据传递的源头 -->