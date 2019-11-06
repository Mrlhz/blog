const fs = require('fs')
const path = require('path')

/**
 * `生成当前目录的文件list`
 */
function generateFileDirectory(dir = __dirname, mdFile = 'list.md') {
  let lists = fs.readdirSync(dir)
  lists = lists.filter((file) => file.indexOf('.js') !== -1)
  console.log(lists);
  const result = []
  for (const file of lists) {
    const filePath = path.join(dir, file)
    if (fs.statSync(filePath).isFile() && file !== mdFile) {
      result.push(`- [](./${file})`)
    }
  }

  fs.writeFile(path.resolve(__dirname, `./${mdFile}`), result.join('\n'), (err) => {
    if (err) throw new Error(err)
  })
}

// generateFileDirectory()


function copy(obj) {
  // if (typeof obj !=='object' || typeof obj == null) return
  let res = Array.isArray(obj) ? [] : {}

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      res[key] = typeof obj[key] === 'object' ? copy(obj[key]) : obj[key]
    }
  }

  console.log(res);
  return res
}

function split1(str) {
  let i = str.length
  const res = []

  while (i > 0) {
    res.unshift(str.substring(i - 3, i))
    i -= 3
  }

  console.log(res.join('.'));
  return res.join('.')
}

function split(str) {
  let i = str.length
  let res = ''

  while (i > 0) {
    res = i - 3 > 0 ? '.' + str.substring(i - 3, i) + res : str.substring(i - 3, i) + res
    i -= 3
  }

  console.log(res)
  return res
}

// https://juejin.im/post/5cedfdbdf265da1baa1e5660
split('10000000000')
split('100000000000')
split('1000000000000')
split('10000000000000')
split('12345678910')

// 寻找字符空隙加 .
'10000000000'.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

// 寻找数字并在其后面加 . 
'10000000000'.replace(/(\d)(?=(\d{3})+\b)/g, '$1.')
// const versions = ['1.20.3a', '1.2.3b']
