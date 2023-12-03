/**
 * @description camelCased (驼峰式) 命名与 kebab-case（短横线命名）
 */
function camelCased(str = '') {
  return str.replace(/([A-Z])/g, ' $1')
    .replace(/^./, function (str) {
      return str.toUpperCase()
    })
}

camelCased('thisStringIsGood')
// This String Is Good

// https://www.javascriptcn.com/read-10393.html

