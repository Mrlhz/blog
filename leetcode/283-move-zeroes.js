/**
 * @description 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序
 * @see {@link https://leetcode-cn.com/problems/move-zeroes/}
 * @param {array} nums
 * @return {number}
 */
function moveZero(nums) {
  // 时间复杂度 O(n)
  // 空间复杂度 O(1)
  let k = 0 // 也是不为0的个数
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i]) {
      if (i !== k) {
        [nums[k], nums[i]] = [nums[i], nums[k]]
      }
      k++
    }
  }
  console.log(nums, k)
  return nums
}

moveZero([0,0,1])
moveZero([3,2,1])
moveZero([0,1,0,3,12])

function moveZero1(nums) {
  let k = 0
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i]) {
      nums[k++] = nums[i]
    }
  }

  for (let i = k; i < len; i++) {
    nums[i] = 0 // 补0
  }
  console.log(nums)

}

