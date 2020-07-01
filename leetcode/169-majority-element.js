/**
 * @description 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素
 * @see {@link https://leetcode-cn.com/problems/majority-element/}
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (!nums || !Array.isArray(nums)) return
  const map = nums.reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : acc[cur] = 1
    return acc
  }, {})

  console.log(map)
  let n = nums.length / 2
  let ans = -1
  Object.keys(map).forEach((key) => {
    if (map[key] > n) {
      ans =  Number.parseInt(key)
    }
  })
  return ans
}

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))

function create() {

  const args = [].slice.call(arguments)

  const constructor = args.shift()

  const obj = Object.create({})

  Reflect.setPrototypeOf(obj, constructor.prototype)

  const res = constructor.call(obj, ...args)

  return res instanceof Object ? res : obj
}


function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
  // return { name: '返回对象' }
}

let car2 = create(Car, 'Eagle', 'Talon TSi', 1993)
console.log(car2)