# JavaScript RegExp 对象

## 参考

- [正则表达式前端使用手册](http://louiszhai.github.io/2016/06/13/regexp/)
- [JavaScript RegExp 对象](http://www.runoob.com/jsref/jsref-obj-regexp.html)
- [一次性搞懂JavaScript正则表达式之语法](https://juejin.im/post/5bda4e6fe51d45681f245274)
- [菜鸟在线工具](https://c.runoob.com)


### 方括号

表达式 | 描述
---|---
[abc]	  |查找方括号之间的任何字符
[^abc]	|查找任何不在方括号之间的字符
[0-9]	  |查找任何从 0 至 9 的数字
[a-z]	  |查找任何从小写 a 到小写 z 的字符
[A-Z]	  |查找任何从大写 A 到大写 Z 的字符
[A-z]	  |查找任何从大写 A 到小写 z 的字符
[adgk]	|查找给定集合内的任何字符
[^adgk]	|查找给定集合外的任何字符
(red|blue|green)	|查找任何指定的选项

### 元字符
元字符 |	描述
---|---
.	  | 查找单个字符，除了换行和行结束符
\w	| 查找单词字符
\W	| 查找非单词字符
\d	| 查找数字
\D	| 查找非数字字符
\s	| 查找空白字符
\S	| 查找非空白字符
\b	| 匹配单词边界
\B	| 匹配非单词边界
\0	| 查找 NULL 字符
\n	| 查找换行符
\f	| 查找换页符
\r	| 查找回车符
\t	| 查找制表符
\v	| 查找垂直制表符
\xxx	|查找以八进制数 xxx 规定的字符
\xdd	|查找以十六进制数 dd 规定的字符
\uxxxx	|查找以十六进制数 xxxx 规定的 Unicode 字符

### 量词

量词	| 描述
---|---
[n+]	| 匹配任何包含至少一个 n 的字符串
n*	  | 匹配任何包含零个或多个 n 的字符串
n?	  | 匹配任何包含零个或一个 n 的字符串
n{X}	| 匹配包含 X 个 n 的序列的字符串
n{X,}	|X 是一个正整数前面的模式 n 连续出现至少 X 次时匹配
n{X,Y}	|X 和 Y 为正整数前面的模式 n 连续出现至少 X 次，至多 Y 次时匹配
n$	| 匹配任何结尾为 n 的字符串
^n	| 匹配任何开头为 n 的字符串
?=n	| 匹配任何其后紧接指定字符串 n 的字符串
?!n	| 匹配任何其后没有紧接指定字符串 n 的字符串

限定符 |	描述
---|---
*	| x>=0
+	| x>=1
?	| x=0 or x=1
{n}	| x=n
{n,}	| x>=n
{n,m}	| n<=x<=m


`n+`
>例如，/a+/ 匹配 “candy” 中的 “a”，”caaaaaaandy” 中所有的 “a”

`n*`
>例如，/bo*/ 匹配 “A ghost booooed” 中的 “boooo”，”A bird warbled” 中的 “b”，但是不匹配 “A goat grunted”

`n?`
>例如，/e?le?/ 匹配 “angel” 中的 “el”，”angle” 中的 “le”

`n{X}`
>匹配包含 X 个 n 的序列的字符串;例如，/a{2}/ 不匹配 “candy,” 中的 “a”，但是匹配 “caandy,” 中的两个 “a”，且匹配 “caaandy.” 中的前两个 “a”

`n{X,}`

>例如，/a{2,}/ 不匹配 “candy” 中的 “a”，但是匹配 “caandy” 和 “caaaaaaandy.” 中所有的 “a”

`n{X,Y}`

>例如，/a{1,3}/ 不匹配 “cndy”，匹配 “candy,” 中的 “a”，”caandy,” 中的两个 “a”，匹配 “caaaaaaandy” 中的前面三个 “a”注意，当匹配 “caaaaaaandy” 时，即使原始字符串拥有更多的 “a”，匹配项也是 “aaa”

```js
`n$`
匹配任何结尾为 n 的字符串
^n
匹配任何开头为 n 的字符串
?=n
匹配任何其后紧接指定字符串 n 的字符串
?!n
匹配任何其后没有紧接指定字符串 n 的字符串
```
方法	描述	FF	IE
search	检索与正则表达式相匹配的值	1	4
match	找到一个或多个正则表达式的匹配	1	4
replace	替换与正则表达式匹配的子串	1	4
split	把字符串分割为字符串数组	1	4


```js
let reg = /http: (\/\/.+.jpg)/;
let img1 = 'http: //img.hb.aicdn.com/bdad4f7788d7b3366c9f40406917848fa67bc7362bfa0-xLVh5p_fw658.jpg'
let img2 = '//img.hb.aicdn.com/4bfebd327513d3a20fbe51b591a763b8e901d776679ed-lPKjKd_fw658.jpg'
let str = img1.replace(reg, '$1')
console.log(str)
let date = '2018/10/30'
let pattern = /^(\d{4})[/-](\d{2})[/-](\d{2})$/
/*
  \d{4} 连续4个数字
  [/-]   / 或者 - 
  (\d{4}) 加个括号提取出来 用$1表示
*/
date.match(pattern) 
// ["2018/10/30", "2018", "10", "30", index: 0, input: "2018/10/30", groups: undefined]
RegExp.$1 // "2018"
let after = date.replace(pattern, '$1-$2-$3')
console.log(after)
```

### 贪婪模式

```js
var str ='12345678'
str.match(/\d{3,6}/) // ["123456", index: 0, input: "12345678", groups: undefined]
```

### 非贪婪模式

```js
var str ='123456789'
str.match(/\d{3,6}?/g) // ["123", "456", "789"]
```

### 忽略分组（非捕获分组）
`?:`

```js
/(?: Byron).(ok)/
```

```js
var reg1 = /\w/
var reg2 = /\w/g

while(reg2.test('ab')){
  console.log(reg2.lastIndex)
}
```

1. rex.test("str")--> 是否与正则匹配；
2. rex.exec("str")--> 接受返回数组。会从lastIndex处开始匹配而不是从头匹配；
3. "str".search(rex)--> 查找第一次匹配的子字符串的位置.忽视g全局；
4. "str".replace(rex)--> 字符串中的某些子串替换为需要的内容
5. "str".split(rex)--> 将一个字符串拆分成一个数组
6. "str".match(rex)--> g时将所有匹配结果以数组形式返回


### 前瞻
```js
// 查找exp2前面的exp1
exp1(?=exp2)


// 查找后面不是exp2的exp1
exp1(?!exp2)
```