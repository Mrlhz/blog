
function formatTime(date=new Date()) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function ajax (config = {}) {
  let {
    url,
    method = 'get',
    async = true,
    data = null,
    responseType,
    timeout = 0,
    withCredentials = false
  } = config

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url, async)

    xhr.onreadystatechange = function () {
      if (!(/^(2|3)\d{2}$/.test(xhr.status))) return

      if (xhr.readyState === 2) {
        resolve(new Date(xhr.getResponseHeader('Date')))
      }
    }

    xhr.send(data)

    xhr.onerror = function () {
      reject('Network Error')
    }

  })
    

}

class CountDown {
  constructor(now, end) {
    this.now = new Date(now).getTime() // 从服务器获取时间
    this.end = new Date(end).getTime()
    this.duration = this.end - this.now
    this.timer = null
    this.time = {}

    // this.init()
  }

  init (callback) {
    if (typeof callback === 'function') {
      this.callback = callback
    } else {
      throw new Error(`${callback} is not a function`)
    }

    this.computed()
    // setInterval 中 this 指向了window
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval

    // todo 时间过了就不执行
    if (this.duration > 0) {
      this.timer = setInterval(() => this.computed(), 1000)
    } else {
      return
    }
  }

  computed () {
    let spanTime = this.end - (this.now - 1000) // 定时器未开始时先执行了一次computed，所以要减1s

    if (spanTime <= 0) {
      clearInterval(this.timer)
      this.timer = null
      return
    }

    const d = 1000 * 60 * 60 * 24
    const h = 1000 * 60 * 60
    const m = 1000 * 60
    const s = 1000

    let day = Math.floor(spanTime / d)

    let hours = Math.floor(spanTime / h)

    let minutes = Math.floor((spanTime - hours * h) / m)

    let seconds = Math.floor((spanTime - hours * h - minutes * m) / s)

    Object.assign(this.time, {
      day,
      hours,
      minutes,
      seconds
    })

    if (this.callback) {
      this.formatTime(this.time)
      this.callback(this.time)
    }
    // const time = [hours, minutes, seconds].map((item) => CountDown.format(item))

    // console.log(time, time.join(':'), new Date())

    this.now += 1000
  }

  formatTime (t = {}) {
    Object.keys(t).forEach((key) => {
      t[key] = CountDown.format(t[key])
    })
  }

  static format (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }
}

const c = new CountDown(new Date(), '2020/03/14 00:00:00')

c.init((t) => {
  const { day, hours, minutes, seconds } = t
  // console.log(day, hours, minutes, seconds)
  if (parseInt(hours) + parseInt(minutes) + parseInt(seconds) === 0) {
    console.log('时间到', new Date())
  } else {
    console.log( `${hours}:${minutes}:${seconds}`, new Date())
  }
  
})

// todo
// http://www.daojishiwang.com/
