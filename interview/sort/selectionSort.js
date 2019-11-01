const { generateRandomArray, isSorted, before } = require('./sortHelper')

/**
 * @description 选择排序
 * @param {array} array
 * @returns
 */
function selectionSort(array) {
  console.time('t')
  const len = array.length
  for (let i = 0; i < len; i++) {
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
  }
  console.timeEnd('t')
  return array
}



const array = generateRandomArray(10000, 1, 10000)

console.time('selectionSort')
let sortArray = selectionSort(array)
console.timeEnd('selectionSort')

console.log(isSorted(sortArray))
console.log(sortArray)

let selectionSortFn = before(selectionSort, 'before', generateRandomArray(10000, 1, 10000))
selectionSortFn()