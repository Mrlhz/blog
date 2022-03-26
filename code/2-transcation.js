/**
 * `React事务`
 */
class Transcation {
  perform(anyMethod, wrappers) {
    wrappers.forEach((wrapper) => wrapper.initialize())
    anyMethod()
    wrappers.forEach(({ close }) => {
      isFunction(close) && close()
    })
  }
}

function isFunction(obj) {
  return typeof obj === 'function'
}

const transcation = new Transcation()

let oldFn = () => {
  console.log('原有的逻辑')
}

transcation.perform(oldFn, [{
  initialize() {
    console.log('初始化')
  },
  close() {
    console.log('关闭')
  }
}, {
  initialize() {
    console.log('初始化2')
  },
  close() {
    console.log('关闭2')
  }
}])
