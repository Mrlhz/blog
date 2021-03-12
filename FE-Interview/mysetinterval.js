/**
 * @description 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b,...,a+nb 的时间，然后写一个 myClear，停止上面的 mySetInterVal
 */
class mysetinterval {
  constructor(a, b) {
    this.a = a
    this.b = b
    this.n = 1
    this.t = 0
    this.running = false
  }

  async start(fn = () => {}) {
    this.running = true
    while(this.running) {
      this.t = this.a + this.n * this.b

      await this.delay(this.t * 1000)

      if (this.running) {
        typeof fn === 'function' && fn()
        this.n++
      }
    }
  }
  stop() {
    this.n = 1
    this.t = 0
    this.running = false
  }

  delay(timeStamp) {
    return new Promise(resolve => {
      setTimeout(resolve, timeStamp)
    })
  }
}

let ins = new mysetinterval(1, 2)

ins.start(() => {
  console.log(`now: ${new Date()}  a: ${ins.a}  b: ${ins.b} n: ${ins.n} t: ${ins.t}`)
})

ins.stop()