const { data } = require('./deptTreeData')

/**
 * @description 无递归扁平化Tree数据，使用堆栈，修改了原数组
 * @param {Array} data 
 * @reference https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 * @returns 
 */
 function flattenTree(data = [], setting = {}) {
  const { idKey = 'id', piIdKey = 'pId', rootId = null, childrenKey = 'children', childrenValue = [] } = setting
  const stack = [...data]
  const result = []
  while(stack.length) {
    const next = stack.shift()
    if (next && Array.isArray(next[childrenKey]) && next[childrenKey].length) {
      stack.push(...next[childrenKey])
      next[childrenKey] = childrenValue
    }

    result.push(next)
  }
  return result
}


{
  console.time('flattenTree')
  const result = flattenTree(data, { childrenKey: 'children' })
  console.timeEnd('flattenTree')
  // console.log(result)
  console.log(result.length)
}
