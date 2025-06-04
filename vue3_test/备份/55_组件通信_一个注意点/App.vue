<!-- 注意点：当访问obj.c的时候，底层会自动读取value属性，因为c是在obj这个响应式对象中的(并且读取的内容的类型和外层的响应式对象的类型一致) -->
<!-- //演示内容：
let obj = reactive({
  a:1,
  b:2,
  c:ref(3)
})
let x = ref(4);

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
console.log(x); -->