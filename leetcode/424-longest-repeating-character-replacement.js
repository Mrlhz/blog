/**
 * @description 给你一个仅由大写英文字母组成的字符串，你可以将任意位置上的字符替换成另外的字符，总共可最多替换 k 次。
 * 在执行上述操作后，找到包含重复字母的最长子串的长度。
 * @see {@link https://leetcode-cn.com/problems/longest-repeating-character-replacement/}
 * @param {string} s
 * @param {number} k
 * @return {number}
 * @todo 待做，没思路
 */
var characterReplacement = function (s, k) {
  if (!s || s.length === 0) return 0
  const len = s.length
  let left = 0, right = 0, ans = 0, maxLen = 0
  let dict = {}
  while (right < len) {
    dict[s[right]]++
    maxLen = Math.max(maxLen, dict[s[right]])

    while ((right - left + 1 - maxLen) > k) {
      dict[s[left++]]--
    }

    ans = Math.max(ans, right - left + 1)
    right++
  }
  console.log(ans)
}

characterReplacement('ABAB', 2)
characterReplacement('AABABBA', 1)
