const fs = require('fs')
const path = require('path')

const filePath = path.resolve('C:\\Users\\l\\Desktop\\面试\\掌众科技', '3.csv')

/**
 * @description A?. 日志分析 :3.csv 的文件，约有 150 万行, 其格式为:id, event_type, ad_type, ip1, ip2, ext
 * 请按照 ad_type 分类统计每种 ad_type 的数目，并按数量倒叙排序
 * @class LogAnalysis
 */
class LogAnalysis {
  constructor() {
    const {
      data,
      length
    } = this.init()
    this.data = data
    this.length = length
    this.filterList = null
  }

  init() {
    try {
      const stringData = fs.readFileSync(filePath, {
        encoding: 'utf8'
      }) // string

      const data = stringData.split('\n').map((item) => item.split(','))

      return {
        data,
        length: data.length
      }
    } catch (e) {
      throw e
    }
  }

  sortByAdType() {
    // 按照 ad_type 分类统计每种 ad_type 的数目，并按数量倒叙排序 // 1567073
    const totalList = this.data.reduce((acc, cur) => {
      const adType = cur[2]
      if (adType) {
        acc[adType] ? acc[adType]++ : acc[adType] = 1
      }
      return acc
    }, {})

    const res = Object.keys(totalList)
      .map((type) => {
        return {
          type,
          value: totalList[type]
        }
      })
      .sort((a, b) => b.value - a.value)

    return res
  }

  filterData() {
    return this.data.filter((item) => {
      return item[1] === '7' || item[1] === '9'
    })
  }

  calculate() {
    // 筛选 id 相同的行
    this.filterList = this.filterData() // 505634
    const idList = this.filterId(this.filterList) // 55547

    console.log(this.filterList.slice(0, 10), idList)

    
  }

  async calc(list = []) {

    for (let i = 0, len = this.filterList; i < len; i++) {
      const item = this.filterList[i]
      for (let j = 0; j < list; j++) {
        const id = list[j]
        if (item[0] === id) {

        }
      }
    }
  }

  filterId(data=[]) {
    const map = data.reduce((acc, cur) => {
      const id = cur[0]
      acc[id] ? acc[id]++ : acc[id] = 1
      return acc
    }, {})

    return Object.keys(map).reduce((acc, key) => {
      if (map[key] > 1) {
        acc.push(key)
      }
      return acc
    }, [])
  }

}

// id, event_type, ad_type, ip1, ip2, ext
console.time('time')

const logs = new LogAnalysis()
console.log('按照 ad_type 分类统计每种 ad_type 的数目，并按数量倒叙排序')
console.log(logs.sortByAdType())
// console.log(logs.calculate())
console.timeEnd('time')

// 1行代码 shell
// cat 3.csv | awk -F "," '{print $3}' | sort | uniq -c | sort -nrk 1
