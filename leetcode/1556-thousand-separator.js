/**
 * @description 千位分隔数: 给你一个整数 n，请你每隔三位添加点（即 "." 符号）作为千位分隔符，并将结果以字符串格式返回。
 * @link https://leetcode-cn.com/problems/thousand-separator/
 * @param {number} n
 * @return {string}
 */
function thousandSeparator(n) {
  let str = n.toString()
  let arr = str.split('')
  let indexs = []
  for (let i = str.length - 3; i > 0; i = i - 3) {
    indexs.unshift(i)
    // console.log(str[i], i)
  }
  for (let i = 0; i < indexs.length; i++) {
    arr.splice(indexs[i] + i, 0, '.')
  }
  // console.log(arr.join(''))
  return arr.join('')
}

function thousandSeparator(n) {
  const nArray = String(n).split('')
  const result = []
  let y = 0
  for (let i = nArray.length - 1; i >= 0; i--) {
    y++
    result.unshift(nArray[i])
    if (y % 3 === 0 && i !== 0) {
      result.unshift('.')
    }
  }
  console.log(result.join(''))
  return result.join('')
}

var thousandSeparator2 = function(n) {
  return (n + '').replace(/(?!^)(?=(\d{3})+$)/g,'.')
}


thousandSeparator(987)
thousandSeparator(1234)
thousandSeparator(123456789)
thousandSeparator(0)
