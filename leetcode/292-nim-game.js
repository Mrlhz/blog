/**
 * @description 你和你的朋友，两个人一起玩 Nim 游戏：
 * 桌子上有一堆石头，每次你们轮流拿掉 1 - 3 块石头。
 * 拿掉最后一块石头的人就是获胜者。你作为先手。
 * 你们是聪明人，每一步都是最优解。
 * 编写一个函数，来判断你是否可以在给定石头数量的情况下赢得游戏。
 * @see {@link https://leetcode-cn.com/problems/nim-game/}
 * @see {@link https://leetcode-cn.com/problems/nim-game/solution/nimyou-xi-by-leetcode/}
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  console.log(n % 4 !== 0)
  return n % 4 !== 0
}

canWinNim(4) // false
