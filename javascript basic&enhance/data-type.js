/**
 *
 */
let a = {
  name: "Julia",
  age: 20
}
/**
 * 传进来的o只是对象a在内存中地址值
 */
function change(o) {
  o.age = 24
  // 这里重新将o指向了一个新的对象的地址
  o = {
    name: "Kath",
    age: 30
  }
  // 返回的也是地址值
  return o
}

let b = change(a) //
console.log(b.age) // 30
console.log(a.age) // 24

// typeof对引用类型数据不生效,除了function
console.log(typeof 1234)
console.log(typeof { age: 10 })
console.log(typeof (() => {}))

// 自己实现一个instanceof
function myInstanceof(left, right) {
  if (typeof left !== "object" || left === null) return
  let proto = Object.getPrototypeOf(left)
  while (true) {
    if (proto === null) return false
    if (proto === right.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}

console.log(myInstanceof(new Number(123), Number))
