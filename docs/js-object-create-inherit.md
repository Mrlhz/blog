# JavaScript创建对象与继承


- [JavaScript深入之创建对象的多种方式以及优缺点](https://github.com/mqyqingfeng/Blog/issues/15)
- [JavaScript深入之继承的多种方式和优缺点](https://github.com/mqyqingfeng/Blog/issues/16)

----

> 工厂模式，使用简单的函数创建对象，为对象添加属性和方法，然后返回对象。这个模式后来被构造函数模式所取代。 

> 构造函数模式，可以创建自定义引用类型，可以像创建内置对象实例一样使用 new 操作符。不过，构造函数模式也有缺点，即它的每个成员都无法得到复用，包括函数。由于函数可以不局限于任何对象（即与对象具有松散耦合的特点） ，因此没有理由不在多个对象间共享函数。 

> 原型模式，使用构造函数的 prototype 属性来指定那些应该共享的属性和方法。组合使用构造函数模式和原型模式时，使用构造函数定义实例属性，而使用原型定义共享的属性和方法。

> 原型式继承，可以在不必预先定义构造函数的情况下实现继承，其本质是执行对给定对象的浅复制。而复制得到的副本还可以得到进一步改造。 

> 寄生式继承，与原型式继承非常相似，也是基于某个对象或某些信息创建一个对象，然后增强对象，最后返回对象。为了解决组合继承模式由于多次调用超类型构造函数而导致的低效率问题，可以将这个模式与组合继承一起使用。

> 寄生组合式继承，集寄生式继承和组合继承的优点与一身，是实现基于类型继承的最有效方式。  


## 创建对象

### 工厂模式

> 工厂模式虽然解决了创建多个相似对象的问题，但却没有解决对象识别的问题（即怎样知道一个对象的类型）

```js
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        console.log(this.name);
    };
    return o;
}
var person1 = createPerson("Nicholas", 29, "Software Engineer");
var person2 = createPerson("Greg", 27, "Doctor");
```

### 构造函数模式

> 与createPerson()不同之处：
- 没有显式地创建对象；
- 直接将属性和方法赋给了 this 对象；
- 没有 return 语句。

> 要创建 Person 的新实例，必须使用 new 操作符。以这种方式调用构造函数实际上会经历以下 4个步骤：
- 创建一个新对象；
- 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象）；
- 执行构造函数中的代码（为这个新对象添加属性）；
- 返回新对象。

> 使用构造函数的主要问题，就是每个方法都要在每个实例上重新创建一遍。

```js
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    };
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
```

### 原型模式

```js
function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
    console.log(this.name);
};
var person1 = new Person();
person1.sayName();   //"Nicholas"
var person2 = new Person();

person2.sayName(); //"Nicholas"
console.log(person1.sayName == person2.sayName);  //true

// person1 和 person2。因为它们内部都有一个指向 Person.prototype 的指针，因此都返回了 true
console.log(Person.prototype.isPrototypeOf(person1)); //true 
console.log(Person.prototype.isPrototypeOf(person2)); //true
```

> ECMAScript 5增加了一个新方法，叫Object.getPrototypeOf()，在所有支持的实现中，这个方法返回`[[Prototype]]`的值。例如：

```js
console.log(Object.getPrototypeOf(person1) == Person.prototype); //true 
console.log(Object.getPrototypeOf(person1).name); //"Nicholas"
```

```js
Object.keys()  
Object.getOwnPropertyNames()


function Person() {}
Person.prototype = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName: function () {
        console.log(this.name);
    }
};

//重设构造函数，只适用于ECMAScript 5兼容的浏览器    
Object.defineProperty(Person.prototype, "constructor", {
    enumerable: false,
    value: Person
});
```

> 原型模式也不是没有缺点。首先，它省略了为构造函数传递初始化参数这一环节，结果所有实例在默认情况下都将取得相同的属性值。虽然这会在某种程度上带来一些不方便，但还不是原型的最大问题。原型模式的最大问题是由其共享的本性所导致的。

### 组合使用构造函数模式和原型模式

```js
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Shelby", "Court"];
}
Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name);
    }
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
person1.friends.push("Van");
console.log(person1.friends);    //"Shelby,Count,Van"
console.log(person2.friends);    //"Shelby,Count"
console.log(person1.friends === person2.friends);  //false
console.log(person1.sayName === person2.sayName);  //true
```

### 动态原型

```js
function Person(name, age, job) {
    // 属性
    this.name = name;
    this.age = age;
    this.job = job;
    // 方法
    if (typeof this.sayName != "function") {
        Person.prototype.sayName = function () {
            console.log(this.name);
        };
    }
}
var friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName();
```

> 通过检查某个应该存在的方法是否有效，来决定是否需要初始化原型

### 寄生构造函数模式

```js
function Person(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        console.log(this.name);
    };
    return o;
}
var friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName();  //"Nicholas"
```


稳妥构造函数模式

```js
function Person(name, age, job) {
    // 创建要返回的对象
    var o = new Object();
    // 可以在这里定义私有变量和函数

    // 添加方法
    o.sayName = function () {
        console.log(name);
    };
    // 返回对象
    return o;
}

var friend = Person("Nicholas", 29, "Software Engineer"); 
friend.sayName();  //"Nicholas" 
```


> 稳妥对象(durable objects)
所谓稳妥对象，指的是没有公共属性，而且其方法也不引用 this 的对象。

稳妥构造函数遵循与寄生构造函数类似的模式，但有两点不同：
- 新创建对象的实例方法不引用this；
- 不使用 new操作符调用构造函数。


## 继承

### 原型链

```js
function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function () {
    return this.property;
};

function SubType() {
    this.subproperty = false;
}

//继承了 SuperType 
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function () {
    return this.subproperty;
};

var instance = new SubType();
console.log(instance.getSuperValue()); //true
```


### 借用构造函数

```js
function SuperType() {
    this.colors = ["red", "blue", "green"];
}

function SubType() {
    //继承了 SuperType 
    SuperType.call(this);
}

var instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors); //"red,blue,green,black" 

var instance2 = new SubType();
console.log(instance2.colors); //"red,blue,green"
```

### 组合继承

> 组合继承是 JavaScript 最常用的继承模式；组合继承最大的问题就是无论什么情况下，都会调用两次超类型构造函数：一次是在创建子类型原型的时候，另一次是在子类型构造函数内部。

```js
function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
};

function SubType(name, age) {
    //继承属性 
    SuperType.call(this, name);     // 第二次调用 SuperType()

    this.age = age;
}

//继承方法 
SubType.prototype = new SuperType();    // //第一次调用 SuperType()
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
    console.log(this.age);
};

var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
console.log(instance1.colors); // "red,blue,green,black"
instance1.sayName(); // "Nicholas"; 
instance1.sayAge(); // 29 

var instance2 = new SubType("Greg", 27);
console.log(instance2.colors); // "red,blue,green" 
instance2.sayName(); // "Greg"; 
instance2.sayAge(); // 27
```

### 原型式继承

```js
// Shape - 父类(superclass)
function Shape() {
  this.x = 0;
  this.y = 0;
}

// 父类的方法
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.', x, y);
};

// Rectangle - 子类(subclass)
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// 子类续承父类
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```

### 寄生式继承

```js
function createAnother(original){ 
    var clone = object(original);  // 通过调用函数创建一个新对象 
    clone.sayHi = function(){      // 以某种方式来增强这个对象 
        console.log("hi"); 
    }; 
    return clone;                  // 返回这个对象 
}

var person = { 
    name: "Nicholas", 
    friends: ["Shelby", "Court", "Van"] 
}; 
 
var anotherPerson = createAnother(person); 
anotherPerson.sayHi(); //"hi" 
```

### 寄生组合式继承

```js
function inheritPrototype(subType, superType){ 
    var prototype = object(superType.prototype);     // 创建对象 
    prototype.constructor = subType;                 // 增强对象 
    subType.prototype = prototype;                   // 指定对象 
}

function SuperType(name){ 
    this.name = name; 
    this.colors = ["red", "blue", "green"]; 
} 
 
SuperType.prototype.sayName = function(){ 
    console.log(this.name); 
}; 
 
function SubType(name, age){   
    SuperType.call(this, name); 
     
    this.age = age; 
} 
 
inheritPrototype(SubType, SuperType); 
 
SubType.prototype.sayAge = function(){ 
    console.log(this.age); 
};
```

> 只调用了一次 SuperType 构造函数，并且因此避免了在 `SubType`. `prototype` 上面创建不必要的、多余的属性。

> 还能够正常使用`instanceof` 和 `isPrototypeOf()`