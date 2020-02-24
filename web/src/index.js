
class Hello {
  constructor(msg) {
    this.msg = msg
  }

  say() {
    console.log(this.msg)
  }
}


new Hello('webpack tutorial').say()