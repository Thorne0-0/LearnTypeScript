// object, Object, {}

// Object  包含所有类型
let a1:Object = 1
let a2:Object = '1'
let a3:Object = []
let a4:Object = {}
let a5:Object = ():number=>{
    return 1
}

// object 常用于泛型约束 不能用于原始类型
let b1:object = 1 //报错 原始类型
let b2:object = '1' //报错 原始类型
let b3:object = false //报错 原始类型
let b4:object = {} //正确
let b5:object = [] //正确
let b6:object = ():number =>{
    return 1
} //正确


// {} 可以理解成 new Object   其实和第一个Object是一样的
let c1:Object = 1
let c2:Object = '1'
let c3:Object = []
let c4:Object = {}
let c5:Object = ():number=>{
    return 1
}


// ！！！补充：
// 对象类型无法修改
let c6:object = {name:1}
c6.name = 2 //报错
c6.age = 2 //报错
