/**
 * @description 一些面试题
 * 1. (5).add(3).minus(2)
 * 2. 类，普通对象，原型, 公私有属性
 * 3. 编写一条正则，用来验证此规则：一个6~16位的字符串，必须同时包含有大小写字母和数字
 * 4. $attr
 * 5. 按照要求合并数组
 * 6. 闭包
 * 7. a === ? a == 1 && a == 2 && a == 3 成立
 * 8. push 原理
 * 9. 
 * 10. 数组交集
 * 11. 快速排序
 * 12. RegExp.test lastIndex
 * 13. 函数柯理化
 */

{
  /**
   * @index 1
   */
  void function () {
    function check(n) {
      return Number.isNaN(Number(n)) ? 0 : n
    }
    function add(n) {
      n = check(n)
      return this + n
    }
  
    function minus(n) {
      n = check(n)
      return this - n
    }
  
    ['add', 'minus'].forEach((method) => {
      Number.prototype[method] = eval(method)
    })
  }()
  
  let res = (5).add(3).minus(2) // out 6
  // console.log(res)
}


{
  /**
   * @index 2
   * @see https://www.bilibili.com/video/av66249907?p=8
   */
  function Foo() {
    Foo.a = function () {
      console.log(1)
    }

    this.a = function () {
      console.log(2)
    }
  }
  // [1]
  Foo.prototype.a = function () {
    console.log(3)
  }
  // [2]
  Foo.a = function () {
    console.log(4)
  }

  Foo.a() // 4
  let obj = new Foo()
  console.log(obj)
  obj.a() // 2
  Foo.a() // 1

  // 1. 把Foo当做类，在原型上设置实例公有属性的方法 => 实例.a()
  // 2. 把Foo当做普通对象设置设置私有的属性方法 => Foo.a()
}

{
  /**
   * @index 3
   * @description 编写一条正则，用来验证此规则：一个6~16位的字符串，必须同时包含有大小写字母和数字
   * @see https://www.bilibili.com/video/av66249907?p=10
   * @see https://www.html.cn/archives/8100
   */
  // let reg = /(?!^[a-zA-Z]+$)(?!^[0-9]+$)(?!^[a-z0-9]+$)(?!^[A-Z0-9]+$)^[a-zA-Z0-9]{6, 16}$/
  let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,16}$/

  // console.log(reg.test('aBc0'))
  console.log(reg.test('accdf00000'), 'reg')
  console.log(reg.test('aBcdfG00000'), 'reg')
}

{
  /**
   * @index 4
   * @description 
   */
  function $attr(name, value) {
    // document.getElementsByTagName('*')
    const list = Array.from(document.querySelectorAll('*'))
    // if name === 'class', value === box
    // 'content box' 'contentbox'
    // let reg = new RegExp('\\b'+ value +'\\b')
    let reg = new RegExp(`\\b${value}\\b`)
    return list.reduce((acc, cur) => {
      let attr = cur.getAttribute(name)
      if (attr && reg.test(attr)) {
        acc.push(cur)
      }
      return acc
    }, [])
  }
  
  // $attr('class', 'router-link-active')
  // document.querySelector('#v_upinfo') === $attr('id', 'v_upinfo')[0]
  // $attr('id', 'v_upinfo')
}

{
  /**
   * @index 5
   * @see https://www.bilibili.com/video/av66249907?p=15
   */
  let arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
  let arr2 = ['A', 'B', 'C', 'D']

  function merge(arr1, arr2) {
    arr2 = arr2.map((item) => item + '3')
    let arr = arr1.concat(arr2).sort()
    arr = arr.map((item) => {
      if (item.indexOf('3') > 0) {
        return item.replace('3', '')
      } else {
        return item
      }
    })
    console.log(arr)
  }

  function _merge(arr1, arr2) {
    let n = 0
    for (let i = 0, len2 = arr2.length; i < len2; i++) {
      let item = arr2[i]
      for (let k = 0; k < arr1.length; k++) {
        if (arr1[k].includes(item)) {
          n = k
        }
      }
      arr1.splice(n + 1, 0, item)
      console.log(n)
    }

    console.log(arr1)
  }

  // _merge(arr1, arr2)
}

