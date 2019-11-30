/**
 * @description 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出
 * 必须原地修改输入数组、使用 O(1) 的额外空间
 * @see {@link https://leetcode-cn.com/problems/reverse-string/}
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s = []) {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    // console.log(s[left++], s[right--])
    [s[left++], s[right--]] = [s[right], s[left]]
    console.log(left, right)
  }
  return s
  // return s.reverse()
}

console.log(reverseString(["h", "e", "l", "l", "o"]))
console.log(reverseString(["H", "a", "n", "n", "a", "h"]))
console.log(reverseString(["a", "b", "c"]))
