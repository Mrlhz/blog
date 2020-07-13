/**
 * @description 两数相加
 * @see {@link https://leetcode-cn.com/problems/add-two-numbers/}
 * @param {ListNode} ListNode1
 * @param {ListNode} ListNode2
 * @return {ListNode}
 * @todo bad
 */
var addTwoNumbers = function (ListNode1 = [], ListNode2) {
  const getSum = node => node.reverse().reduce((acc, cur) => {
    acc += cur
    return acc
  }, 0)

  const sum = getSum(ListNode1) + getSum(ListNode2)

  return (sum + '').split('').map((item) => Number(item)).reverse()
}

console.log(addTwoNumbers([2,4,3], [5,6,4]))