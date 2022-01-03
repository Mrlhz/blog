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
function deepCopy(obj, cache = new WeakMap()) {
  if (!isObject(obj)) return obj

  if (cache.has(obj)) {
    return cache.get(obj)
  }

  const copy = Array.isArray(obj) ? [] : {}

  cache.set(obj, copy)

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
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

{
  // 循环引用测试用例
  // https://juejin.cn/post/6844903929705136141#heading-5
  const target = {
    field1: 1,
    field2: undefined,
    field3: {
      child: 'child'
    },
    field4: [2, 4, 8]
  }
  target.target = target

  const copy = deepCopy(target)
  console.log(copy)
}

{
  const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
  }

  target.target = target

  console.time()
  const result = deepCopy(target)
  console.timeEnd()

  console.time()
  const result2 = deepCopy(target)
  console.timeEnd()
}