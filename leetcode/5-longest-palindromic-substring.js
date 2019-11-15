const { isPalindromic } = require('./helper')

/**
 * @description 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000
 * @see {@link https://leetcode-cn.com/problems/longest-palindromic-substring/}
 * @return {string}
 * @example 'babad' => 'bab' || 'aba'
 */
function longestPalindrome(s) {
  let ans = ''
  const len = s.length
  for (let i = 0; i < len; i++) {
    for (let j = i+1; j <= len; j++) {
      const str = s.substring(i, j)
      if (isPalindromic(str) && str.length > ans.length) {
        ans = str
      }
    }
  }
  return ans
}

longestPalindrome('babad')
