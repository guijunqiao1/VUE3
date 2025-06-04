<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>房产：{{ house }}</h4>
		<!-- <button @click="changeToy">把Child1的玩具进行修改</button> -->
		<!-- <button @click="changeComputer">把Child2的电脑进行修改</button> -->
		<!-- <button @click="getAllChild($event)">获取所有的子组件实例对象--也就是组件标签对象</button> -->
		<!-- 上述的$event为点击事件对象，而下方$refs为当前组件中的所有子组件标签的封装对象(形式为{c1:<Child1>信息,c2:<Child2>信息}),也就是{ref值:对应的组件标签对象}的格式 -->
		<button @click="getAllChild($refs)">获取所有的子组件实例对象--也就是组件标签对象</button>
		<button @click="add2($refs)">所有儿子都增加2本书</button>
		<Child1 ref="c1"/>
		<Child2 ref="c2"/>
	</div>
</template>

<script setup lang="ts" name="Father">
  import Child1 from './Child1.vue';
	import Child2 from './Child2.vue';
	import { ref } from 'vue';
	import { defineExpose } from 'vue';

	//数据
	let house = ref(4);
	// let c1 = ref();//将Child1组件标签对象获取
	// let c2 = ref();//将Child2组件标签对象获取

	//方法--将父组件信息提供给子组件中
	// function changeToy(){
	// 	c1.value.toy = "小猪佩奇";
	// }
	// function changeComputer(){
	// 	c2.value.computer = "华为";
	// }
	function getAllChild(value:any){
		// console.log(value);
		//此处对上述的Proxy响应式对象类型的value变量进行解析:
		// 首先需要知道的是：value本身为Proxy类型的对象，并且c1、c2原先都是RefObject类型的对象(同时还需要知道的是RefObject对象的value中若为对象类型的值的时候则value为Proxy类型的值)，当
		//Proxy对象中嵌套着RefObject类型的对象的时候会将其中的value直接充当c1本身(以c1为例)，也就是原先Proxy,{RefObject c1:{value:Proxy{...}}}的形式变为了Proxy,{Proxy c1:{...}}的形式
		
		//在上述的实验结论的基础上进行结果的引用完成最终的两个方法合并的效果的实现
		value.c1.toy = "小猪佩奇";
		value.c2.computer = "华为";
	}
	function add2(value:any){
		value.c1.book += 2;
		value.c2.book += 2;
		// 上述的函数体内容体现的是父向子通信(传递信息),原因是通过$refs获取到子组件对象的信息，并且进行索引获取到指定的子组件的信息，
		//并且在函数体中可以直接使用上父组件的内容进行内容的设计，并且由于子数据为响应式的，并且=左侧的内容为子组件中的数据，则实际则是父组件的信息传递给子组件
	}

	//将父组件中的房产信息进行暴露
	defineExpose({house});
</script>

<style scoped>
	.father {
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
	.father button {
		margin-bottom: 10px;
		margin-left: 10px;
	}
</style>

<!-- //对$refs、$parent获取到的对象的识别可以理解为当前组件文件引用的子组件、当前组件被引用到的组件这两个概念即可将具体的$refs、$parent的使用
进行明确 -->