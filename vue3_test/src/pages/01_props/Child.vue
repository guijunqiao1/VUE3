<template>
  <div class="child">
    <h3>子组件</h3>
		<h4>玩具：{{toy}}</h4>
		<h4>父亲给的车：{{car}}</h4>
		<button @click="sendToy(toy)">把玩具给父亲</button>
  </div>
</template>

<script setup lang="ts" name="Child">
	import {ref} from "vue";
	//数据
	let toy = ref("奥特曼");
	//声明接收props
	const props = defineProps(["car","sendToy"]);
	//方法
</script>

<style scoped>
	.child{
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>

<!-- 需要注意的是vue中的onclick绑定上的函数内容可以是函数名本身，也可以是函数名执行的形式(即传参的形式，如fn(x));都表示触发点击事件的时候执行 -->