# Document

- [Document.querySelectorAll](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelectorAll)

---
- [querySelectorAll](#Document.querySelectorAll)



### Document.querySelectorAll


```js
// https://book.douban.com/tag/?view=type&icn=index-sorttags-hot

// 1
document.querySelectorAll('a[name]')

// NodeList(6) [a.tag-title-wrapper, a.tag-title-wrapper, a.tag-title-wrapper, a.tag-title-wrapper, a.tag-title-wrapper, a.tag-title-wrapper]

// 2
let names = document.querySelectorAll('.article a.tag-title-wrapper')

Array.from(document.querySelectorAll('table.tagCol')).map((table, index) => {
  let titles = Array.from(table.querySelectorAll('tr td a'))
  let tags = Array.from(table.querySelectorAll('tr td b')).map((value, i) => {
    return {
      title: titles[i].innerText,
      value: value.innerText.replace(/\(|\)/g, '')
    }
  })

  return {
    name: names[index].getAttribute('name'),
    tags
  }
})

```



# NodeList

> NodeList 对象是一个节点的集合，是由 Node.childNodes 和 document.querySelectorAll 返回的

- [NodeList](https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList)

### Properties

> NodeList.length

### Methods

```js

NodeList.item()

NodeList.entries()

NodeList.forEach()

NodeList.keys()

NodeList.values()

```

```js

var list = document.querySelectorAll('a[name]')

console.log(list.item(0)) // 第一个

for (const key of list.keys()) {
  console.log(key, list[key])
}

// 与上面`list.keys()`等价

for (const [key, value] of list.entries()) {
  console.log(key, value)
}

list.forEach((currentValue, currentIndex, listObj) => {
  console.log(currentValue, currentIndex, listObj)
})

for(var value of list.values()) {
  console.log(value); 
}

```











