
function eq (value, other) {

  // null
  if (value == null || other === null) return false

  //  +0 -0
  if (value === other) return value !== 0 || 1 / value === 1 / other

  // NaN
  // if (value !== value) return other !== other
  if (value !== value) return other !== other

  // value 为基本类型 other 为function
  const type = typeof value
  if (['function', 'object'].indexOf(type) < 0 && typeof other !== 'object') return false

  // deepEq

  return deepEq(value, other)
}

const toString = Object.prototype.toString

const res = []
let i = 0

function deepEq (value, other) {

  const className = toString.call(value)

  if (className !== toString.call(other)) return false

  switch(className) {
    case '[object RegExp]':
    case '[object String]':
      return '' + value === '' + other
    case '[object Number]':
      if (+value !== +value) return +other !== +other
      return +value === 0 ? (1 / +value === 1 / other) : (+value === +other)
    case '[object Date]':
    case '[object Boolean]':
      return +value === + other
  }

  if (Array.isArray(value)) {
    let length = value.length

    if (length !== other.length) return false

    while (length--) {
      if (!eq(value[length], other[length])) return false
    }
  } else {
    // console.log('do')
    const keys = Object.keys(value)
    let key
    let length = keys.length

    // if (length !== Object.keys(other).length) return false

    while (length--) {
      key = keys[length]
      const r = other.hasOwnProperty(key) && eq(value[key], other[key])
      // if (!r) return false
      i++ // todo 
      if (!r) {
        res.push(key+i)
        return false
      }
    }
  }

  return true
}

// const object = { 'a': 1, 'b': { c: 2 }, d: 3 };
// const other = { 'a': 1, 'b': { c: 2 }, d: 3 };

const object = { 'a': 1, 'b': { c: { e: 4 } }, d: 3 };
const other = { 'a': 1, 'b': { c: 2 }, d: 3 };
// const other = { 'a': 1, 'b': { c: 2 } };
// eq(object, other)
console.log(res, i)
// console.log(eq(object, other), 'eq')

module.exports = {
  eq
}