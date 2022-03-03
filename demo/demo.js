
/**
 * @description 7个杀手级的JS一行代码
 * @link https://segmentfault.com/a/1190000041415254
 */
// 滚动到顶部
const scrollToTop = (element) => element.scrollIntoView({ behavior: 'smooth', block: 'start' })

// document.body.scrollIntoView({ behavior: 'smooth', block: 'start' })
// document.querySelector('body').scrollIntoView({ behavior: 'smooth', block: 'start' })


// 滚动到底部
const scrollToBottom = (element) => element.scrollIntoView({ behavior: 'smooth', block: 'end' })