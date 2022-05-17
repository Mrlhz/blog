## css hack


- [你想知道的css hack知识全都帮你整理好了](https://www.w3cschool.cn/css/css-hack.html)
- [好奇|CSS长度单位竟然有21种](https://juejin.cn/post/7089600655811149854)


### 获取元素中文本所占宽度px

```js
function pxWidth(text, font) {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  if (font) {
    context.font = font
    const metrics = context.measureText(text)
    return metrics.width
  }
}

// demo
pxWidth('文本', '12px Microsoft YaHei')
// 24


window.getComputedStyle(document.body, null).getPropertyValue('font')
// https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle
'16px / 28px Inter, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-sans'

window.getComputedStyle(document.body, null).getPropertyValue('font-size')
window.getComputedStyle(document.body, null).getPropertyValue('font-family')

```
