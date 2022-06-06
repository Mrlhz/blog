// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex#polyfill
// https://262.ecma-international.org/5.1/#sec-15.4.4.15
// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex

function findIndexLast(predicate) {

  // 1. Let O be ? ToObject(this value).
  if (this == null) {
    throw new TypeError('"this" is null or not defined')
  }

  const o = Object(this)

  // 2. Let len be ? ToLength(? Get(O, "length")).
  const len = o.length >>> 0

  // 3. If IsCallable(predicate) is false, throw a TypeError exception.
  if (typeof predicate !== 'function') {
    throw new TypeError('predicate must be a function')
  }

  // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
  const thisArg = arguments[1]

  // 5. Let k be len - 1.
  let k = len - 1

  // 6. Repeat, while k >= 0
  while (k >= 0) {
    // a. Let Pk be ! ToString(k).
    // b. Let kValue be ? Get(O, Pk).
    // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
    // d. If testResult is true, return k.
    const kValue = o[k]
    if (predicate.call(thisArg, kValue, k, o)) {
      return k
    }
    // e. Decrease k by 1.
    k--
  }

  // 7. Return -1.
  return -1
}

module.exports = findIndexLast
