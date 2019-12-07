

// 解决Node.js的命令行输出中文乱码问题
// https://www.jianshu.com/p/a07eeb43d8b3
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const iconv = require('iconv-lite')

async function lsExample() {
  const { stdout, stderr } = await exec('E:', { encoding: 'buffer'}) // || binary
  console.log('stdout:', iconv.decode(stdout, 'cp936'));
  console.error('stderr:', stderr)
}


lsExample()