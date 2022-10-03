/**
 * @description 输出今天是什么圩日
 * @example
 * calcMarketDay()
 * calcMarketDay('2022-09-30')
 */
function calcMarketDay(d = new Date()) {
  const oneDay = 24 * 60 * 60 * 1000

  const 卖酒圩 = new Date(2022, 10, 3) // 卖酒圩

  const date = d instanceof Date ? d : new Date(d)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const today = new Date(year, month, day)

  let timeDiff = today.getTime() - 卖酒圩.getTime()
  timeDiff = timeDiff >= 0 ? timeDiff : Math.abs(timeDiff + oneDay)
  const dayDiff = timeDiff / oneDay
  const diff = dayDiff % 3

  const map = {
    0: '卖酒圩',
    1: '龙安圩', // 大唐圩同一日
    2: '平山圩'
  }
  return map[diff]
}

calcMarketDay('2022-09-30')
calcMarketDay('2022-10-06')
calcMarketDay('2022-10-08')
