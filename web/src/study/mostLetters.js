/**
 * @description 统计字符串中出现次数最多的字母
 * @param {string} [str='']
 * @returns
 */
function mostLetters(str = '') {
  let max = 0

  const o = str.split('').reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : acc[cur] = 1
    return acc
  }, {})

  Object.keys(o).forEach((key) => {
    max = Math.max(o[key], max)
  })

  // acc : [], key => e.g. 'a', value === o[key]
  const res = Object.keys(o).reduce((acc, key) => {
    if (max === o[key]) {
      acc.push(key)
    }
    return acc
  }, [])

  console.log(res, max)
  return {
    res,
    max
  }
}

mostLetters('abcdefgaabb')


// 正则
function mostLetters2(str = '') {
  const defaultRe = /([a-zA-Z])\1+/g

  str = str.split('').sort((a, b) => a.localeCompare(b)).join('') // 'aaabbbcdefgggg'

  const orderLetter = str.match(defaultRe) // [ 'aaa', 'bbb', 'gggg' ]
    .sort((a, b) => b.length - a.length) // [ 'gggg', 'aaa', 'bbb' ]

  const max = orderLetter[0].length // 'gggg'.length => 4
  const res = orderLetter.reduce((acc, cur) => {
    if (cur.length === max) acc.push(cur[0])
    return acc
  }, [])

  console.log(orderLetter, res, max)
}


mostLetters2('abcdefggggaabb')
mostLetters2('abcdefggggaabba')
