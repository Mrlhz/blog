const deepCopy = require('../lang/deepClone')

const objects = [{ 'a': 1 }, { 'b': 2 }]

const testObj = {
  a: 1,
  b: {
    c: 2
  },
  d: [1, 2, 3, 4]
}

const copyObj = deepCopy(testObj)
copyObj.a = 11
copyObj.d.push(5)

test('deepClone: 深拷贝', () => {
  expect(deepCopy(objects)).toStrictEqual([{ 'a': 1 }, { 'b': 2 }])
  expect(deepCopy(objects)[0]).toStrictEqual(objects[0]) // => false

  expect(copyObj.a).not.toBe(testObj.a)
  expect(copyObj.d).not.toStrictEqual(testObj.d)

})

// 循环引用测试用例
const target1 = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child'
  },
  field4: [2, 4, 8]
}
target1.target1 = target1

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

// https://juejin.cn/post/6844903929705136141#heading-5
test('deepClone: 深拷贝循环引用测试用例', () => {
  expect(deepCopy(target)).toBeTruthy()
  expect(deepCopy(target1)).toBeTruthy()
})
