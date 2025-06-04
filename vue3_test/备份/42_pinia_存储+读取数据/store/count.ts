//首先进行补充，store文件夹下的文件一般用于存放pinia中共享的实际的内容的文件(库)，并且文件名一般都是和用途相关的

//引入创建pinia库的模块
import {defineStore} from "pinia";
export const useCountStore = defineStore("count",{
  //真正存储数据的地方
  state(){
    return {
      sum:6
    }
  }
})

// 需要注意的是此处的类hook模块的库之所以没使用export+函数的形式进行函数的传递，便于后方进行对应的对象的获取直接使用:
// let {sum} = 当前函数名()的形式进行共享库中的的值的获取即可，是因为defineStore方法的返回值本身就是函数，并且函数的执行内容则和设置的文本内容有关
// 针对这个函数本身的返回值其实也是对象类型，并且有着sum:6的键值对
//并且需要注意的是definStore方法返回值的函数的执行之后的返回值对象并不是普通的对象,而是Proxy对象，其中的$id属性的值为原先defineStore方法的第一个实参的值
//，并且$state属性中其中的sum属性(该属性的内容和直接的sum属性的值是等价的)为RefObject对象的形式，其中的value为6，但是要注意的是在进行对这个获取的时候并不需要使用.value
