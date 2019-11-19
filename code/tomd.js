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

  console.log(res)
  return res
}

