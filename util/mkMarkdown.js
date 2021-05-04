
const fs = require('fs')
const path = require('path')
const media = ['avi', 'wmv', 'mpg', 'mpeg', 'mov', 'rm', 'ram', 'swf', 'flv', 'mp4', 'mp3', 'wma', 'avi', 'rm', 'rmvb', 'flv', 'mpg', 'mkv']

/**
 * @description 判断媒体类型
 * @param {*} file
 * @returns
 */
function isCon(file) {
  const isFile = fs.statSync(file).isFile()
  const isMp4 = media.find(item => `.${item}` === path.extname(file))
  return isFile && isMp4
}

/**
 * @description 获取时间戳
 *
 * @param {*} [list=[]]
 * @returns { }
 */
function handleDate(list = []) {
  return list.map(item => {
    const result = item.name.match(/\d{4}-\d{1,2}-\d{1,2}/)
    const timestamp = new Date(result[0]).getTime()
    console.log(result[0], timestamp)
    item.timestamp = timestamp
    return item
  })
}


function readFileSync() {
  // 读取目录的内容cls
  // files 是目录中文件的名称的数组
  let files = fs.readdirSync(__dirname, { encoding: 'utf8' })
  console.log(files)
  const dirs = [] // 筛选为目录的文件名
  files.forEach(item => {
    const file = path.resolve(__dirname, item)
    if (isCon(file)) {
      dirs.push({
        name: item,
        dir: file
      })
    }
  })
  return dirs
}

let filesPath = readFileSync() // [{ name: '警察故事3：超级警察 - 1992-07-04', dir: 'C:\\迅雷下载\\新下载\\超级警察-2021-05-03.mp4' }]

filesPath = handleDate(filesPath) // [{ name: '警察故事3：超级警察 - 1992-07-04', dir: 'C:\\迅雷下载\\新下载\\超级警察-2021-05-03.mp4', timestamp: 1620000000000 }]

// 根据时间排序
filesPath.sort((a,b) => b.timestamp - a.timestamp)

// 生成json文件
function mkJSON(data = []) {
  const str = JSON.stringify(data, null, 2)
  const filePath = path.resolve(__dirname, 'list.json')
  fs.writeFileSync(filePath, str)
}

// 生成markdown文件
function mkMarkdown(data = []) {
  const str = data.map(item => '- ' + item.name).join('\n')
  const filePath = path.resolve(__dirname, 'list.md')
  fs.writeFileSync(filePath, str)
}

mkJSON(filesPath)
mkMarkdown(filesPath)
console.log(filesPath)
