// https://github.com/zloirock/core-js/blob/master/tests/tests/es.array.find-index.js

const findIndexLast = require('../array/find-index-last')

function isPrime(element, index, array) {
  var start = 2
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false
    }
  }
  return element > 1
}

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex#example_testing_size_of_all_array_elements
test('findIndexLast: 查找数组中素数的元素的索引', () => {
  // https://jestjs.io/zh-Hans/docs/using-matchers#例外
  expect(() => findIndexLast.call([1])).toThrow(TypeError)
  expect(findIndexLast.call([4, 6, 8, 12], isPrime)).toBe(-1) // not found
  expect(findIndexLast.call([4, 6, 7, 12], isPrime)).toBe(2)
})
