/**
 * 深拷贝
 * 
 */

{
  function copy(value, hash = new WeakMap()) {
    if (value == null) return value
    if (value instanceof RegExp) return new RegExp(value)
    if (value instanceof Date) return new Date(value)
    // 函数不需要拷贝
    if (typeof value !== 'object') return value

    if (hash.has(value)) return hash.get(value)
    // 其他情况 对象 数组
    let instance = new value.constructor
    hash.set(value, instance)
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        instance[key] = copy(value[key], hash)
      }
    }
    // console.log(instance)
    return instance
  }

  // test
  let obj = {
    a: {
      a: {
        a: 1,
        fn: function () {console.log(666)},
        b: undefined,
        reg: /\d+/
      }
    }
  }

  // obj.a = obj // Circular

  let copy1 = JSON.parse(JSON.stringify(obj))
  console.log(copy1) // { a: { a: { a: 1, reg: {} } } }

  let copy2 = copy(obj)
  console.log(copy2)
  copy2.a.a.fn()
}

{
  /**
   * @see https://juejin.im/post/5df7175fe51d45582512962c
   * @see https://mp.weixin.qq.com/s/M7KBX3w2KqlWhZFHJSYP6Q
   */
  const MY_IMMER = Symbol('my-immer')

  function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
  }

  function isProxy(value) {
    return !!value && !!value[MY_IMMER]
  }

  function produce(state, callback) {
    const toProxy = new Map() // 存放生成的 proxy 对象
    const toRaw = new Map()

    const getProxy = (data) => {
      if (isProxy(data)) return data
      if (isPlainObject(data) || Array.isArray(data)) {
        if (toProxy.has(data)) {
          return toProxy.get(data)
        }

        const proxy = new Proxy(data, handle)
        toProxy.set(data, proxy)
        return proxy
      }
      return data
    }

    const getCopy = (data) => {
      if (toRaw.has(data)) return toRaw.get(data)
      const copy = Array.isArray(data) ? data.slice() : { ...data }
      toRaw.set(data, copy)
      return copy
    }

    const isChange = (data) => {
      if (toProxy.has(data) || toRaw.has(data)) return true
      // return false
    }

    const finalize = (data) => {
      if (isPlainObject(data) || Array.isArray(data)) {
        if (!isChange(data)) return data
        const copy = getCopy(data)
        Object.keys(copy).forEach((key) => {
          copy[key] = finalize(copy[key])
        })
        return copy
      }

      return data
    }

    const handle = {
      get(target, property, receiver) {
        if (property === MY_IMMER) return target
        const data = toRaw.get(target) || target
        return getProxy(data[property])
      },
      set(target, property, value, receiver) {
        const copy = getCopy(target)
        const newValue = getProxy(value)

        copy[property] = isProxy(newValue) ? newValue[MY_IMMER] : newValue
        return true
      }
    }

    const proxy = getProxy(state)
    typeof callback === 'function' && callback(proxy)
    return finalize(state)
  }

  const state = {
    info: {
      name: 'yck',
      career: {
        first: {
          name: '111'
        }
      }
    },
    data: [1]
  }

  const data = produce(state, draftState => {
    draftState.info.age = 26
    draftState.info.career.first.name = '222'
  })

  console.log('-------')
  console.log(data, state)
  console.log(data.data === state.data)
}