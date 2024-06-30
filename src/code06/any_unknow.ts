//any 任意类型
//unknown 不知道什么类型

import { log } from "console"

// 这两个都属于顶级类型，这两个类型包含了所有的类型

// 1、topType 顶级类型  any unknown
// 2、Object 
// 3、Number String Boolean
// 4、number string boolean
// 5、1 '字符串' false
// 6、never



// unknown 只能赋值给自身或者any类型
let a:unknown = 1
let b:number = 2
let c:any = 3
a = b
c = a
// b = a //报错



// unknown 和 any 的比较
let obj1:unknown = {
    name:'王某人十二点必睡觉',
    age:10
}
let obj2:any = {
    name:'王某人十二点必睡觉',
    age:10
}
// console.log(obj1.name);  //报错  无法访问unknown对象上的属性和方法
console.log(obj2.name)   //可以访问到
// 结论：unknown 比 any  更加安全

