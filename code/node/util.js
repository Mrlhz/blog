const fs = require('fs')
const path = require('path')

const util = require('util')
const promisify = util.promisify

// promise
{
  const read = promisify(fs.readFile)

  read(path.resolve(__dirname, '../data/name.txt'), 'utf8')
    .then((data) => console.log(data))
}

{
  const promisifyAll = (obj) => {
    for (const key in obj) {
      if (typeof obj[key] === 'function')
        obj[key] = promisify(obj[key])
    }
  }

  promisifyAll(fs)

  fs.readFile(path.resolve(__dirname, '../data/name.txt'), 'utf8')
    .then((data) => console.log(data))
}

// inherits
{
  function Parent() {
    this.type = 'parent'
  }

  Parent.prototype.say = function() {
    console.log('say')
  }

  function Child() {}

  util.inherits(Child, Parent) // Object.setPrototypeOf(Child.prototype, Parent.prototype)
  
  let child = new Child()
  child.say()
}