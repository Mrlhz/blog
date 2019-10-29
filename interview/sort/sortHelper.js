/**
 * @description 生成n个元素的随机数组，每个元素的随机范围为[rangeL, rangeR]
 * @param {number} n
 * @param {number} rangeL
 * @param {number} rangeR
 */
function generateRandomArray(n, rangeL, rangeR) {
  if (rangeL > rangeR) return

  let array = []
  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * (rangeR - rangeL + 1)) + rangeL
  }
  return array
}

function isSorted(array) {
  const len = array.length
  for (let i = 0; i < len; i++) {
    if (array[i] > array[i + 1]) {
      return false
    }
  }
  return true
}


module.exports = {
  generateRandomArray,
  isSorted
}
