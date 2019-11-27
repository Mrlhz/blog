/**
 * @description 给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。
 * 假设只有一个重复的整数，找出这个重复的数。
 * @see {@link https://leetcode-cn.com/problems/find-the-duplicate-number/}
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {

  const len = nums.length
  let hash = {}
  for (let i = 0; i < len; i++) {
    hash[nums[i]] ? hash[nums[i]]++ : hash[nums[i]] = 1
  }

  for (const key in hash) {
    if (hash.hasOwnProperty(key)) {
      if (hash[key] > 1) return key
    }
  }

  return -1
}


// todo
function findDuplicate(nums) {
  let tortoise = nums[0]
  let hare = nums[0]

  do {
    tortoise = nums[tortoise]
    hare = nums[nums[hare]]
  } while (tortoise !== hare)

  let ptr1 = nums[0]
  let ptr2 = tortoise
  while (ptr1 !== ptr2) {
    ptr1 = nums[ptr1]
    ptr2 = nums[ptr2]
  }
  return ptr1
}


console.log(findDuplicate([1, 3, 4, 2, 2]))
console.log(findDuplicate([3, 1, 3, 4, 2]))