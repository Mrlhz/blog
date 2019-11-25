/**
 * @description 请你来实现一个 atoi 函数，使其能将字符串转换成整数
 * @see {@link https://leetcode-cn.com/problems/string-to-integer-atoi/}
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str = '') {
  if (!str) return 0
  const INT_MAX = Math.pow(2, 31) - 1
  const INT_MIN = Math.pow(-2, 31)

  str = str.trim()
  let ans = 0

  let s = ''
  for (let i = 0; i < str.length; i++) {
    // let n = Number(str[i])
    let n = str[i]
    if (Number.isSafeInteger(Number.parseInt(n)) || n === '-' && i === 0 || i === 0 && n === '+') {
      s += n
      // n * Math.pow(10, i)
    } else {
      break
    }
  }
  ans = Number(s)
  console.log(ans);
  if (Number.isNaN(ans)) return 0
  if (ans > INT_MIN && ans < INT_MAX) {
    return ans
  } else {
    return ans > 0 ? INT_MAX : INT_MIN
  }
}

var myAtoi = function (str) {
  // str = str.trim()
  let number = parseInt(str)
  let max = Math.pow(2, 31) - 1
  let min = -Math.pow(2, 31)
  if (isNaN(number)) return 0;
  if (number >= max)
    number = max
  if (number <= min)
    number = min
  return number
}
// console.log(myAtoi('42'))
// console.log(myAtoi('   -42'))
console.log(myAtoi('4193 with words'))
// console.log(myAtoi('words and 987'))
// console.log(myAtoi('-91283472332'))
// console.log(myAtoi('  -0012a42'))
// console.log(myAtoi('+'))
// console.log(myAtoi('    -88827   5655  U'))
// console.log(myAtoi('-5-'))
// console.log(myAtoi('   -1118250626e1'))