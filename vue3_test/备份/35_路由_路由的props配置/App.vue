//首先此处对之前学过的props进行总结，便于当前学的路由的props进行一系列的对比，首先先前的props是主要体现在defineProps方法的使用上面
，首先，如果枝文件使用了</Person>这种一般组件的形式进行属性赋值般的参数传递(即</Person a="哈哈">)，如果在组件文件中需要使用该a属性则
需要使用defineProps方法进行参数的指定，方可完成传递，并且执行该方法之后的a参数会自动的返回给templatebufen(setup语法糖)