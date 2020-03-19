/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness#非严格相等
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
 * @see https://www.bilibili.com/video/av66249907?p=18
 * == 比较，左右两边数据类型不一样，则先转换为相同数据类型再进行比较
 */

// console.log(null == undefined) // true

// console.log(null === undefined) // false

{
  // 对象和字符串比较，是把对象toString() 转换为字符串后再进行比较
  console.log(`[12] == '12' ${[12] == '12'}`)
  // [12].toString() => '12'
  // 相当于 [12].toString() == '12'
}

// 剩余情况比较：都是转换为数字（前提数据类型不同）
// 对象转数字：先转换为字符串，然后再转换为数字
// 字符串转数字：出现一个非数字字符，结果就是NaN
// 布尔转数字：true => 1  false => 0
// null 转数字0          Number(null) => 0
// undefined转数字 NaN   Number(undefined) => NaN

{
  console.log('[12] == true', [12] == true)
  // 相当于 Number([12].toString()) == 1
}

{
  console.log('[] == false', [] == false)
  // 相当于 Number([].toString()) == 0 , 0 == 0
}

{
  console.log('[] == 1', [] == 1)
  // 相当于 Number([].toString()) == 1, 0 == 1
}

{
  console.log('"1" == 1', '1' == 1)
  // 相当于 Number('1') == 1, 1 == 1
}

{
  console.log('true == 2', true == 2)
  // 相当于 Number(true) == 2, 1 == 2
}


{
  var a = {
    n: 0,
    toString: function() {
      return ++this.n
    }
  }

  if (a == 1 && a == 2 && a == 3) {
    console.log(1, 'ok')
  }
}