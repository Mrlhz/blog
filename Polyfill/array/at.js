const min = Math.min
const ceil = Math.ceil
const floor = Math.floor

/**
 * @description Specification
 * @see https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.at
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/at
 * @see https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.array.at.js
 * 23.1.3.1 Array.prototype.at ( index )
 * 1. Let O be ? ToObject(this value).
 * 2. Let len be ? LengthOfArrayLike(O).
 * 3. Let relativeIndex be ? ToIntegerOrInfinity(index).
 * 4. If relativeIndex ≥ 0, then
 * a.   Let k be relativeIndex.
 * 5. Else,
 * a.   Let k be len + relativeIndex.
 * 6. If k < 0 or k ≥ len, return undefined.
 * 7. Return ? Get(O, ! ToString(𝔽(k))).
 */
if (!Array.prototype.at2) {
  Array.prototype.at2 = function at(index) {
    const O = Object(objectCoercible(this)) // this 不是对象，抛出错误提示
    const len = lengthOfArrayLike(O)
    const relativeIndex = toIntegerOrInfinity(index)
    const k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex
    console.log(this, { len, index })
    if (k < 0 || k >= len) return
    return O[k]
  }

  function at(index) {
    console.log(this)
  }
}

console.log([1, 2, 3].at2(1.6))
console.log([1, 2, 3].at2(-1))

function objectCoercible(it) {
  if (it == undefined) throw TypeError('Can\'t call method on ' + it)
  return it
}

// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-lengthofarraylike
function lengthOfArrayLike(o) {
  return toLength(o.length)
}

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
function toLength(argument) {
  return argument > 0 ? Math.min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0 // 2 ** 53 - 1 == 9007199254740991
}


// https://tc39.es/ecma262/#sec-tointegerorinfinity
function toIntegerOrInfinity(n) {
  const number = +n
  // better number !== number
  if (Number.isNaN(number) || number === 0) return 0
  return (number > 0 ? Math.floor : Math.ceil)(number)
}
