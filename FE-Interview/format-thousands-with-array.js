
/**
 * @description JavaScript数值千分位格式化
 * @link https://www.cnblogs.com/cloud-/p/10862617.html
 * @link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 * @param {String | Number} input
 */
function formatThousandsWithArray(input) {
  if (typeof input !== 'string') input = input.toString()
  const [int, fraction = ''] = input.split('.')
  const intArr = int.split('')
  for (let i = intArr.length - 3; i > 0; i = i - 3) {
    intArr[i] = ',' + intArr[i]
  }
  const result = intArr.join('')  + (fraction ? '.' + fraction : '')
  console.log(result)
}


{
  formatThousandsWithArray(123456789)
  formatThousandsWithArray(123456789.02)
  formatThousandsWithArray('123456789')
  formatThousandsWithArray('123456789.02')
}
