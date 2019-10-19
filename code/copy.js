/**
 * 
 */

function copy(value) {
  if (value == null) {
    return value
  }
  if (value instanceof RegExp) {
    return new RegExp(value)
  }
  if (value instanceof Date) {
    return new Date(value)
  }
  // 函数不需要拷贝
  if (typeof value !== 'object') return value
  
}