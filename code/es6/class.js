/**
 * @see
 */
function Person() {
  this.type = '人类'
}

Person.prototype.say = function () {
  console.log('say')
}

let person = new Person()

// 每个对象都有一个 __proto__ 指向所属类的原型
// 每个原型会有一个constructor 指向所属类

console.log(person.constructor === Person)
console.log(Person.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) // null
console.log(Person.__proto__ === Function.prototype)
console.log(Function.__proto__ === Function.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype) // true


function Student() {
  Person.call(this)
}

// 1.
// Student.prototype.__proto__ = Person.prototype

// 2.
// Object.setPrototypeOf(Student.prototype, Person.prototype)

// 3.
Student.prototype = Object.create(Person.prototype, {
  constructor: {
    value: Student
  }
})

let student = new Student()
console.log(student)