/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for the
 * resulting composite function.
 *
 * @see https://github.com/reduxjs/redux/blob/master/src/compose.ts
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions from right
 *   to left. For example, `compose(f, g, h)` is identical to doing
 *   `(...args) => f(g(h(...args)))`.
 */
function compose(...funcs) {
  if (funcs.length === 0) return arg => arg

  if (funcs.length === 1) return funcs[0]

  return funcs.reduce((a, b) => (...args) => a(b(...args)))

}

function _compose(...funcs) {
  return funcs.reduce(function (a, b) {
    return function (...args) {
      return a(b(...args))
    }
  })
}

let greet    = function(name){ return "hi: " + name; }
let exclaim  = function(statement=''){ return statement.toUpperCase() + "!"; }
let fn = compose(greet, exclaim)
// let fn = compose(exclaim, greet)
console.log(fn('lhz'))

{
  /**
   * @see Polyfill
   * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
   */
  Array.prototype.reduce2 = function (callbackfn, initialValue) {
    for (let i = 0, len = this.length; i < len; i++) {
      if (typeof initialValue === 'undefined') {
        // initialValue = callbackfn(this[i], this[i + 1], i + 1, this)
        // i++
        initialValue = callbackfn(this[0], this[++i], i, this)
      } else {
        initialValue = callbackfn(initialValue, this[i], i, this)
      }
    }

    return initialValue
  }
  // e.g. 1
  let sum = [1, 2, 3, 4, 5].reduce2((acc, cur) => (acc += cur, acc))
  console.log(sum) // 15

  // e.g. 2
  var initialValue = 0;
  var sum1 = [{x: 1}, {x:2}, {x:3}].reduce2(function (accumulator, currentValue) {
      return accumulator + currentValue.x
  }, initialValue)
  console.log(sum1) // 6

  // e.g. 3
  var flattened = [[0, 1], [2, 3], [4, 5]].reduce2(
    function(a, b) {
      return a.concat(b)
    }, [])
  
  console.log(flattened) // [ 0, 1, 2, 3, 4, 5 ]
}

