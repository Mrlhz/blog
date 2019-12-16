/**
 * @see
 */
function Animal() {
  this.type = '哺乳类'
  this.age = 20
}

Animal.prototype.say = function () {
  console.log('say')
}

let animal = new Animal()

// 每个对象都有一个 __proto__ 指向所属类的原型
// 每个原型会有一个constructor 指向所属类

console.log(animal.constructor === Animal)
console.log(Animal.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)
console.log(Animal.__proto__ === Function.prototype)
console.log(Function.__proto__ === Function.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype) // true


function Dog() {
  Animal.call(this)
}

// 1.
// Dog.prototype.__proto__ = Animal.prototype

// 2.
// Object.setPrototypeOf(Dog.prototype, Animal.prototype)

// 3.
Dog.prototype = Object.create(Animal.prototype, {
  constructor: {
    value: Dog
  }
})

let dog = new Dog()
console.log(dog)