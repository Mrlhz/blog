function isObject(obj) {
  return !!obj && typeof obj === 'object'
}

class Vue {
  constructor(options) {
    this.data = options.data
    this.observer(this.data)
  }

  observer(value) {
    console.log(value, 'value');
    if (!isObject(value)) {
      console.log('not object')
      return
    }

    Object.keys(value).forEach((key) => {
      console.log(key)
      this.defineReactive(value, key, value[key])
    })
  }

  defineReactive(obj, key, value) {
    const self = this
    Object.defineProperty(obj, key, {
      get() {
        return value
      },
      set(newValue) {
        if (newValue === value) return
        value = newValue
        self.update(newValue)
      }
    })
  }

  update(value) {
    cb(value)
  }
}

function cb(value) {
  console.log('update', value)
  document.querySelector('#app').innerText = value
}
