/**
 * 策略模式
 */

const verificationFunction = {
  isNonEmpty: function (value, errorMsg) { // 不为空 
    if (value === '') {
      return errorMsg
    }
  },
  minLength: function (value, length, errorMsg) { // 限制最小长度 
    if (value.length < length) {
      return errorMsg
    }
  },
  isMobile: function (value, errorMsg) { // 手机号码格式 
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg
    }
  }
}

const isFunction = (fn) => typeof fn === 'function'
const makeParamsToArray = (params) => Array.isArray(params) ? params : [params]

class Validator {
  constructor(strategies) {
    this.strategies = {}
    this.cache = []
    Object.assign(this.strategies, verificationFunction, strategies)
  }
  add(value, rules = []) {
    rules.forEach(rule => {
      let { strategy, params, errorMsg } = rule
      params = typeof params !== 'undefined' ? params : []
      params = makeParamsToArray(params)

      let validatorFunc = this.strategies[strategy]
      validatorFunc = isFunction(validatorFunc) ? validatorFunc : () => `${strategy} is not a function`

      this.cache.push(validatorFunc.apply(this, [value, ...params, errorMsg]))
    })
  }
  start() {
    return this.cache.filter(msg => msg)
  }
}

const validator = new Validator()

validator.add('hello', [{
  strategy: 'isNonEmpty',
  errorMsg: '用户名不能为空',
}, {
  strategy: 'minLength',
  errorMsg: '用户名长度不能小于 10 位',
  params: [10]
}])

validator.add('abc', [{
  strategy: 'minLength',
  errorMsg: '密码长度不能小于 6 位',
  params: 6
}])

validator.add(15277954296, [{
  strategy: 'isMobile',
  errorMsg: '手机号码格式不正确'
}])

const errorMsg = validator.start()

console.log(errorMsg)