const { generateRandomArray, generateNearlyOrderedArray, isSorted, before } = require('./sortHelper')

/**
 * @description 希尔排序
 * @param {array} array
 */
function mergeSort(array=[]) {
  const len = array.length
  if (len === 1) return array

  let mid = Math.floor(len / 2)
  let left = array.slice(0, mid)
  let right = array.slice(mid, len)

  return merge(mergeSort(left), mergeSort(right))
}

/**
 * @description
 * @param {array} left
 * @param {array} right
 */
function merge(left, right) {
  let result = []
  let l = 0
  let r = 0

  while(l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l++])
    } else {
      result.push(right[r++])
    }
  }

  while(l < left.length) {
    result.push(left[l++])
  }
  while(r < right.length) {
    result.push(right[r++])
  }

  return result
}

const array = generateRandomArray(100000, 1, 100000)
// console.time('mergeSort')
// let sortArray = mergeSort(array)
// console.timeEnd('mergeSort')

// console.log(isSorted(sortArray))
// console.log(sortArray)

const mergeSortFn = before(mergeSort, 'mergeSort', array)

let sortArray = mergeSortFn()
console.log(isSorted(sortArray))
// console.log(sortArray)