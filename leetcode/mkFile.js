const fs = require('fs')
const path = require('path')
const process = require('process')

const params = process.argv.slice(2).reduce((acc, cur) => {
  let [key, value] = cur.split('=')
  !Number.isNaN(Number(value)) ? value = Number(value) : value
  acc[key] = decodeURIComponent(value)
  return acc
}, {})

console.log(params)

function mkFile(params) {
  const { file=Date.now(), link='', desc='', func='_', param='', ext='.js'} = params
  const str =
`/**
 * @description ${desc}
 * @see {@link ${link}}
 * @return {number}
 */
function ${func}(${param}) {

}
`
  fs.writeFileSync(path.resolve(__dirname, file + ext), str, 'utf8', (e) => {
    console.log(e)
  })
}

// console.log(isPalindromic('aba'))
mkFile(params)

// file link desc func
// node leetcode/mkFile.js file=5-longest-palindromic-substring link=https://leetcode-cn.com/problems/longest-palindromic-substring/ desc=%E7%BB%99%E5%AE%9A%E4%B8%80%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%20s%EF%BC%8C%E6%89%BE%E5%88%B0%20s%20%E4%B8%AD%E6%9C%80%E9%95%BF%E7%9A%84%E5%9B%9E%E6%96%87%E5%AD%90%E4%B8%B2%E3%80%82%E4%BD%A0%E5%8F%AF%E4%BB%A5%E5%81%87%E8%AE%BE%20s%20%E7%9A%84%E6%9C%80%E5%A4%A7%E9%95%BF%E5%BA%A6%E4%B8%BA%201000 func=longestPalindrome