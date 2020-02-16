/**
 * @description Class
 * @see http://es6.ruanyifeng.com/#docs/class
 */

{
  class Parent {
    constructor(type) {
      this.type = type
    }
    // e = 'es7' // es7语法
    eat() {
      console.log(this, 'eat')
    }
  
    get a() {
      return 1024
    }
  }
  
  console.log(Parent === Parent.prototype.constructor)
  
  
  let p = new Parent('Parent')
  
  let eat = p.eat.bind(p) 
  // let eat = p.eat
  
  console.log(p.__proto__.hasOwnProperty('a'));
  eat()
}

{
  // 由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。
  // Object.assign方法可以很方便地一次向类添加多个方法。
  class Point {
    constructor(){
      // ...
    }
  }

  // 类的内部所有定义的方法，都是不可枚举的（non-enumerable）
  console.log(Object.keys(Point.prototype))
  // []
  
  Object.assign(Point.prototype, {
    toString(){},
    toValue(){}
  })

  console.log(Object.getOwnPropertyNames(Point.prototype))
  // console.log(Reflect.ownKeys(Point.prototype))
  // [ 'constructor', 'toString', 'toValue' ]
}
