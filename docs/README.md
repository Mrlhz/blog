# Headline

> An awesome project.

```js
/**
 * @description 不使用递归，使用 stack 无限反嵌套多层嵌套数组
 * @link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#替代方案
 *
 * @param {Array} array
 * @returns {Array}
 */
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // 使用 pop 从 stack 中取出并移除值
    const next = stack.pop();
    if (Array.isArray(next)) {
      // 使用 push 送回内层数组中的元素，不会改动原始输入 original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // 使用 reverse 恢复原数组的顺序
  return res.reverse();
}

let arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
flatten(arr1);// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
```

!> 一段重要的内容，可以和其他 **Markdown** 语法混用。

![logo](/_media/Gakki.jpg ':size=160x160')

?> _TODO_ 完善示例

```bash
echo hello
```