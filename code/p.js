/**
 * `1. 回调嵌套，回调地狱`
 * `2. 不好捕获错误`
 * `3. 多个异步同步的问题`
 */

const promise = new Promise((resolve, reject) => {
  console.log('start')
  resolve(100)
  console.log('end')
})

promise.then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
