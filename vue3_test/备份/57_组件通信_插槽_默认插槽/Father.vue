<template>
  <h3>父组件</h3>
  <div class="content">
    <Category title="热门游戏列表" :games="gameList">
      <ul><li v-for=" item in gameList ">{{ item.name }}</li><br></ul>
    </Category>
    <Category title="今日美食城市" :imgUrl="imgUrl">
      <img :src="imgUrl" alt="城市图片">
    </Category>
    <Category title="今日影视推荐" :videoUrl="videoUrl">
      <video :src="imgUrl"></video>
    </Category>
    <!-- 需要注意的是上述为同一个组件的三次引用方式，并且传递的信息的载体属性名相同但是内容不同，
    在对应的组件文件中接受到的对应的title的内容也会不同 -->
  </div>
</template>

<script setup lang="ts" name="Father">
  import Category from './Category.vue';
  import { reactive } from 'vue';
  //数据
  let gameList = reactive([
    {name:"英雄联盟"},
    {name:"王者荣耀"},
    {name:"红色警戒"},
    {name:"斗罗大陆"}
  ]);
  //下方的数据仅用于提供上单纯的视频资源地址以及图片的资源地址，不需要响应化
  let videoUrl = "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4";
  let imgUrl = "https://z1.ax1x.com/2023/11/19/piNxLo4.jpg";
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
.content {
  display: flex;
  justify-content: space-evenly;
}
img,video {
    width: 100%;
}
</style>

<!-- //需要注意的是： -->
<!-- 单标签的写法的/在标签名的后方，双标签的尾标签的/是在标签名的前方的； -->
<!-- 同时如果使用了组件标签进行双标签的使用的话，若其中包含内容，则在对应的组件文件中的slot双标签中的位置会被替代为当前的
组件标签包裹的内容 -->
<!-- 并且slot标签中的内容为当双标签中没有内容的时候的默认填充的内容 -->
