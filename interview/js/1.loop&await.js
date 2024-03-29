const square = num => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

const list = [1, 2, 3];


// list.forEach(async x => {
//   const res = await square(x)
//   console.log(res)
// })

{
  async function test() {

    for (let i = 0; i < list.length; i++) {
      const res = await square(list[i])
      console.log(res)
    }

  }


  // test()
}

{
  let i = 0
  async function recursion() {
    if (i >= list.length) return

    const result = await square(list[i])
    console.log(result)
    i += 1
    recursion()
  }

  // recursion()
}


{
  // 基于for await...of循环处理
  // 触发Sys
  async function test() {
    let index = 0;

    list[Symbol.asyncIterator] = async function* () {
      while (index <= 2) {
        yield square(list[index++])
      }
    }

    for await (let res of list) {
      console.log(res)
    }
  }

  console.log('for await...of')
  // test()
}

{
  function sleep(ms) {
    const optional = { delay: ms }
    return new Promise(resolve => setTimeout(resolve, ms, optional))
  }
  const list = Array.from({ length: 5 }).map((_, i) => sleep(1000 * (i + 1)))

  console.log('list: ', list)
  async function main() {
    for await (let res of list) {
      console.log(res)
    }
  }

  main()
}
