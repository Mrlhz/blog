/**
 * @description 颜色分类
 * @see {@link https://leetcode-cn.com/problems/sort-colors/}
 * @param {array} nums
 * @returns
 */
function sortColors(nums) {
  let p0 = 0 // 0的最右边界
  let p2 = nums.length - 1 // 最左边界
  let cur = 0 // 当前考虑的元素下标

  while (cur <= p2) {
    if (nums[cur] === 0) {
      [nums[cur++], nums[p0++]] = [nums[p0], nums[cur]]
    } else if (nums[cur] === 2) {
      [nums[cur], nums[p2--]] = [nums[p2], nums[cur]]
    } else {
      cur++
    }
  }
  return nums
}