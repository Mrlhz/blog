/**
 * @description 斐波那契数列
 * @see https://leetcode-cn.com/problems/fibonacci-number/
 * @param {*} n
 * @returns
 */
function fib(n) {
  if (n < 0) return
  const arr = [0n, 1n]
  
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  // console.log(arr)
  return arr[n]
}

// 0、1、1、2、3、5、8、13、21、34
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.time('time')
console.log(fib(100))
console.timeEnd('time')


function fibo(n) {
  if (n <= 0) return 0
  if (n === 1 || n === 2) return 1

  let n1 = 1n
  let n2 = 1n
  for (let i = 3; i <= n; i++) {
    n2 = n1 + n2
    n1 = n2 - n1
  }

  console.log(`F${n}的准确数值为 ${n2}`)
  return n2
}


console.time('time')
console.log(fibo(100))
console.timeEnd('time')


function fibonacci(value = 4) {
  const arr = [0n, 1n]
  let i = 2
  while (true) {

    arr[i] = arr[i - 1] + arr[i - 2]
    if (arr[i].toString().length === value) {
      // console.log(i, arr[i])
      break;
    }
    i++
  }

  console.log(`斐波那契数列中，第一个有 ${value} 位数字的是第${i}项`,  arr[i])
  return i
}

fibonacci(1000)