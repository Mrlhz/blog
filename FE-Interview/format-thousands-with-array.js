
/**
 * @description JavaScript数值千分位格式化
 * @link https://www.cnblogs.com/cloud-/p/10862617.html
 * @param {String | Number} input
 */
function formatThousandsWithArray(input) {
  if (typeof input !== 'string') input = input.toString()
  const arr = input.split('.')
  const int = arr[0]
  const fraction = arr[1] || ''
  const intArr = int.split('')
  for (let i = intArr.length - 3; i > 0; i = i - 3) {
    intArr[i] = ',' + intArr[i]
  }
  const result = intArr.join('')  + (fraction ? '.' + fraction : '')
  console.log(result)
}


formatThousandsWithArray(123456789)
formatThousandsWithArray(123456789.02)
formatThousandsWithArray('123456789')
formatThousandsWithArray('123456789.02')
