/**
 * @description 二分查找法
 * @param {array} arr
 * @param {*} target 目标元素
 */
function binarySearch(arr = [], target) {
  let n = arr.length
  let left = 0
  let right = n - 1
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2)
    if (arr[mid] === target) return mid
    if (arr[mid] > target) right = mid - 1
    else {
      left = mid + 1
    }
  }
  return -1
}

let res = binarySearch([1, 2, 3, 4], 2)
console.log(res)