{
  /**
   * @index 6
   * @see https://www.bilibili.com/video/av66249907?p=16
   */
  function test() {
    var fn = function(i) {
      console.log(i)
    }
  
    for (var i = 0; i < 10; i++) {
      setTimeout(fn.bind(null, i), 1000)    
    }
  }
  // test()
}

{
  /**
   * @index 7
   * @see https://www.bilibili.com/video/av66249907?p=18
   */

  //  var a = ?
  // 1
  var a = {
    n: 0,
    toString: function() {
      return ++this.n
    }
  }

  // 2
  // var a = [1, 2, 3]
  // a.toString = a.shift

  // 3

  function test() {
    var val = 0;
    Object.defineProperty(window, 'a', {
      get: function() {
        return ++val;
      }
    })
    console.log(a == 1 && a == 2 && a == 3)
  }

  if (a == 1 && a == 2 && a == 3) {
    console.log(1, 'ok')
  }
}

{
  /**
   * @index 8
   */
  var obj = {
    2: 3,
    3: 4,
    length: 2,
    push: Array.prototype.push
  }

  obj.push(1)
  obj.push(2)
  console.log(obj)

  Array.prototype.push2 = function(...args) {
    let len = this.length
    for (let i = 0; i < args.length; i++) {
      this[len + i] = args[i]
    }
    return this.length
  }

}

{
  /**
   * @index 9
   */
  var obj = {
    1: 222,
    2: 123,
    5: 888,
  }
  function test(obj) {
    let ans = []
    for (let i = 1; i <= 12; i++) {
      obj[i] ? ans.push(obj[i]) : ans.push(null)
    }
    console.log(ans)
  }
  // test(obj)

  var ans = new Array(12).fill(null)
  Object.keys(obj).forEach((item) => {
    ans[item - 1] = obj[item]
  })
}

{
  /**
   * @index 10
   * @description 数组交集
   */
  var nums1 = [1, 2, 2, 1]
  var nums2 = [2, 2]
  function intersection(arr1, arr2) {
    const hash = {}
    let ans = []
    for (let i = 0; i < arr1.length; i++) {
      hash[arr1[i]] ? hash[arr1[i]]++ : hash[arr1[i]] = 1
    }

    for (let i = 0; i < arr2.length; i++) {
      if (hash[arr2[i]]) {
        ans.push(arr2[i])
        hash[arr2[i]]--
      }
    }

    nums1.forEach((item) => {
      nums2.includes(item) ? ans.push(item) : null
    })
    console.log(hash, ans)
  }

}

{
  /**
   * @index 11
   * @see http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
   * @todo 有问题，有bug
   */
  function quick(arr) {

    if (arr.length <= 1) return arr

    let middleIndex = Math.floor(arr.length / 2)
    let middleValue = arr.splice(middleIndex, 1)[0]

    let leftArr = []
    let rightArr = []
    for (let i = 0, len = arr.length; i < len; i++) {
      arr[i] > middleValue ? rightArr.push(arr[i]) : leftArr.push(arr[i])
    }
    
    return quick(leftArr).concat(middleValue, quick(rightArr))
  }

  console.log(quick([3, 5, 1, 6, 8, 4, 7, 2]))
}


{
  /**
   * @index 12
   * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
   */
  var str = '2012-12-12 12:12:12'
  var regex = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/g
  for (let i = 0; i < 10; i++) {
    regex.lastIndex = 0
    if (regex.test(str)) {
      console.log(true)
    }
  }

}


{
  /**
   * @index 13
   * @description 函数柯理化
   */
  function curry(fn) {
    let args = Array.prototype.slice.call(arguments, 1)
    return function(...innerArgs) {
      let finalArgs = args.concat(innerArgs)
      return fn.apply(null, finalArgs)
    }
  }


  function curring(fn, length) {
    length = length || fn.length
    return function(...args) {
      if (args.length >= length) {
        return fn(...args)
      }
      return curring(fn.bind(null, ...args), length - args.length)
    }
  }

  function add(...args) {
    return args.reduce((sum, cur) => (sum+= cur, sum))
  }
  
  add = curring(add, 0)
}
