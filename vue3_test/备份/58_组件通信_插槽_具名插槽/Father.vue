<template>
  <h3>父组件</h3>
  <div class="content">
    <Category>
      <template v-slot:s1>
        <h2>热门游戏列表</h2>
      </template>
      <template v-slot:s11>
        <ul><li v-for=" item in gameList ">{{ item.name }}</li><br></ul>
      </template>
    </Category>
    <Category>
      <template v-slot:s2>
        <h2>今日美食城市</h2>
      </template>
      <template v-slot:s22>
        <img :src="imgUrl" alt="城市图片">
      </template>
    </Category>
    <Category>
      <template v-slot:s3>
        <h2>今日影视推荐</h2>
      </template>
      <template v-slot:s33>
        <video :src="videoUrl"></video>
      </template>
    </Category>
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

<!-- 一个template中的slot只能对应一个组件标签中的一个插槽(slot)必要条件 -->

<!-- 同时针对template标签中的v-slot键值对的写法进行补充；
首先在组件文件中的slot标签的name属性值为字符串类型在此处的v-slot中是非字符串的值，
同时v-slot的键值对可以简写为:#值(name属性值)的形式 -->