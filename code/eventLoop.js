// 栈：先进后出
// 队列：先进先出
// 执行上下文   作用域(定义)  js静态作用域
// 立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务
// 28：00

// 浏览器和Node环境 在Node v11 之后是一样的

function test() {
  setTimeout(() => {
    console.log('setTimeout1')
    Promise.resolve().then(() => {
      console.log('then1')
    })
    Promise.resolve().then(() => {
      console.log('then3')
    })
  })
  
  setTimeout(() => {
    console.log('setTimeout2')
  })
  
  Promise.resolve().then(() => {
    console.log('then2')
  })
}

// then2
// setTimeout1
// then1
// then3
// setTimeout2

function promiseRun() {
  console.log('---------')
  const p = Promise.resolve()

  void(() => {
    const implicit_promise = new Promise(resolve => {
      const promise = new Promise(res => res(p)) // 1
      // 执行顺序 promise需要等到 内部的resolve(p)
      promise.then(() => {
        console.log('after: wait')
        resolve()
      })


    })
    return implicit_promise
  })()

  p.then(() => {
    console.log('tick: a')
  }).then(() => {
    console.log('tick: b')
  }).then(() => {
    console.log('tick: c')
  })
}


function asyncRun() {
  async function async1() {
    console.log('async1 start'); // 2
    await async2()
    console.log('async1 end'); // 6
  }

  async function async2() {
    console.log('async2'); // 3
  }

  console.log('script start'); // 1

  setTimeout(() => {
    console.log('setTimeout'); // 8
  }, 0)

  async1()

  new Promise((resolve) => {
    console.log('promise1'); // 4
    resolve()
  }).then(() => {
    console.log('promise2'); // 7
  })

  console.log('script end'); // 5
}


asyncRun()