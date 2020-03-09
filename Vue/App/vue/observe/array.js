import { observe } from './index'

const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto)

const methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']

export function observerArray(inserted) {
  for (let i = 0; i < inserted.length; i++) {
    observe(inserted[i])
  }
}

methodsToPatch.forEach((method) => {

  arrayMethods[method] = function (...args) {
    const result = arrayProto[method].apply(this, args)

    let inserted // 新增的元素
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break;

      case 'splice':
        inserted = args.slice(2)
      default:
        break;
    }

    if (inserted) observerArray(inserted)

    console.log('数组更新')
    return result
  }

})
