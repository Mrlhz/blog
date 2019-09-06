# Node


<details>
<summary>批量重命名文件</summary>

```js
/**
 * @description 批量重命名dir下的文件
 *
 * @param {String} dir
 */
async function renameFile(dir, fileName=pins) {
  const files = await readDirFiles(dir)
  try {
    files.forEach((el, index) => {
      let [name, extname] = el.split('.')
      
      index++;
      if (extname !== 'txt') {
        fs.rename(`${dir}/${el}`, `${dir}/${fileName}${index}.${extname}`, (err) => {
          if (err) throw err;
          console.log(`重命名完成: ${el} => ${fileName}${index}.${extname}`);
        })
      }
    })

  } catch (e) {
    console.log('what error', e);
  }
}

renameFile('D:/.../images')
```
</details>


<details>
<summary>保存dir文件名到txt文件中</summary>

```js
const fs = require('fs')
const path = require('path')

function readDirFiles(dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, file) => {
      if (err) reject(err)
      resolve(file)
    })
  })
}

/**
 * @description 保存dir文件名到txt文件中
 *
 * @param {String} dir 文件目录
 * @param {String} txtDir txt输出目录
 */
function writeTxt(dir, txtDir) {
  readDirFiles(dir)
    .then((res) => {
          console.log(res);
      if (res) {
        let str = ''
        res.forEach((el, index) => {
          index++
          index = index > 9 ? index : '0' + index
          // console.log(index,'index')
          str += `${index}. [${el}](\r\n`;
        });
        fs.writeFile(dir + txtDir, str, 'utf8', (err) => {
          if (err) throw err;
          console.log('文件已被保存');
        });
      }
    })
    .catch((err) => {
      console.log(err);
    })
}

// writeTxt('D:/...', '/list.txt')
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