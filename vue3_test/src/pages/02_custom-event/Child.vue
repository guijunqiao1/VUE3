<template>
  <div class="child">
    <h3>子组件</h3>
		<h4>玩具：{{toy}}</h4>
		<!-- "Emits('abc', 666); Emits('def'); Emits('ghi')"的格式用于执行多个自定义事件函数 -->
		<button @click="Emits('send-toy',toy)">向父组件中发送玩具</button>
  </div>
</template>

<script setup lang="ts" name="Child">
	import { ref } from 'vue';
	//此处引入的是用于将外部组件中传递过来的方法进行声明的方法(defineEmits)--本质和PropsAPI中的defineProps方法类似(但是该方法专门用于将传递过来的自定义函数进行指定获取(接收))
	import { defineEmits } from 'vue';

	//数据
	let toy = ref("奥特曼");
	//将父组件传递过来的自定义函数进行指定声明用于获取
	const Emits = defineEmits(['send-toy']);//注意和defineProps方法的使用格式类似：const Props = defineProps(['a:a.value'])，都需要使用变量接收到获取的对象中的键值对进行间接的索引获取父组件中传递过来的值
	//但是该方法获取到的值的类型为函数对象的类型，并且在调用的时候需要第一个形参用于接收确定的自定义事件，之后的形参用于传递实参
</script>

<style scoped>
	.child{
		margin-top: 10px;
		background-color: rgb(76, 209, 76);
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>


<!-- 
自定义事件：主要用于子传父，首先自定义事件本身能够进行组件的通信的原因在于首先父组件中定义的自定义事件传递给子组件的时候，子组件本身传递过来的参数(实参)可以在父组件中进行实际的执行--
即虽然触发函数的执行的地方是子组件中，但是实际执行的时候是需要进入到父组件中的自定义事件的函数体中的
-->

<!-- 此处对自定义事件中的$event和原生事件中的$event进行区分：
前者为使用defineEmits方法返回值的Emits函数传递的形参(使用的形式为Emits(具体调用的组件方法名,传递的实参(此处的实参最终会被映射到$event上))) -->