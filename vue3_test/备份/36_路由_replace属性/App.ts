//对replace属性的位置演示和效果的呈现和push属性之间的关系的演示：
// 首先<RouteLink></RouteLink>标签(挂载路由组件的标签)使用:
// <li v-for="(item,index) in newsList" :key="item.id"><RouterLink replace --注意是此处添加上了replace(和input标签中设置checked同理)
//:to="{name:'xiang',params:{id:item.id,title:item.title,content:item.content,}}"></RouterLink></li>

//呈现的效果是当在当前组件的情况下发生了路由的跳转(仅当前组件下的路由组件发生了修改的路由跳转的情况),无法使用退回上一次浏览器记录的页面(含url信息)的退回
//但是如果使用的是push(默认值)则能够正常进行上一页的返回。
// 需要注意的是针对:
// <RouteLink replace></RouteLink>
// <RouteLink></RouteLink>
// <RouteLink replace></RouteLink>
// 这种交叉使用repalce关键字的情况而言，则是针对第一个和第三个组件中的路由组件发生修改的时候无法进行上一页的返回操作,但是对于
// 第二个则能够正常进行路由组件之间的切换进行上一页的返回