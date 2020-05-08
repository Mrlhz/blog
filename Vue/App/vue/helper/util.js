
export function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

export function query(el) {
  if (typeof el === 'string') {
    return document.querySelector(el)
  }
  return el
}

/**
 * @description 取值
 * vm vm._data: { info: { name: 'lhr' } }
 * expr 'info.name' =>
 * ["info", "name"]
 * info = info['name']
 * return info
 *
 * @param {*} vm Vue实例
 * @param {*} expr
 * @returns
 * @todo https://www.lodashjs.com/docs/lodash.get
 */
function getValue(vm, expr) {
  const keys = expr.split('.')
  return keys.reduce((acc, cur) => {
    acc = acc[cur.trim()]
    return acc
  }, vm)
}

// ?: 匹配不捕获
const defaultRe = /\{\{((?:.|\r?\n)+?)\}\}/g
export function compilerText (node, vm) {
  node.textContent = node.textContent.replace(defaultRe, (...args) => {
    return getValue(vm, args[1])
  })
}

export function compiler (node, vm) {
  let childNodes = node.childNodes;

  [...childNodes].forEach((child) => {
    if (child.nodeType === 1) {
      // 元素
      compiler(child, vm)
    } else if (child.nodeType === 3) {
      // 文本
      compilerText(child, vm)
    }
  })
}
