import {customRef} from "vue";

export const usemsgref = function(initValue:string,delayTime:number){
  //使用Vue提供的默认customRef定义响应式数据

  //初始化定时器变量
  let timer;
  //track：跟踪；trigger：触发
  let msg = customRef((track,trigger)=>{
    return {
      // get何时调用--msg被读取时
      get(){
        track(); //告诉Vue，msg数据很重要，你要对msg进行持续关注，也就是正常默认的ref方法中当数据修改之后之所以能够真正达到“响应式”的原因在于默认设置了该方法的调用，一旦msg变化，就发生template中的msg的更新,也就是该方法的执行是决定响应式产生的原因
        return initValue;//需要注意的是不论是computed方法中的get方法还是customRef方法中的get方法返回的值都是value内容为return内容的RefObject类型的对象
      },
      // set何时调用--msg被修改时
      set(value){
        clearTimeout(timer);
        timer = setTimeout(()=>{
          initValue = value;
          trigger(); //告诉一下Vue，msg数据发生了修改，之后才会进入到get中的track函数中进行数据跟踪以及对应内容的返回(即修改msg)；
          // 首先由于set函数本身比较敏感，所以不需要使用trigger语句提示修改，而对于get中的track方法提示程序系统msg在template标签中的响应式修改提示
        },delayTime)
        // 上述set部分中的效果的实现使用的定时器函数的作用用于实现当msg被修改的之后的2s后再提示程序系统进行msg的响应式修改
      }
    }
  });
  return msg;
}


// <!-- 将上述的get方法和set方法的使用和之前的学过的computed计算属性进行归纳：
// 首先get内容是在computed被赋值变量被调用的时候执行并返回赋值的，set方法则是在当接受computed方法返回值的变量发生主动改变的时候执行的;
// 并且set方法的形参位置的内容则为修改前的:捕捉到的修改的内容，还没修改成功--不懂就去回顾computed方法的使用中的set方法的形参位置的内容的解释即可 -->

// 需要注意的是msg本身为一个绑定上了各种隐式方法(其中部分方法的内容决定了msg具备响应式)的对象