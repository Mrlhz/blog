/**
 * @description 
 * `请用您熟悉的编程语言，编程实现一个比较任意两个软件版本号大小的函数，`
 * `如 1.2.3a 和 1.2.4b 比较，后者版本号更大，`
 * `请考虑各种情况，不可以使用系统提供的比较函数。`
 * @param {Array} versions
 */
function versionCompare(versions) {
  if (versions[0] === versions[1]) return
  const strArr = versions.map((item) => {
    return item.replace('v', '').replace(/[a-z]/, (match, p1) => {
      // console.log(match, p1)
      if (match) return '.' + match.codePointAt()
    })
  })

  const [t1, t2] = strArr.map((item) => item.split('.'))
  // console.log(t1, t2)

  const len = Math.max(t1.length, t2.length)
  let n = -1
  for (let i = 0; i < len; i++) {
    const a = t1[i] ? t1[i] : 0
    const b = t2[i] ? t2[i] : 0
    if (a === b) continue
    if (a > b) {
      n = 0
      break
    } else {
      n = 1
      break
    }
  }
  console.log(n)
  console.log(`版本号 [ ${versions[n]} ] 更大`)
}

const versions1 = ['1.20.3a', '1.2.3b']
const versions2 = ['1.1.30b', '1.20.3a']
const versions3 = ['1.2.4b', '12.2.4b']
const versions4 = ['v12.2.4', 'v1.2.4b']
const versions5 = ['v5.2.97a', 'v1.20.97a']
const versions6 = ['v1.2.3a', '1.2.3']
const versions7 = ['1.2.3a', '1.2.3b']

versionCompare(versions1)
versionCompare(versions2)
versionCompare(versions3)
versionCompare(versions4)
versionCompare(versions5)
versionCompare(versions6)
versionCompare(versions7)


/**
 * @description 改进版
 *
 * @param {*} version
 */
function versionCompare2 (...version) {
  const defaultRe = /^v?(\d+)\.(\d+)\.(\d+)([a-z])?$/

  if (!version.every((item) => defaultRe.test(item))) {
    throw new Error('格式不规范')
  }
  function convert (val) {
    return val.replace(defaultRe, (_, p1, p2, p3, p4) => {
      // console.log(_, p1, p2, p3, p4)
  
      p4 = p4 ? p4.codePointAt() : 0
      return p1 * 1000 + p2 * 100 + p3 * 10 + p4 * 1
    })
  }
  const versionSumList = version.map((item) => +convert(item))
  const v = Math.max.apply(Math, versionSumList)
  
  console.log(v, `[${ version }] 版本号 [ ${version[versionSumList.indexOf(v)]} ] 更大`)
}

function sum(...args) {
  return args.reduce((acc, cur) => {
    cur = typeof cur === 'number' ? cur : Number.parseInt(cur)
    acc += cur
    return acc
  }, 0)
}

versionCompare2('1.20.3a', '1.2.3b')
versionCompare2('1.1.30b', '1.20.3a')
versionCompare2('1.2.4b', '12.2.4b')
versionCompare2('v12.2.4', 'v1.2.4b')
versionCompare2('v5.2.97a', 'v1.20.97a')
versionCompare2('v1.2.3a', '1.2.3')
versionCompare2('1.2.3a', '1.2.3b')

// versionCompare2('1.2.3a', '2.3b')



function versionCompare3 (...version) {
  const defaultRe = /^v?(\d+)\.(\d+)\.(\d+)([a-z])?$/
  function convert (val) {
    return val.match(defaultRe).slice(1).reduce((acc, cur, index) => {
      cur = /[a-z]/.test(cur) ? cur.codePointAt() : cur
      cur = cur ? +cur : 0
      acc += cur * Math.pow(10, 3 - index)
      return acc
    }, 0)
  }

  const versionSumList = version.map((item) => convert(item))
  const v = Math.max.apply(Math, versionSumList)
  
  console.log(v, `[${ version.join(' | ') }] 版本号 [ ${version[versionSumList.indexOf(v)]} ] 更大`)
}


// versionCompare3('1.20.3a', '1.2.3b')
