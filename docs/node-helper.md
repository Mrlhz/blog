# Node

<details>
<summary></summary>

```js

```
</details>


<details>
<summary>图片格式转化</summary>

```js
const fs = require('fs');

const sharp = require('sharp');

/**
 * @description 图片格式转化
 * @see https://sharp.pixelplumbing.com/en/stable/api-input/
 *
 * @param {String} input  输入文件夹路径
 * @param {String} output 输出文件夹路径
 * @param {string} [fileType='jpg'] JPEG, PNG, WebP, TIFF, DZI
 * @returns
 */
function readDir(input, output, fileType = 'jpg') {
  let result = []

  fs.readdir(input, (err, files) => {
    // console.log(Array.isArray(files));
    if (err) return console.error(err);

    files.forEach(function (file) {

      var name = file.split('.')[0]
      sharp(`${input}/${file}`)
        .toFile(`${output}/${name}.${fileType}`, async function (err, info) {
          if(err) console.log(err);
          console.log(info);
          result.push(info)
        });
      
      // A Promise is returned
      // sharp(`${input}/${file}`)
      // .toFile(`${output}/${name}.${fileType}`)
      // .then( (info) => { console.log(info.size); })
      // .catch( (err) => { console.log(err); });

    });
    console.log('result', result);
  })
  return result;
}
```
</details>

<details>
<summary>判断路径、文件夹、文件存在</summary>

```js
const fs = require('fs');

// 1
if (fs.existsSync('/etc/passwd')) {
  console.log('文件已存在');
}

// 2
try {
  fs.accessSync(path.resolve(__dirname, 'screenshot.png'), fs.F_OK);
  console.log('exist');
} catch (err) {
  console.error('does not exist',err);
}

// 3 http://nodejs.cn/api/fs.html#fs_fs_access_path_mode_callback
// 检查当前目录中是否存在该文件。
fs.access(__dirname, fs.constants.F_OK, (err) => {
  console.log(`${file} ${err ? '不存在' : '存在'}`);
});

// 4
let p = 'D:\\web\\...screenshot.pn'

fs.stat(p, (err, srats) => {
  console.log(err, srats)
})

// 存在
// err
null
// stats
Stats {
  dev: 1309048587,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: undefined,
  ino: 2533274791026299,
  size: 1757810,
  blocks: undefined,
  atimeMs: 1567723197346.259,
  mtimeMs: 1567723197348.2551,
  ctimeMs: 1567723202332.2637,
  birthtimeMs: 1567723197346.259,
  atime: 2019-09-05T22:39:57.346Z,
  mtime: 2019-09-05T22:39:57.348Z,
  ctime: 2019-09-05T22:40:02.332Z,
  birthtime: 2019-09-05T22:39:57.346Z 
}

// 不存在
{ [Error: ENOENT: no such file or directory, stat 'D:\...screenshot.pn']
  errno: -4058,
  code: 'ENOENT',
  syscall: 'stat',
  path: 'D:\\...screenshot.pn'
}


// 废弃，改为使用 fs.stat() 或 fs.access()
fs.exists(path.resolve(__dirname, 'screenshot.png'), (e) =>{
  console.log(e); // 存在输出true
})
```
</details>


<details>
<summary>异步保存文件</summary>

```js
const fs = require('fs')
const path = require('path')
const log = console.log

/**
 * @description 异步保存文件，文件已存在则替换
 * @param {Object} [options={fileName, data, output}] fileName, data, output, encoding
 * @returns
 */
function writeFile(options = {}) {
  let { fileName = '未命名' + Date.now(), data = '', output = '', encoding = 'utf8' } = options
  // log('output', output)
  output = output ? path.resolve(output, fileName) : path.join(__dirname, fileName)
  data = typeof data === 'string' ? data : JSON.stringify(data)
  
  // content = content.replace(/\n\r/gi, '').replace(/\n/gi, '').replace(/\r/gi, '')

  return new Promise((resolve, reject) => {
    fs.writeFile(output, data, encoding, (err) => {
      if (err) {
        log('写入失败', err)
        reject(err)
      } else {
        log(`写入成功 => ${output}`)
        resolve('success')
      }
    })
  })
}

writeFile({ fileName: 'test.js' }) // 写入成功 => test.js
writeFile({}) // 写入成功 => 未命名1570149969554
```
</details>



<details>
<summary>同步创建文件夹</summary>

```js
const fs = require('fs')
const path = require('path')
const log = console.log

/**
 * @description 创建文件夹，返回文件夹绝对路径，文件夹存在则不创建，返回绝对路径
 * @param {String} dirName new dir name
 * @param {String} pathName  A path to a file. If a URL is provided, it must use the file: protocol.
 * @returns {String} path 
 */
function mkdirSync(dirName, pathName='.') {
  let output = path.resolve(pathName, dirName)
  if (fs.existsSync(output)) {
    log('dir ' + output + ' exist')
    return output
  }
  fs.mkdirSync(output)
  log('mkdir '+ output +' success')
  return output
}

mkdirSync('test') // 当前目录创建test文件夹
```
</details>