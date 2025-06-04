首先此处提到的to为：App.vue文件中的
<template>
  <div class="app">
    <h2 class="title">Vue路由测试</h2>
    <!-- 导航区 -->
     <div class="navigate">
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <RouterLink to="/news">新闻</RouterLink>
      <RouterLink to="/about">关于</RouterLink>
     </div>
     <!-- 展示区 -->
     <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

部分中的RouterLink标签中的to属性,用于表示路由跳转的位置,完全替代a标签的超链接的功能，而此处所描述的to的另外一种书写的格式则为(以第三条RouterLink标签语句为例)：
<RouterLink :to="{path:"/about"}">关于</RouterLink>--补充说明：RouterLink为超链接的路由类型的标签，用于直接联系路由标签之间的关系(比如样式关系:active-class)