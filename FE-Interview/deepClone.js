/**
 * @description 头条面试官：你知道如何实现高性能版本的深拷贝嘛？
 * @see https://juejin.cn/post/6844904021627502599
 * @see https://github.com/KieSun/Dream/blob/master/content/toys/deepClone/index.js
 */

function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

/**
 * @description 深拷贝数据：只考虑对象和数组
 * @link https://github.com/lodash/lodash/blob/master/.internal/baseClone.js
 * @link https://github.com/vuejs/vuex/blob/dev/src/util.js
 * @link https://www.lodashjs.com/docs/lodash.cloneDeep
 * @param {*} obj
 */
function deepCopy(obj) {
  if (!isObject(obj)) return obj

  const copy = Array.isArray(obj) ? [] : {}

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key])
  })
  return copy
}

{
  var objects = [{ 'a': 1 }, { 'b': 2 }]
 
  var deep = deepCopy(objects)
  console.log(deep[0] === objects[0])
  // => false
  
  
  let testObj = {
    a: 1,
    b: {
      c: 2
    },
    d: [1, 2, 3, 4]
  }
  
  let copyObj = deepCopy(testObj)
  
  copyObj.a = 11
  copyObj.d.push(5)
  
  console.log(testObj, copyObj)
}