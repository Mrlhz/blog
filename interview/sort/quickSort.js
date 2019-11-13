const { generateRandomArray, isSorted } = require('./sortHelper')

/**
 * @description 快速排序
 * `1. 首先，从数组中选择中间一项作为主元`
 * `2. 移动左指针直到我们找到一个比主元大的元素，接着，移动右指针直到找到一个比主元小的元素，然后交换它们，重复这个过程，直到左指针超过了右指针`
 * `3. 接着，算法对划分后的小数组（较主元小的值组成的子数组，以及较主元大的值组成的子数组）重复之前的两个步骤，直至数组已完全排序`
 * @param {array} array
 */
function quickSort(array) {
  quick(array, 0, array.length - 1)
  return array
}

function quick(array, left, right) {
  let index = -1
  if (array.length > 1) {
    index = partition(array, left, right)

    if (left < index - 1) {
      quick(array, left, index - 1)
    }

    if (index < right) {
      quick(array, index, right)
    }
  }
}

function partition(array, left, right) {
  let pivot = array[Math.floor((right + left) / 2)] // 选择中间项作为主元，随机选择一个数组项或是选择中间项
  let i = left
  let j = right

  while (i <= j) {
    while (array[i] < pivot) {
      i++
    }

    while (array[j] > pivot) {
      j--
    }

    // 此时左指针索引没有右指针索引大，左项比右项大
    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]]
      i++
      j--
    }
  }

  
  return i
}


// const array = generateRandomArray(1000000, 1, 10)
// const array = generateRandomArray(1000000, 1, 1000000)
// const array = [8, 7, 6, 5, 4, 3, 2, 1]
const array = [3, 5, 1, 6, 4, 7, 2]


console.time('quickSort')
let sortArray = quickSort(array)
console.timeEnd('quickSort')

console.log(isSorted(sortArray))
console.log(sortArray)