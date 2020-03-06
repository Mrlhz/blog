const assert = require('assert')
const { deepEqual } = assert

const { eq } = require('./eq')

// console.log(eq(object, other), 'eq')

// console.log(eq(0, 0)) // true
// console.log(eq(0, -0)) // false

// console.log(eq(NaN, NaN)); // true
// console.log(eq(Number(NaN), Number(NaN))); // true

// console.log(eq('Curly', new String('Curly'))); // true

// console.log(eq([1], [1])); // true
// console.log(eq({ value: 1 }, { value: 1 })); // true


assert.deepEqual(eq(0, 0), true, '0 === 0: true')

try {
  deepEqual(eq(0, -0), true, '0 === -0: false')
} catch (e) {
  console.log(e.message)
}
deepEqual(eq(NaN, NaN), true, 'NaN === NaN: true')
deepEqual(eq(Number(NaN), Number(NaN)), true, 'Number(NaN) === Number(NaN): true')
deepEqual(eq('Curly', new String('Curly')), true, `'Curly' === new String('Curly'): true`)
deepEqual(eq([1], [1]), true, '[1], [1]): true')
deepEqual(eq({ value: 1 }, { value: 1 }), true, '{ value: 1 } === { value: 1 }: true')