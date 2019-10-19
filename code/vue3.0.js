/**
 * 2.0默认会递归
 * 数组改变length无效
 * 对象不存在的属性不能拦截
 */

const log = console.log

function isObject(val) {
  return typeof val === 'object' && val !== null
}

function hasOwn(target, key) {
  return target.hasOwnProperty(key)
}

const toProxy = new WeakMap() // 弱引用映射表 放置的是 原对象 ：代理的对象
const toRaw = new WeakMap() // 被代理过的对象 代理的对象 : 原对象

function createReativeObject(target) {
  if (!isObject(target)) return

  const proxy = toProxy.get(target)
  if (proxy) return proxy // 已代理

  if (toRaw.has(target)) return target // 防止代理过的对象再次被代理

  const baseHandle = {
    get(target, key, receiver) {
      log('get')
      const res = Reflect.get(target, key, receiver)
      return isObject(res) ? reactive(res) : res // 递归
    },
    set(target, key, value, receiver) {
      log('set')
      const hasKey = hasOwn(target, key)
      const oldValue = target[key]
      const res = Reflect.set(target, key, value, receiver)
      if (!hasKey) {
        log('add')
      } else if (oldValue !== value){
        log('update')
      }
      return res
    },
    deleteProperty(target, key) {
      log('delete')
      const res = Reflect.deleteProperty(target, key)
      return res
    }
  }
  const observed = new Proxy(target, baseHandle)
  toProxy.set(target, observed)
  toRaw.set(observed, target)
  return observed
}

function reactive(target) {
  return createReativeObject(target)
}

function test1() {
  let proxy = reactive({name: 'Vue 2.0'})

  proxy.name = { version: 'Vue 3.0' }

  // delete proxy.name

  console.log(proxy)
}

function test2() {
  let object = { name: { n : 'z' } }
  let proxy = reactive(object) // 多层代理 通过get方法来判断
  proxy.name.n = 'a'
  reactive(proxy)
  reactive(proxy)
}


function test3() {
  let arr = [1,2,3]
  let proxy = reactive(arr)
  proxy.length = 100
  log(arr)
}

test2()