/**
 * @description 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写
 * 说明：本题中，我们将空字符串定义为有效的回文串
 * @see {@link https://leetcode-cn.com/problems/valid-palindrome/}
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let strArr = s.replace(/[^A-Za-z0-9]/gi, '').toLocaleLowerCase()
  // let strArr = s.match(/[A-Za-z0-9]/gi) || ''
  
  if (strArr) {
    const len = strArr.length
    for (let i = 0; i < len/2; i++) {
      if (strArr[i] !== strArr[len - 1 - i]) {
        return false
      }
    }
    return true
  }
  return true
}


console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('race a car'))
console.log(isPalindrome('a________xcddcba'))
console.log(isPalindrome(''))
console.log(isPalindrome(' '))
console.log(isPalindrome('..'))
console.log(isPalindrome('.,'))