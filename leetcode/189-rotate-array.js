/**
 * @description 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 * 要求使用空间复杂度为 O(1) 的 原地 算法。
 * @see {@link https://leetcode-cn.com/problems/rotate-array/}
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const len = nums.length
  k = k % len
  while (k > 0) {
    let stack = nums.pop()
    nums.unshift(stack)
    k--
  }
  return nums
}


// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
// console.log(rotate([-1, -100, 3, 99], 2))

// 使用反转
function _rotate(nums, k) {
  const len = nums.length
  k %= len
  reverse(nums, 0, len - 1)
  // nums.reverse()
  reverse(nums, 0, k - 1)
  reverse(nums, k, len - 1)
  console.log(nums);
}

function reverse(array, start, end) {
  while (start < end) {
    [array[start++], array[end--]] = [array[end], array[start]]
  }
  return array
}

// reverse([1, 2, 3, 4, 5, 6, 7], 0, 6)
_rotate([1, 2, 3, 4, 5, 6, 7], 3)
