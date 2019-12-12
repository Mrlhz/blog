/**
 * @description 给定一个整数数组，判断是否存在重复元素。
 * @see {@link https://leetcode-cn.com/problems/contains-duplicate/}
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums = []) {
  const len = nums.length
  let hash = new Set()
  let index = 0
  while (index < len) {
    if (hash.has(nums[index])) {
      return true
    } else {
      hash.add(nums[index])
    }
    index++
  }
  return false

  // return new Set(nums).size !== nums.length
}

let r1 = containsDuplicate([1, 2, 3, 1]) // true
let r2 = containsDuplicate([1, 2, 3, 4]) // flase
let r3 = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]) // true

console.log(r1, r2, r3)