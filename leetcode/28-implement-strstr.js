/**
 * @description 实现 strStr() 函数。
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。
 * 如果不存在，则返回  -1
 * @see {@link https://leetcode-cn.com/problems/implement-strstr/}
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const needleLen = needle.length
  if (needleLen === 0) return 0
  const len = haystack.length
  if (needleLen > len) return -1
  for (let i = 0; i <= len - needleLen; i++) {
    console.log(i, i + needleLen);
    if (haystack.substring(i, i + needleLen) === needle) {
      return i
    }
  }

  return -1
}

console.log(strStr('hello', 'll'))
// console.log(strStr('aaaaa', 'bba'))
// console.log(strStr('a', 'aa'))

// todo
// https://leetcode-cn.com/problems/implement-strstr/solution/python3-sundayjie-fa-9996-by-tes/