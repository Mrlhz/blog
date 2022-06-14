
## 参考手册文档

### 文档

- [jsdoc](https://github.com/jsdoc/jsdoc)

### 类型检查
- [core-util-is](https://github.com/isaacs/core-util-is)
- [Node util.types](http://nodejs.cn/api-v16/util.html#utiltypes) 为不同种类的内置对象提供类型检查
- [typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)
- [instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)
- [JavaScript专题之类型判断(上)](https://github.com/mqyqingfeng/Blog/issues/28)
- [JavaScript专题之类型判断(下)](https://github.com/mqyqingfeng/Blog/issues/30)

> 在 IE6 中，null 和 undefined 会被 Object.prototype.toString 识别成 [object Object]

### DOM library

- [你也许不需要 jQuery （You (Might) Don't Need jQuery）](https://github.com/nefe/You-Dont-Need-jQuery)
- [You Might Not Need jQuery](https://github.com/HubSpot/youmightnotneedjquery) https://youmightnotneedjquery.com/
- [jQuery](https://api.jquery.com/)
- [Domq](https://github.com/nzbin/domq) Domq is a modular DOM manipulation library. It's built according to Zepto.js.
- [你不需要 jQuery，但你需要一个 DOM 库](https://www.cnblogs.com/nzbin/p/10230272.html)

- [dom-helpers tiny modular DOM lib for ie9+](https://github.com/react-bootstrap/dom-helpers)
- [DOM helper library](https://github.com/rsuite/dom-lib)

```js
function width(el) {
  return parseFloat(getComputedStyle(el, null).width.replace('px', ''))
}

width(document.documentElement)

window.document.documentElement.clientWidth

```

### 剪切板操作

- [clipboard.js](https://github.com/zenorocha/clipboard.js)
- [docsify-copy-code](https://github.com/jperasmus/docsify-copy-code)
- [【JS】剪切板操作（手写复制、粘贴功能）](https://blog.csdn.net/qq_45677671/article/details/121990927)
