<template>
  <div class="Person">
    ???
  </div>
</template>

<script lang="ts" setup name="person2">
  //对路径中的@符号进行解释说明，表示当前文件的最外层的文件夹(金字塔尖)
  import {type PersonInter,type Persons} from "./types"
  // let person:PersonInter ={name:"张三",age:60,id:"llljjjjjjjjjji"};--此为为一个模版的设置
  
  let personList:Array<PersonInter> =[{name:"张三",age:60,id:"llljjjjjjjjjji"},{name:"张三",age:60,id:"llljjjjjjjjjji"},
  {name:"张三",age:60,id:"llljjjjjjjjjji"}];//此为多个模版的统一设置的形式，首先在模版的声明之前加上了Array的关键字导致
  //此时引入的接口分析的模版规范对象是当前定义的数组的每一项作为对象,并且这种批量规范声明的方式还需要使用<>对规范的模版进行包含
  
  //上述语句和let personList:Persons = [...]等价
</script>

<!--使用外部引入接口模版文件并使用的好处在于：
当内容中的某个属性名书写错误时，也会由于模版的严格要求导致报错飘红，进而发现具体的错误位置。（例如:name写为nmae的情况）
-->
