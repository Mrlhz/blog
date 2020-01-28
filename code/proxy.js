let obj = {
  name: 'lhz',
  age: {
    n: 10
  }
}


let arr = []
let handler = {
  get(target, key) {
    if (typeof target[key] === 'object') {
      return new Proxy(target[key], handler) // 递归
    }

    return Reflect.get(target, key)
  },
  set(target, key, value) {
    if (key === 'length') return true
    target[key] = value // ?
    console.log('update', key, value)
    return Reflect.set(target, key, value)
  }
}


let proxy = new Proxy(obj, handler)
proxy.age = {}
console.log(obj)