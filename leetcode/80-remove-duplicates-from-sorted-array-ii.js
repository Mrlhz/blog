/**
 * @description 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度
 * @see {@link https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/}
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let len = nums.length
  if (len <= 2) {
    return len
  }
  let cur = 1
  for (let i = 2; i < len; i++) {
    if (nums[i] !== nums[cur - 1]) {
      nums[++cur] = nums[i]
    }
  }
  console.log(nums, cur + 1)
}

// removeDuplicates([1, 1, 1, 2, 2, 3])
removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])