const fs = require('fs')
const path = require('path')


async function removeDir(filePath) {
  try {
    const stat = await fs.stat(filePath)

    if (stat.isDirectory()) {
      let dirs = await fs.readdir(filePath)
      dirs = dirs.map((dir) => removeDir(path.join(filePath, dir)))

      await Promise.all(dirs)
      await fs.rmdir(filePath)
    } else {
      await fs.unlink(filePath)
    }
  } catch (e) {
    throw new Error(e)
  }
}

// removeDir(path.resolve(__dirname, './test'))


async function readdir(filePath) {
  try {
    let arr = [filePath]
    let index = 0
    let current = void 0
    while(current = arr[index++]) {
      let dirs = await fs.readdir(current)
      dirs = dirs.map((dir) => path.join(current, dir))
      arr = [...arr, ...dirs]
    }

    console.log(arr)
  } catch (e) {
    throw new Error(e)
  }
}

// readdir(path.resolve(__dirname, '../code'))
