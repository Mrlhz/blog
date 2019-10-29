const { generateRandomArray, isSorted } = require('./sortHelper')

/**
 * @description 希尔排序
 * @param {array} array
 */
function shellSort(array) {

  return array
}


const array = generateRandomArray(10, 1, 100)
let sortArray = shellSort(array)

console.log(isSorted(sortArray))
console.log(sortArray)
