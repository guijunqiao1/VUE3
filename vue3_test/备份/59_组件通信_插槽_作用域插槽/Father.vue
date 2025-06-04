<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Game>
        <template v-slot:s1="{youxi}">
          <ul><li v-for="item in youxi" :key="item.id">{{ item.name }}</li></ul>
        </template>
      </Game>
      <Game>
        <template v-slot:s2="{youxi}">
          <ol><li v-for="item in youxi" :key="item.id">{{ item.name }}</li></ol>
        </template>
      </Game>
      <Game>
        <template v-slot:s3="{youxi}">
          <h2 v-for="item in youxi" :key="item.id">{{ item.name }}</h2>
        </template>
      </Game>

      <!-- 需要注意的是上述的三对<Game></Game>的书写如果和并为一对<Game></Game>则表示的含义是只对组件内容进行一次引用，
      也就是最终在当前的div.content身上只有一个子组件中的div.game，并且在嵌入了子组件之后会将template中对应的子组件中slot插槽
      进行对应位置的内容填充并回调放置，多次使用以此类推 -->

    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Game from './Game.vue';
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


<!-- //同时需要注意插槽的方式实现通信的原理在于本质其实还是利用了类似Props的组件标签作为介质的方式进行父标签的信息直接传递给子元素的操作，
如果子元素需要传递信息给父元素，则是无法单纯通过标签的嵌入直接进行函数的传递的，也就无法将父组件中的内容通过一次slot的架构完成反向的信息传递，
若想要则需要重新搭建架构(同时需要注意的是该单向的信息传递的方式不局限于父子组件之间，任意组件之间都可以) -->

<!-- 若需要实现插槽的使用的子传父，则需要使用到作用域插槽 -->

<!-- 需要注意的是在上方的成型的代码中：如果将子组件中的slot设置为一个，那么如果当前文件中的template插口都指向了这个插槽则执行的效果和当前的
状态是一样的，需要理解其原理:插槽的本质是决定插口内容的位置以及是否进行呈现的(同一个插口多个插槽匹配成功则将插头的内容依次添加到对应的“每一个”插口的位置上并且完成最终内容呈递到父组件中的效果) -->