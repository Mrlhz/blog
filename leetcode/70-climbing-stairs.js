/**
 * @description
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 * @see {@link https://leetcode-cn.com/problems/climbing-stairs/}
 * @param {number} n
 * @return {number}
 * @return {number}
 */
function climbStairs(n) {
  const dp = []
  dp[0] = 1
  dp[1] = 1
  let i = 2
  while (i <= n) {
    dp[i] = dp[i -1] + dp[i-2]
    i++
  }
  console.log(dp[n])
}


let r1 = climbStairs(2)
let r2 = climbStairs(3)
climbStairs(5)
console.log(r1, r2)


