/**
 * @description js 树形结构如何转为扁平化结构
 * @link https://segmentfault.com/q/1010000041155404?utm_source=sf-similar-question
 */

var data = [{
    id: 1,
    name: "A",
    children: [{
        id: 3,
        name: "C",
        children: [{
          id: 7,
          name: "G",
          children: [{
            id: 8,
            name: "H"
          }]
        }]
      },
      {
        id: 4,
        name: "D",
        children: [{
          id: 6,
          name: "F"
        }]
      }
    ]
  },
  {
    id: 2,
    name: "B",
    children: [{
      id: 5,
      name: "E"
    }]
  }
]

function flatTree(data = [], result = []) {
  data.forEach(item => {
    result.push({
      id: item.id,
      name: item.name,
    })
    if (item.children?.length) {
      flatTree(item.children, result)
    }
  })
  return result
}

let result = flatTree(data)
console.log(result)
