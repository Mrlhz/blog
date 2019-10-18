// after 在多少次之后执行
function after(times, callback) {
  return function () {
    if (--times === 0) {
      callback && callback()
    }
  }
}

let fn = after(3, function () {
  console.log('after')
})


// 解决异步问题
function testAfter() {
  fn()
  fn()
  fn()
}

// run
testAfter()