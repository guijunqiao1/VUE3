<template>
	<div class="child">
		<h3>子组件</h3>
		<h4>其他：{{ $attrs }}</h4>
		<GrandChild v-bind="$attrs"/>
		<!-- 对上述的v-bind属性的使用进行解析：首先在父组件中提到过：v-bind="{a:100,b:120}"的形式可以被拆解为::a="100" :b="120"的形式，又因为在
		父组件中的开发者工具下的Props目录和attrs目录下的内容本质都是单纯的数据键值对形式的对象，则上述的本质为v-bind="{..attrs中的键值对的内容}" -->
	</div>
</template>

<script setup lang="ts" name="Child">
	import GrandChild from './GrandChild.vue'
</script>

<style scoped>
	.child{
		margin-top: 20px;
		background-color: skyblue;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
</style>

<!-- //上述$attrs的内容是只要引入了当前的Child组件并且进行组件变量的传递的统一的内容,并且在子组件中进行使用的时候也只能是在template区域进行使用 -->