const { generateRandomArray, isSorted } = require('./sortHelper')
/**
 * @description 插入排序
 * @param {array} array
 */
function insertionSort1(array) {
  console.time('t')
  const len = array.length
  for (let i = 1; i < len; i++) {
    // 寻找元素array[i]合适的插入位置
    for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]]
    }
  }
  console.timeEnd('t')
  console.log(array)
}


function insertionSort() {
  console.time('t')
  const len = array.length
  for (let i = 1; i < len; i++) {
    // 寻找元素array[i]合适的插入位置
    let e = array[i]
    let j // 保存元素e应该插入的位置
    for (j = i; j > 0 && array[j - 1] > e; j--) {
      array[j] = array[j - 1]
    }
    array[j] = e
  }
  console.timeEnd('t')
  return array
}

const array = generateRandomArray(10, 1, 100)
let sortArray = insertionSort(array)

console.log(isSorted(sortArray))
console.log(sortArray)