/**
 * @description 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。
 * 如果不存在符合条件的连续子数组，返回 0。
 * @see {@link https://leetcode-cn.com/problems/minimum-size-subarray-sum/}
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  const len = nums.length
  if (len === 0) return 0
  let left = 0
  let right = -1
  // let ans = Number.MAX_SAFE_INTEGER
  let ans = len + 1
  let sum = 0
  while (left < len) {
    if (right + 1 < len && sum < s) {
      sum += nums[++right]
    } else {
      sum -= nums[left++]
    }

    if (sum >= s) {
      ans = Math.min(ans, right - left + 1)
      // ?
      // if (ans === 1) return 1
    }
  }

  return ans === len + 1  ? 0 : ans
}

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
console.log(minSubArrayLen(4, [1, 4, 4]))

// 输出: 2
// 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。

function _(s, nums) {
  const len = nums.length
  if (len === 0) return 0
  let ans = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < len; i++) {
    let sum = nums[i]
    // let arr = [nums[i]]
    if (sum >= s) return 1
    for (let j = i + 1; j < len; j++) {
      if (sum >= s) {
        ans = Math.min(ans, j - i + 1)
        break
      } else {
        sum += nums[j]
        // arr.push(nums[j])
        if (sum >= s) {
          ans = Math.min(ans, j - i + 1)
        }
      }
    }
  }
  if (ans === Number.MAX_SAFE_INTEGER) return 0
  return ans
}