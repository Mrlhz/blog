const { generateRandomArray, isSorted } = require('./sortHelper')

/**
 * @description 希尔排序
 * @param {array} array
 */
function shellSort(array) {

  return array
}


const array = generateRandomArray(10, 1, 100)
let sortArray = shellSort(array)

console.log(isSorted(sortArray))
console.log(sortArray)


function removeDuplicates(str) {

  let arr = str.split('')

  let len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1)
    }
  }
  console.log(arr);
}

removeDuplicates('abbaca')


function frequencySort(s) {
  console.time('t');
  const map = {}
  let len = s.length
  for (let i = 0; i < len; i++) {
    let e = s[i]
    map[e] ? map[e]++ : map[e] = 1
  }

  const sort = []

  for (const [key, value] of Object.entries(map)) {
    sort[value] ? sort[value] = sort[value] + key.repeat(value) :
      sort[value] = key.repeat(value)
  }
  console.timeEnd('t');
  return sort.reverse().join('')
}

frequencySort('tree')
frequencySort('cccaaa')
frequencySort('Aabb')
