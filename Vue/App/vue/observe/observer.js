import { observe } from './index'

export function defineReactive (data, key, value) {

  // [1] 递归
  observe(value)

  Object.defineProperty(data, key, {
    get () {
      console.log('get')
      return value
    },
    set (newValue) {
      if (newValue === value) return
      // [2]
      observe(newValue)
      console.log('set')
      value = newValue
    }
  })
}

class Observer {
  constructor(data) {
    this.data = data

    this.walk(data)
  }

  walk (data) {
    for (const [key, value] of Object.entries(data)) {
      defineReactive(data, key, value)
    }
  }

}

export default Observer
