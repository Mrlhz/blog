
function type2() {
  const class2type = {}
  const types = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error', 'Undefined', 'Null']

  function isType(type) {
    return function (obj) {
      return Object.prototype.toString.call(obj).includes(type)
    }
  }

  types.forEach((type) => {
    class2type['is' + type] = isType(type)
  })
  return class2type
}



function type(obj) {
  const class2type = {}
  const types = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error']
  types.forEach((item) => {
    class2type['[object ' + item + ']'] = item.toLowerCase()
  })

  if (obj == null) {
    return obj + '' // 在 IE6 中，null 和 undefined 会被 Object.prototype.toString 识别成 [object Object]
  }
  return typeof obj === 'object' || typeof obj === 'function' ?
    class2type[Object.prototype.toString.call(obj)] || 'object' :
    typeof obj
}


// test
function testType2() {
  var number = 1 // [object Number]
  var string = '123' // [object String]
  var boolean = true // [object Boolean]
  var und = undefined // [object Undefined]
  var nul = null // [object Null]
  var obj = {
    a: 1
  } // [object Object]
  var array = [1, 2, 3] // [object Array]
  var date = new Date() // [object Date]
  var error = new Error() // [object Error]
  var reg = /a/g // [object RegExp]
  var func = function a() {} // [object Function]

  console.log(Object.prototype.toString.call(Math)) // [object Math]
  console.log(Object.prototype.toString.call(JSON)) // [object JSON]

  function a() {
    console.log(Object.prototype.toString.call(arguments)) // [object Arguments]
  }

  // not good
  console.log(type2().isNumber(number)) // true
  console.log(type2().isString(string)) // true
  console.log(type2().isBoolean(boolean)) // true
  console.log(type2().isUndefined(und)) // true
  console.log(type2().isNull(nul)) // true
  console.log(type2().isObject(obj)) // true
  console.log(type2().isArray(array)) // true
  console.log(type2().isDate(date)) // true
  console.log(type2().isError(error)) // true
}