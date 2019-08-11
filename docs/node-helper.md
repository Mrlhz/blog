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