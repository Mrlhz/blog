/**
 * @description 给定两个数组，编写一个函数来计算它们的交集
 * @see {@link https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/}
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let res = []
  const map = {}
  for (let i = 0, len = nums1.length; i < len; i++) {
    map[nums1[i]] ? map[nums1[i]]++ : map[nums1[i]] = 1
  }

  for (let j = 0, len2 = nums2.length; j < len2; j++) {
    if (map[nums2[j]]) {
      res.push(nums2[j])
      map[nums2[j]]--
    }
  }
  console.log(res)
  return res
}


intersect([1, 2, 2, 1], [2, 2])
intersect([4, 9, 5], [9, 4, 9, 8, 4])

// todo
// 如果给定的数组已经排好序呢？你将如何优化你的算法？
// 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
// 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

