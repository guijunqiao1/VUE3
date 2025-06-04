<template>
  <div class="father">
    <h3>父组件</h3>
		<h4>汽车：{{car}}</h4>
		<!-- 下方标签的存在条件为toy不为空 -->
		<h4 v-if="toy">儿子给的玩具：{{toy}}</h4>
		<Child :car="car" :sendToy="getToy"/>
		<!-- 此处向子组件中传递car变量,以及当前父亲方法中定义的获取儿子玩具的方法 -->
  </div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue';
	import {ref} from "vue";
	//数据
	let car = ref("奔驰");
	let toy = ref();
	//方法
	function getToy(value){
		toy.value = value;
}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>