import Vue from 'Vue'

const vm = new Vue({
  el: '#app',
  data () {
    return {
      msg: 'hello',
      name: 'lhr',
      hobby: ['reading', 'watching TV']
    }
  },
  computed: {},
  watch: {}
})

console.log(vm)
