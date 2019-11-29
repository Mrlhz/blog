/**
 * @description 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * @see {@link https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted}
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // 时间复杂度 O(n)
  // 空间复杂度 O(1)
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1]
    } else if (numbers[left] + numbers[right] < target) {
      left++
    } else {
      right--
    }
  }
  return [-1, -1]
}

console.log(twoSum([2, 7, 11, 15], 9))


// https://leetcode-cn.com/problems/two-sum/
var twoSum1 = function (nums, target) {
  let hash = {}
  const len = nums.length
  for (let i = 0; i < len; i++) {
    let complement = target - nums[i]
    if (complement in hash) {
      return [hash[complement], i]
    }
    hash[nums[i]] = i

  }
  return [-1, -1]
}



console.log(twoSum1([2, 7, 11, 15], 9))
console.log(twoSum1([3, 2, 4], 6))