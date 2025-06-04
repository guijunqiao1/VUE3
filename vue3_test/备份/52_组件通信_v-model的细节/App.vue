<!-- 上节的父组件中的子组件的方法v-model的信息传递的使用 -->
<AtguiguInput v-model="username"/>
<AtguiguInput :modelvalue="username" @update:modelvalue="username = $event"/>
此处在在子组件AtguiguInput中接受父组件传递过来的变量的时候则需要使用到defineProps方法接受("modelvalue")，因为v-model的
传递的“值”默认的名称是modelvalue，此处若想要修改该名称并且在子组件的defineProps方法中接受的使用的形参名为其他的话则需要使用
下方的格式(当使用v-model直接进行传递的时候，若是本质底层的写法则直接主动进行修改名称就行)(以修改为qwe的名称为例)：
<AtguiguInput v-model:account="username"/>,此后的子组件文件中则使用defineProps(['qwe'])即可,需要注意的是使用上述的修改方法之
后底层的代码则变为<AtguiguInput :account="username" @update:account="username = $event"/>了

//此处若需要使用v-model进行多个父组件的值和子组件中的值进行信息交流的话则需要使用到下方的形式：
<AtguiguInput v-model:account="usernmae" v-model:password="mima"/>
则在最终的子组件中进行传递的变量和方法接收的使用使用:
defineProps(['account','password'])、defineEmits(['update:account','update:password'])的形式，并且在实际对某个标签绑定上
父组件提供的自定义事件的时候的传参则正常进行defineEmits(['...'])("...",(<HTMLInputElement>$event.target).value)的形式进行实参的传递完成
父组件中的信息和子组件的信息进行交流(子组件信息在实参中，父组件信息在自定义事件的函数体中)，并且针对上述的接受到两个值的情况而言的话则
对应的子组件的标签设置方式可以是：<input :account1="account" @input="Emits("update:account",(<HTMLInputElement>$event.target).value)"/> 
和<input :password1="password" @input="Emits("update:password",(<HTMLInputElement>$event.target).value)"/>,分别进行两个线程的父子信息的交流的
同时完成双向绑定