const { generateRandomArray, isSorted } = require('./sortHelper')

/**
 * @description 快速排序
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
  let pivot = array[Math.floor((right + left) / 2)]
  let i = left
  let j = right

  while (i <= j) {
    while (array[i] < pivot) {
      i++
    }

    while (array[j] > pivot) {
      j--
    }

    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]]
      i++
      j--
    }
  }

  return i
}


// const array = generateRandomArray(10000, 1, 10000)
// const array = [8, 7, 6, 5, 4, 3, 2, 1]
const array = [3, 5, 1, 6, 4, 7, 2]


console.time('quickSort')
let sortArray = quickSort(array)
console.timeEnd('quickSort')

console.log(isSorted(sortArray))
console.log(sortArray)