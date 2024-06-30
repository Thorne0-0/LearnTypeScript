export{}
// interface 同名会重合
interface Type1 {
    name:string
    age:number
}
interface Type1 {
    color:string
}

let wzwObj1:Type1 = {
    name:'王某人',
    age:10,
    color:'red'
}


// interface 任意key   这种方法叫 索引签名
interface Type2 {
    name:string
    age:number
    color:string
    [propName:string]:any
}
let wzwObj2:Type2 = {
    name:'王某人',
    age:10,
    color:'red',
    a:1,
    b:'2',
    c:3
}

// interface ?和readonly 
interface Type3 {
    name:string
    age:number
    color?:string
    readonly fn?:()=>number
}
let wzwObj3:Type3 = { 
    name:'王某人',
    age:10,
    color:'red',
    fn:()=>{return 1}
}
let wzwObj3_1:Type3 = {
    name:'王某人',
    age:10,
}
wzwObj3.fn()
// wzwObj3.fn = ()=>{return 2}  //报错 因为加了readonly 所以是只读属性
// 一般后端返回的id是不可修改的  也可以设置为readonly


// interface 接口继承 
interface Type4 extends Type4_1{ //其实就是把Type4_1 加到Type4里
    name:string
    age:number
}
interface Type4_1 {
    color:string
}

let wzwObj4:Type4 = {
    name:'王某人',
    age:10,
    color:'red'
}

// interface 定义函数类型
interface Fn1 {
    (name:string):number[]
}
const fn1:Fn1 = (name:string) =>{
    return [1]
}
fn1('abc')


// 不能多属性也不能少属性

