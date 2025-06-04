//接口暴露
export interface personInter{
  name:string,
  id:string,
  age:number
  x?:number
}//注意上述使用了ts中特定的关键字符号'?',表示的含义是x这个属性可有可无(和数据库模版中设置require:false同理),其他没加上?
//符号的则对应上require:true

//自定义接口
export type persons = Array<personInter>;
//针对上述的自定义接口的写法的另一种写法为：
// export type persons = PersonInter[];
