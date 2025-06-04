<template>
  <div class="child1">
    <h3>子组件1</h3>
		<h4>玩具：{{toy}}</h4>
		<!-- 此处调用emitter.ts中创建的事件--send-toy事件,同时由于是@click进行准确的实参函数的传递故需要使用第二个形参表示该指定的事件的内容中对应的实参 -->
		<button @click="emitter.emit('send-toy',toy)">玩具给弟弟玩一玩</button>
		<!-- 注意此处的emitter.emit()和上一节的defineEmits().emit的区别，上一节为组件传递过来的方法的获取的接收，而此处则为emitter.ts文件中充当库的应用-->
  </div>
</template>

<script setup lang="ts" name="Child1">
	import {ref} from "vue";
	import emitter from "../../utils/emitter";
	//数据
	let toy = ref("奥特曼");

</script>

<style scoped>
	.child1{
		margin-top: 50px;
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
	.child1 button{
		margin-right: 10px;
	}
</style>