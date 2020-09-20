/**
 * 迭代器模式
 */

/**
 * 外部迭代器
 */

const Iterator = function (obj) {
  let currIndex = 0
  const next = function () {
    return currIndex++
  }
  const isDone = function () {
    return currIndex >= obj.length
  }
  const getCurrItem = function () {
    return obj[currIndex]
  }

  return {
    next,
    isDone,
    getCurrItem
  }
}


// compare 函数： 
const compare = function (iterator1, iterator2) {
  while (!iterator1.isDone() && !iterator2.isDone()) {
    if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
      throw new Error('iterator1 和 iterator2 不相等')
    }
    iterator1.next()
    iterator2.next()
  }

  console.log('iterator1 和 iterator2 相等')
}

const iterator1 = Iterator([1, 2, 3])
const iterator2 = Iterator([1, 2, 3])

compare(iterator1, iterator2) // 输出：iterator1 和 iterator2 相等 