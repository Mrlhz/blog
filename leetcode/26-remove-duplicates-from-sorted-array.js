/**
 * @description 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度
 * @see {@link https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/}
 * @param {number[]} nums
 * @return {number} 移除后数组的新长度
 */
var removeDuplicates = function (nums) {
  let len = nums.length
  let k = 0
  while (len) {
    if (nums[k] === nums[k + 1]) {
      nums.splice(k, 1)
    } else {
      k++
    }
    len--
  }
  console.log(nums)
  return nums.length
}


// removeDuplicates([1, 2])
// removeDuplicates([1, 1, 2])
// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])

function removeDuplicates1(nums) {
  let p = 0, q = 1
  while (q < nums.length) {
    if (nums[p] !== nums[q]) {
      if (q - p > 1) {
        nums[p + 1] = nums[q] // 当数组中没有重复元素不进行原地复制
      }
      p++
    }
    q++
  }
  console.log(nums, p, q)
}

removeDuplicates1([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])