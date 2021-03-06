/**
 * @description 给定一个整数，编写一个函数来判断它是否是 2 的幂次方
 * @see {@link https://leetcode-cn.com/problems/power-of-two/}
 * @see {@link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators}
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // return n > 0 && (n & (n - 1)) == 0
  if (n <= 0) return false
  console.log((n & (n - 1)) === 0)
  return (n & (n - 1)) === 0
}

isPowerOfTwo(1) // true
isPowerOfTwo(16) // true
isPowerOfTwo(218) // false

// Math.pow(2, 0) === 1


/**
 * @see {@link https://leetcode-cn.com/problems/power-of-two/solution/gao-xiao-suan-fa-ji-bai-100de-yong-hu-by-varyshare/}
 */
function isPowerOfTwo1(n) {
  if (n <= 0) return false

  while (n !== 0) {
    if (n & 1 !== 0) {
      if (n === 1) {
        return true
      } else {
        return false
      }
    }
    n = n >> 1
  }
}