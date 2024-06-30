export{}
let null1:null = null
let undefined1:undefined = undefined
null1 = undefined1  // 在tsconfig中配置严格模式  严格模式下null和undefined不能互相赋值   不是严格模式的情况下可以  
undefined1 = null1
