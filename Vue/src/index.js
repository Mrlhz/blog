import Vue from 'Vue'

const vm = new Vue({
  el: '#app',
  data () {
    return {
      msg: 'hello',
      info: {
        name: 'lhz',
        age: 25
      },
      hobby: ['reading', 'watching TV']
    }
  },
  computed: {},
  watch: {}
})

console.log(vm)
// console.log(vm._data.msg)
// console.log(vm.msg)
// console.log(vm.msg = 'start vue tutorial')
console.log(vm.hobby.push({name: 'eating'}))
console.log(vm.hobby[2].name = 'play game')

// 设置代理 => vm.msg === vm._data.msg
