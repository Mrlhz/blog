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

  // makeFunc(str)
}


{
  /**
   * 不使用任何循坏控制语句和迭代器的情况下实现一个0到1000的数组赋值
   */

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
   * @todo bug
   */

  function isObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]"
  }

  function equals(x, y) {
    if (!isObject(x) || !isObject(y)) return
    if (x === y) return true
    if (Object.keys(x).length !== Object.keys(y).length) return false

    for (const key in x) {
      // const ele = x[key]
      const e1 = x[key]
      const e2 = y[key]
      if (x.hasOwnProperty(key) && y.hasOwnProperty(key)) {

        if (!isObject(e1) && !isObject(e2)) {
          return Object.is(e1, e2) // todo 只判断了一个key相等就return true
        } else if (isObject(e1) && isObject(e2)) {
          return equals(e1, e2)
        } else {
          return false
        }

      } else {
        return false
      }

    }
  }


  const res = equals({ a: 1, b: 2, c: NaN, d: null }, { b: 2, a: 1, c: NaN, d: null })
  console.log(res)
}