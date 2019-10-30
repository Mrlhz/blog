const { generateRandomArray, isSorted } = require('./sortHelper')
/**
 * @description 冒泡排序
 * @param {array} array
 * @returns
 */
function bubbleSort(array) {
  const len = array.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
  return array
}

const array = generateRandomArray(10, 1, 100)

console.time('bubbleSort')
let sortArray = bubbleSort(array)
console.timeEnd('bubbleSort')

console.log(isSorted(sortArray))
console.log(sortArray)