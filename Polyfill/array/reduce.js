
/**
 * @description
 * @see https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.reduce
 * @param {Function} callbackfn
 * @param {*} initialValue
 * @returns
 */
Array.prototype.reduce2 = function (callbackfn, initialValue) {
  if (typeof callbackfn !== 'function') return

  for (let i = 0, l = this.length; i < l; i++) {
    if (typeof initialValue === 'undefined') {
      initialValue = this[0]
      i++
    }
    initialValue = callbackfn(initialValue, this[i], i, this)
  }
  return initialValue
}

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight#兼容旧环境（polyfill）
function reduce(that, callbackfn, initialValue) {
  'use strict';
  if (that === null || typeof that === 'undefined') {
    throw new TypeError('reduce called on null or undefined')
  }
  if (typeof callbackfn !== 'function') {
    throw new TypeError(callbackfn + ' is not a function')
  }
  const O = Object(that)
  const { length } = O
  const len = length > 0 ? Math.min(length, 2 ** 53 - 1) : 0
  let k = 0
  let accumulator

  if (typeof initialValue !== 'undefined') {
    accumulator = initialValue
  } else {
    // 没有提供初始值
    while(true) {
      if (Reflect.has(O, k)) {
        accumulator = O[k]
        k += 1
        break
      }

      // 0 in [] === false

      k += 1

      if (len <= k) {
        // [].reduce((acc, cur) => {})
        throw new TypeError('Reduce of empty array with no initial value')
      }
    }

  }

  while (k < len) {
    if (Reflect.has(O, k)) {
      accumulator = callbackfn(accumulator, O[k], k, O)
    }
    k += 1
  }

  return accumulator
}
