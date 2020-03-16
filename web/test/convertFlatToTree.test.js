const convertFlatToTree = require('../src/study/convertFlatToTree')

const obj = {
  'a.a.a': 1,
  'a.a.b': 2,
  'a.b.a': 3,
  'a.b.b': 4
}

const b = {
  a: {
    a: {
      a: 1,
      b: 2
    },
    b: {
      a: 3,
      b: 4
    }
  }
}

test('flat to tree', () => {
  expect(convertFlatToTree(obj)).toEqual(b)
})
