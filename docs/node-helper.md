# Node

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
<summary></summary>

</details>
