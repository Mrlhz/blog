/**
 * 1，输入：“get1_install2_app3_list4_by5_android6”（每个单词后面总会携带一个数字，只有偶数才删掉），
 * 我不用循环只用正则怎么实现输出"get1InstallApp3ListBy5Android"？
 * 2，不能使用任何循环控制语句和迭代器的情况下实现一个0到1000的数组赋值。
 * 3，写一个函数能返回两个对象（注意特殊对象）内不一致的是哪个变量和层级，
 * 返回格式类似："key1-key2-key3..."的字符串, 用什么作为分隔符不重要
 */

{
  const str = 'get1_install2_app3_list4_by5_android6'

  function makeFunc(str) {
    let str_list = str.split('_').map((item, index) => {
      if (index > 0) {
        const itemList = item.split('')
        const lastOne = itemList.pop()
        item = Number.parseInt(lastOne) % 2 === 0 ? itemList.join('') : item

        return item[0].toUpperCase() + item.substring(1)
      } else {
        return item
      }
    }).join('')

    console.log(str_list)
  }

  function firstWordUpperCase(str) {
    return str.toLowerCase().replace(/(\s|^)[a-z]/g, function (char) {
      return char.toUpperCase();
    })
  }

  makeFunc(str)
}


{
  /**
   * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#指定一个函数作为参数
   * @param {string} [str='']
   */
  function replacer(str='') {

    // str = str.replace(/_/g, '')
    const res =  str.replace(/([a-z]+)(\d)(_|$)/g, (match, p1, p2, p3, offset, string) => {
      // console.log(match, p1, p2, offset, string)
      // console.log(p1)
      // console.log(p1, p2, p3) // get 1 _
      if (offset !== 0) p1 = p1[0].toUpperCase() + p1.substring(1)
      if (p2 % 2 === 0) p2 = ''
      if (p3) p3 = ''
      return p1 + p2
    })

    console.log(res)
  }

  replacer('get1_install2_app3_list4_by5_android6')
}


{
  /**
   * 不使用任何循坏控制语句和迭代器的情况下实现一个0到1000的数组赋值
   */
  // ?
  Array.from({ length: 1000 }, (_, i) => i)
  // Object.keys(Array.apply(null, { length: 1000 }))
  // Object.keys(Array.from({ length: 1000 }))

  let arr = []
  function makeArr(i) {
    if (i > 1000) {
      return
    }
    arr.push(i++)
    // console.log(i++)
    makeArr(i)
  }
  // makeArr(0)
  // console.log(arr, arr.length)
}

{
  /**
   * @description 写一个函数能判断两个对象（注意特殊对象）内包含的内容是否一致
   * @see https://github.com/mqyqingfeng/Blog/issues/41
   * @see https://www.lodashjs.com/docs/lodash.eq
   * @see https://underscorejs.org/#isEqual
   */

  function eq (value, other) {

    // null
    if (value == null || other === null) return false

    //  +0 -0
    if (value === other) return value !== 0 || 1 / value === 1 / other

    // NaN
    // if (value !== value) return other !== other
    if (+value !== +value) return +other !== +other

    // value 为基本类型 other 为function
    const type = typeof value
    if (['function', 'object'].indexOf(type) < 0 && typeof other !== 'object') return false

    // deepEq

    return deepEq(value, other)
  }

  function deepEq (value, other) {

  }
}
