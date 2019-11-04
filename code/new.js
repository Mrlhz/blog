/**
 * `new 运算符`
 * `1. 创建一个空的简单JavaScript对象（即{}）`
 * `2. 链接该对象（即设置该对象的构造函数）到另一个对象`
 * `3. 将步骤1新创建的对象作为this的上下文`
 * `4. 如果该函数没有返回对象，则返回this`
 */


function new2() {
  const constructor = [].shift.call(arguments)
  // [1]
  const obj = Object.create({}) // {}
  // [2]
  obj.__proto__ = constructor.prototype
  // Object.setPrototypeOf(obj, constructor.prototype)
  // [3]
  const res = constructor.apply(obj, arguments)
  // [4]
  return res instanceof Object ? res : obj
}


function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
  return { name: '返回对象' }
}

let car1 = new Car('Eagle', 'Talon TSi', 1993) // { make: 'Eagle', model: 'Talon TSi', year: 1993 }

let car2 = new2(Car, 'Eagle', 'Talon TSi', 1993)

console.log(car1)
console.log('--')
console.log(car2)

{
  function create() {
    let args = [].slice.call(arguments)
    const constructor = args.shift()
  
    const obj = Object.create({}) // 1
  
    Object.setPrototypeOf(obj, constructor.prototype) // 2
    console.log(args, constructor);
  
    const res = constructor.call(obj, ...args) // 3
  
    return res instanceof Object ? res : obj // 4 ?
  }
  
  function Car(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
    // return { name: '返回对象' }
  }
  
  let car2 = create(Car, 'Eagle', 'Talon TSi', 1993)
  console.log(car2)
}


// 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new'
// 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf'
