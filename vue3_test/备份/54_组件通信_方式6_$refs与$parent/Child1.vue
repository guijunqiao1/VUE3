<template>
  <div class="child1">
    <h3>子组件1</h3>
		<h4>玩具：{{ toy }}</h4>
		<h4>书籍：{{ book }}本</h4>
		<button @click="mines($parent)">干掉父亲的一套房产</button>
		<!-- 上述的$parent需要注意的是，$refs为获取到的所有的组件的集合(对象的形式)，而$parent则是被引用到的组件标签的本身,
		而后者在使用的时候进行标签对象集合获取的前提是要组件标签的明确的使用(比如：<Child1/><Child2/>)同时执行ref值的赋取,
		需要注意的是这个值的赋取的作用不仅在于为组件标签本身的值进行“响应化(RefObject)”，同时还为集合对象的明确的组件进行索引依据的提供;
		$parent则直接就是标签对象的获取，则不需要使用上组件标签以及ref属性进行组件标签的明确的指定以及响应化(parent自带响应化,但是组件对象被响应化的类型为Proxy) -->
  </div>
</template>

<script setup lang="ts" name="Child1">
	import { ref } from 'vue';
	import { defineExpose } from 'vue';
	//数据
	let toy = ref("奥特曼");
	let book = ref(3);
	//把数据交给外部
	defineExpose({toy,book});
	//方法
	function mines(value:any){
		value.house--;
		// 此为子向父传递信息,因为=前方为父内容
	}
</script>

<style scoped>
	.child1{
		margin-top: 20px;
		background-color: skyblue;
		padding: 20px;
		border-radius: 10px;
    box-shadow: 0 0 10px black;
	}
</style>