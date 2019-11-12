/**
 * @description 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一
 * @see {@link https://leetcode-cn.com/problems/plus-one/}
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits = []) {
  const len = digits.length

  for (let i = len - 1; i >= 0; i--) {
    digits[i]++
    digits[i] %= 10
    if (digits[i] !== 0) return digits
  }
  digits.unshift(1)
  return digits
}


// plusOne([1,2,3])
// plusOne([4,3,2,1])
// plusOne([1, 9])
// plusOne([9])
let digits = plusOne([9, 9, 9])
let digits1 = plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])
console.log(digits, digits1)