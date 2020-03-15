# CSS tips

- [b站全灰，原来仅需一行css代码——css 滤镜](https://juejin.im/post/5df3a049f265da33f8652882)
- [filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)

---

- [css 滤镜](#css滤镜)
- [input输入框自动填充黄色背景解决方案](#input输入框自动填充黄色背景解决方案)

### css滤镜
```css
/* css 滤镜 */
img {
  filter: grayscale(100%);
  /* filter: grayscale(1); */
}
```

### input输入框自动填充黄色背景解决方案

> [input输入框自动填充黄色背景解决方案](https://www.jianshu.com/p/587fef955c4b)
```css
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px white inset;
}
```
