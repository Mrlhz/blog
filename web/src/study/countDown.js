
/**
 * @description 倒计时
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval
 *
 * @class CountDown
 */
class CountDown {
  constructor(end, now, interval = true) {
    this.end = new Date(end).getTime()
    this.now = new Date(now).getTime()
    this.interval = interval
    this.callback = () => {}
    this.time = {}
    this.timer = null
  }

  init () {
    this.computed()

    if (this.interval) {
      // setInterval 中 this 指向了window，使用箭头函数
      this.timer = setInterval(() => {
        this.computed()
      }, 1000)
    }

  }

  computed () {
    const D = 1000 * 60 * 60 * 24
    const H = 1000 * 60 * 60
    const M = 1000 * 60
    const S = 1000

    let spanTime = this.end - (this.now - 1000) // 定时器未开始时先执行了一次computed，所以要减1s

    if (spanTime <= 0) {
      console.log(new Date(), 'end')
      clearInterval(this.timer)
      return
    }

    const d = Math.floor(spanTime / D)
    const h = Math.floor((spanTime - d * D) / H)
    const m = Math.floor((spanTime - d * D - h * H) / M)
    const s = Math.floor((spanTime - d * D - h * H - m * M) / S)

    // 有几百毫秒的误差, 少了几百毫秒
    // console.log('e', d * D + h * H + m * M + s * S, s)

    const time = { d, h, m ,s }
    Object.keys(time).forEach((key) => {
      this.time[key] = this.format(time[key])
    })

    // Object.assign(this.time, {
    //   d: this.format(d),
    //   h: this.format(h),
    //   m: this.format(m),
    //   s: this.format(s)
    // })
    this.callback(this.time)
    this.now += 1000
  }

  run (callback) {
    if (typeof callback === 'function') {
      this.callback = callback
    } else {
      throw new Error(`${callback} is a function`)
    }

    this.init()
  }

  format (n) {
    return n * 1 < 10 ? `0${n}` : n
    // n = typeof n === 'string' ? n : n.toString()
    // return n[1] ? n : '0' + n
  }

}

export default CountDown
