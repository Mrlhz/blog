# 力扣题库

- [两数之和](#two-sum)
- [最长回文子串](#longest-palindromic-substring)


### two-sum

<details>
<summary>两数之和</summary>

```
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
```
```js
/**
 * @description
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum (nums, target) {
  // let num = nums.filter( (item) => item <= target)
  let num = [...nums]
  for (let i = 0, len = num.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      console.log(num[i], num[j]);
      if (num[i] + num[j] === target) {
        console.log(num[i], num[j])
        console.log([i,j])
        return [i, j]
      }
    }
  }
  return [0, 0]
}

twoSum([3,2,4], 6) // [1, 2]
twoSum([11, 15, 5, 3, 8, 9, 2, 7], 9) // [6, 7]
```

</details>

### longest-palindromic-substring
<details>
<summary>最长回文子串</summary>

```
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
```
示例 1：
```
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```
示例 2：
```
输入: "cbbd"
输出: "bb"
```
```js
/**
 * @description 是否回文字符串
 * @param {String} str
 * @returns {Boolean}
 */
function isPalindromic(str) {
  if (!str) return

  let len = str.length

  for (let i = 0; i < len/2; i++) {
    if (str[i] !== str[len - i - 1]) return false
  }
  return true
}

/**
 * @description 
 * @param {String} str
 * @returns {String}
 */
function longestPalindrome(str) {
  let len = str.length
  let longest = ''

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      let s = str.substring(i, j)
      if (isPalindromic(s) && s.length > longest.length) {
        longest = s
      }
    }    
  }
  return longest
}

// longestPalindrome('ababa')
longestPalindrome('babad') // 'bab'
```
</details>