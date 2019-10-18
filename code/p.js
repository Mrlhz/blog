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