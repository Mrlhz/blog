
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


let p = new Parent('Parent')

let eat = p.eat.bind(p) 
// let eat = p.eat

console.log(p.__proto__.hasOwnProperty('a'));
eat()