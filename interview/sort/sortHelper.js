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

/**
 * @description 生成近乎有序的数组
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param {number} n 数组长度
 * @param {number} swapTimes 交换元素的个数
 */
function generateNearlyOrderedArray(n, swapTimes) {
  const array = []
  for (let i = 0; i < n; i++) {
    array[i] = i
  }

  for (let j = 0; j < swapTimes; j++) {
    let posx = Math.floor(Math.random() * n)
    let posy = Math.floor(Math.random() * n); // 不加分号后果很严重 

    // [array[posx], array[posy]] = [array[posy], array[posx]]
    swap(array, posx, posy)
  }
  return array
}

function swap(array, x, y) {
  [array[x], array[y]] = [array[y], array[x]]
}

function before(fn, name, array) {
  return () => {
    console.time(name)
    const res = fn(array)
    console.timeEnd(name)
    return res
  }
}

function after(fn, name) {
  return function() {
    console.log(this === globalThis)
    console.log(this === global)
    console.log(arguments);
  }
}

let fn = after()
fn('h')

module.exports = {
  generateRandomArray,
  generateNearlyOrderedArray,
  isSorted,
  before
}
