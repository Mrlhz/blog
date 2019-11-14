/**
 * @description 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度
 * @see {@link https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/}
 * @param {string} s
 * @return {number} 最长子串的长度ans
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length
  let ans = 0
  const hash = new Set()
  let i = 0
  let j = 0 // 向右侧滑动索引 j
  while (i < len && j < len) {
    if (!hash.has(s[j])) {
      hash.add(s[j++])
      ans = Math.max(ans, j - i)
    } else {
      hash.delete(s[i++])
    }
  }
  return ans
}

{
  let res1 = lengthOfLongestSubstring('abcabcbb')
  console.log(res1)
}