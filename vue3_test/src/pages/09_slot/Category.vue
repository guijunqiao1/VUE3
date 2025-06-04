<template>
  <div class="game">
    <h2>游戏列表</h2>
    <slot :youxi="games" name="s1"></slot>
    <!-- 此处的:games=games的操作的含义是将当前组件中的games变量传递(props的方式)给匹配上当前插槽的整个template标签中的v-slot属性的parmas参数对象中 -->
    <!-- 该组件传递的信息在对应的template标签的v-slot属性接收到的params参数对象中，同时也反映了一个子组件中的slot对应一个父组件中的一个template标签 -->
    <slot :youxi="games" name="s2"></slot>
    <slot :youxi="games" name="s3"></slot>
  </div>
</template>

<script lang="ts" name="Game" setup>
  import { reactive } from 'vue';
  //数据
  let games = reactive([
    {id:"klajwdlkalj01",name:"英雄联盟"},
    {id:"klajwdlkalj02",name:"王者荣耀"},
    {id:"klajwdlkalj03",name:"红色警戒"},
    {id:"klajwdlkalj04",name:"斗罗大陆"}
  ])
</script>

<style>
.game {
  background-color: skyblue;
  height: 300px;
  width: 200px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
h2 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
</style>

<!-- 在进行实验的过程中得出结论：
在同时匹配的情况下：对于Game多并且slot少的话，则是多个div.game中少量的template的内容执行；
反之，对于Game少并且slot多的话，则是少量的div.game中大量(多次)的template的内容执行 -->

<!-- //根据上述的结论可以推的出：对于一个插头(组件双标签中的template标签)对应上子组件的多个插槽(slot)的话则在父组件的这个位置上的div.game中会有多个插口内容的执行； -->