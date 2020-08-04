/**
 * @description 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000
 * @see {@link https://leetcode-cn.com/problems/longest-palindromic-substring/}
 * @see {@link https://leetcode-cn.com/problems/longest-palindromic-substring/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-bao-gu/}
 * @return {number}
 */
function longestPalindrome(s) {
  let start = 0, end = 0
  const n = s.length
  for (let i = 0; i < n; i++) {
    let len1 = expandAroundCenter(s, i, i)
    let len2 = expandAroundCenter(s, i, i + 1)
    let len = Math.max(len1, len2)
    if (len > end - start) {
      start = i - Math.floor(len - 1 / 2) // ?
      end = i + Math.floor(len / 2)
    }
  }
  console.log(s.substring(start, end +1))
}


function expandAroundCenter(str, left, right) {
  let L = left, R=right

  while (L > 0 && R < str.length && str[L] === str[R]) {
    L--
    R++
  }
  console.log(R - L - 1)
  return R - L - 1
}

// expandAroundCenter('babad', 2, 2)
longestPalindrome('babad')
