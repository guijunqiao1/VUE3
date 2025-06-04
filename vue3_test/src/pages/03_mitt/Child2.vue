<template>
  <div class="child2">
    <h3>子组件2</h3>
		<h4>电脑：{{computer}}</h4>
		<h4>哥哥给的玩具：{{toy}}</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
	import {ref,onUnmounted} from "vue";
	import emitter from "../../utils/emitter";
	//数据
	let computer = ref("联想");
	let toy = ref("");
	//给emitter绑定send-toy事件--此时send-toy被放置到了emitter.ts中
	emitter.on("send-toy",(value)=>{
		console.log("send-toy");
	});
	//在当前组件被卸载的时候将send-toy方法从emitter.ts中进行撤销
	onUnmounted(()=>{
		emitter.off("send-toy");
	});

</script>

<style scoped>
	.child2{
		margin-top: 50px;
		background-color: orange;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>