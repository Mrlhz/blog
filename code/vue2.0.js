// Vue 2.0 响应式原理
// 响应式：数据变化，视图更新

// 如果属性不存在，新增的属性不是响应式的
// 需要对数组上的方法进行重写 push shift unshift pop push reverse


const log = console.log

function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

function observerArray(inserted) {
  for (let i = 0; i < inserted.length; i++) {
    observer(inserted[i])
  }
}

// [6]
function setPrototypeOfArray(target) {
  const ArrayPrototype = Array.prototype
  const proto = Object.create(ArrayPrototype);
  ['push','unshift', 'shift', 'pop', 'reverse', 'sort', 'splice'].forEach((method) => {
    // 函数劫持
    // updateView('array') // 切片编程
    proto[method] = function (...args) {
      const result = ArrayPrototype[method].apply(this, args)

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

  Object.setPrototypeOf(target, proto)
}

function observer(target) {
  if (!isObject(target)) {
    console.log(`observer: ${target}`)
    return target
  }

  if (Array.isArray(target)) {
    setPrototypeOfArray(target)
    observerArray(target)
    // target.__proto__ = proto [6.1]
    // Object.setPrototypeOf(target, proto) // [6.2]
    // for (let i = 0; i < target.length; i++) { // [6.3]
    //   observer(target[i])
    // }
  } else {
    for (const key in target) {
      defineReactive(target, key, target[key]) // [1]
    }
  }
}

function defineReactive(target, key, value) {
  observer(value) // [4] 递归 对象多层嵌套
  // [2]
  Object.defineProperty(target, key, {
    get() {
      // 依赖收集
      return value
    },
    set(newValue) {
      if (newValue !== value) {
        // if (isObject(newValue)) observer(newValue)
        observer(newValue) // [5]
        updateView('set') // [3]
        value = newValue
      }
    }
  })
}

function updateView(index) {
  log(index, 'update view')
}

// 基础
// let data = { msg: 'Vue 2.0' }
// observer(data)

// data.msg = 'Vue 3.0'

// log(data, data.msg)

// 2
// let data = {
//   msg: 'Vue 2.0',
//   version: {
//     v: 0
//   }
// } // [4]
// observer(data)
// data.version = {
//   v: 2
// }
// data.version.v = 3

// log(data.version.v)

// 3
let data = {
  msg: 'Vue 2.0',
  version: [1, 2, 3]
}
observer(data)
// data.version.push(4)
// log(data.version)
