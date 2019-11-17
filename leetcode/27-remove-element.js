/**
 * @description 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
 * @see {@link https://leetcode-cn.com/problems/remove-element/}
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  // O(1)
  let k = 0
  let len = nums.length
  while (len) {
    if (nums[k] === val) {
      nums.splice(k, 1)
    } else {
      k++
    }
    len--
  }
  console.log(nums, k, nums.length)
  return nums.length
}

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)
removeElement([3, 2, 2, 3], 3)
removeElement([3, 3], 3)


function removeElement1(nums, val) {
  let i = 0
  let n = nums.length
  while (i < n) {
    if (nums[i] == val) {
      nums[i] = nums[n - 1]
      // reduce array size by one
      n--
    } else {
      i++
    }
  }
  console.log(nums, n)
  return n
}

// 作者：LeetCode
// 链接：https://leetcode-cn.com/problems/remove-element/solution/yi-chu-yuan-su-by-leetcode/
// 来源：力扣（LeetCode）

removeElement1([0, 1, 2, 2, 3, 0, 4, 2], 0)
