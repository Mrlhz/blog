import { observe } from './index'
import { arrayMethods, observerArray } from './array'
import Dep from './dep'

export function defineReactive (data, key, value) {

  // [1] 递归
  observe(value)

  const dep = new Dep()

  Object.defineProperty(data, key, {
    get () {
      console.log('get')
      if (Dep.target) dep.addSub(Dep.target)
      return value
    },
    set (newValue) {
      if (newValue === value) return
      // [2]
      observe(newValue)
      console.log('set')
      value = newValue
      dep.notify()
    }
  })
}

class Observer {
  constructor(data) {
    this.data = data
    if (Array.isArray(data)) {
      Object.setPrototypeOf(data, arrayMethods)
      observerArray(data)
    } else {
      this.walk(data)
    }
  }

  walk (data) {
    for (const [key, value] of Object.entries(data)) {
      defineReactive(data, key, value)
    }
  }

}

export default Observer
