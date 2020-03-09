import { initState } from './observe/index'

function Vue(options) {
  console.log(options)
  this.init(options)
}

Vue.prototype.init = function (options) {
  const vm = this
  vm.$options = options

  initState(vm)
}

// class Vue {
//   constructor(options) {
//     this.options = options

//     this.init(options)
//   }

//   init (options) {
//     console.log(this, 3)
//     const vm = this
//     vm.$options = options
//     initState(vm)
//   }
// }

export default Vue
