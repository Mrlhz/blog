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


function frequencySort(str) {
  const map = {}
  for (let i = 0; i < str.length; i++) {
    let e = str[i]
    map[e] ? map[e].push(e) : map[e] = [e]
  }
  
  const sort = {}
  Object.keys(map).forEach((key) => {
    sort[map[key].length] = key
  })
  console.log(sort);
}

frequencySort('tree')