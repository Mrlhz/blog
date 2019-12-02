/**
 * @description 颜色分类
 * @see {@link https://leetcode-cn.com/problems/sort-colors/}
 * @param {array} nums
 * @returns
 */
function sortColors(nums) {
  let left = 0 // 0的最右边界
  let right = nums.length - 1 // 最左边界
  let cur = 0 // 当前考虑的元素下标

  while (cur <= right) {
    if (nums[cur] === 0) {
      [nums[cur++], nums[left++]] = [nums[left], nums[cur]]
    } else if (nums[cur] === 2) {
      [nums[cur], nums[right--]] = [nums[right], nums[cur]]
    } else {
      cur++
    }
  }
  return nums
}

console.log(sortColors([2, 0, 2, 1, 1, 0]))
