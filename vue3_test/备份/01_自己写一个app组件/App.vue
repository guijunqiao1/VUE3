<!-- 一个.vue文件中需要写上三种标签（template(写html结构)、script(脚本标签，写js代码或ts代码)、style(写样式)） -->
<template>
  <!-- html（组件结构） -->
  <div class="app">
    <span>你好啊</span>
  </div>
</template>

<script lang="ts">//设置script标签的lang属性为ts表明当前的script标签中编写的是TS代码--注意只是提示，并不是绝对的规范，也可以在当前的情况下在script中编写上JS代码
  //JS或TS
  export default{//该方法(export)和Node.js中的module.export有相似之处,但是区别在于此处的export并不需要使用=进行赋值并且
    // .vue文件并不需要使用require进行外部文件的内容的引入,同时该方法中的export default的结构则表明默认传递的组件的名称的为App
    name:"App" //组件名
  } 
</script>

<style>
  /* 样式（组件样式） */
  .app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    width: 50px;
    height: 50px;
  }
</style>

<!-- 在.vue文件中需要注意的是：最终结果是将所有内容整合成一个 export default {} 的对象，
 则在编写完上面的代码之后，程序会将当前的组件对象进行信息的补充则整体最终呈现出来的结构应该是：
 export default {
  name: "App",             // 从 <script> 部分提取
  render: function () {    // 模板编译生成的渲染函数
    return h('div', { class: 'app' }, [
      h('h1', null, '你好啊')
    ]);
  },
  styles: [/* 样式信息 */] // 样式会以 scoped 等方式处理
};
 -->