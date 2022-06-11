// https://github.com/zloirock/core-js/blob/master/tests/tests/es.array.at.js

const at = require('../array/at')

test('Array#at: ', () => {
  expect(at.call([1, 2, 3], 0)).toBe(1)
  expect(at.call([1, 2, 3], 1)).toBe(2)
  expect(at.call([1, 2, 3], 2)).toBe(3)
  expect(at.call([1, 2, 3], 3)).toBe(undefined)
  expect(at.call([1, 2, 3], -1)).toBe(3)
  expect(at.call([1, 2, 3], -2)).toBe(2)
  expect(at.call([1, 2, 3], -3)).toBe(1)
  expect(at.call([1, 2, 3], -4)).toBe(undefined)
  expect(at.call([1, 2, 3], 0.4)).toBe(1)
  expect(at.call([1, 2, 3], 0.5)).toBe(1)
  expect(at.call([1, 2, 3], 0.6)).toBe(1)
  expect(at.call([1], NaN)).toBe(1)
  expect(at.call([1])).toBe(1)
  expect(at.call([1, 2, 3], -0)).toBe(1)
  expect(at.call(Array(1), 0)).toBe(undefined) // [empty].at(0)
  expect(at.call({ 0: 1, length: 1 }, 0)).toBe(1)

  expect([1, 2, 3].at2(-1)).toBe(3)
  expect([1, 2, 3].at2(1.9)).toBe(2) // ===  [1, 2, 3].at(1)

  // strict
  // expect(() => at.call(null, 0)).toThrow(TypeError)
  // expect(() => at.call(undefined, 0)).toThrow(TypeError)
})
