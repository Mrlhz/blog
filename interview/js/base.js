void
function () {
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
console.log(res)


{
  /**
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
    for (let i = 0; i < arr2.length; i++) {
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

  _merge(arr1, arr2)
}

{
  /**
   * @see https://www.bilibili.com/video/av66249907?p=16
   */
  var fn = function(i) {
    console.log(i)
  }

  for (var i = 0; i < 10; i++) {
    setTimeout(fn.bind(null, i), 1000)    
  }
}