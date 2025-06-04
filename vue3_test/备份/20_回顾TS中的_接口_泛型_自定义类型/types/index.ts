//首先该文件的作用：其名为index.ts则在外部文件引入当前文件时不需要声明最终的文件名称则会自动引入(index默认被首先引入)
//同时在此演示ts相关的内容回顾

//定义一个接口用于限制person对象的具体属性
export interface PersonInter {
  id:string,
  name:string,
  age:number
};
//对上述接口设置的语句进行描述：
//首先使用了interface的关键字用于表明当前设置的内容为接口类型的内容，其中的内容表明设置的规范，和Node.js中的mongoose中的
//数据库模型文件的设置有异曲同工之妙,用于规范外部引入文件设置以引入的接口模版作为规范进行内容设置
export const a = 1;
//注意上述暴露的内容中的PersonInter这个接口规范和a这个变量之间的区别：若在其他文件中使用import {a} from 当前路径的方式
//引入的是a，则不会飘红，反之会飘红;则此时使用import {type PersonInter} from 当前路径的方式进行替代，则可将接口类型的东西
//引入

//一个自定义类型(接口)
export type Persons = Array<PersonInter>;//首先type为ts文件中自定义类型的设置的关键字,此处则将Persons赋值为
//对数组中的每一个元素进行PersonInter的模版规范进行检查的接口

//注意此处暴露数据使用的关键字是export，对每一份数据使用该关键字的本意为批量暴露