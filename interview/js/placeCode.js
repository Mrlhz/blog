
// 
/**
 * @see Js中几种常用数组遍历方式分析比较
 * @see JS几种数组遍历方式以及性能分析对比 https://dailc.github.io/2016/11/25/baseKnowlenge_javascript_jsarrayGoThrough
 * @link https://dailc.github.io/jsfoundation-perfanalysis/html/performanceAnalysis/demo_performanceAnalysis_jsarrayGoThrough.html
 */

// const fields = {
//   AFlag: 1,
//   BFlag: 1,
//   CFlag: 1,
//   DFlag: 1,
//   EFlag: 1,
//   FFlag: 1,
// }

const fields = [
  'AFlag',
  'BFlag',
  'CFlag',
  'DFlag',
  'EFlag',
  'FFlag'
]

     
const data = [
  { AFlag: 'Y', BFlag: undefined,  CFlag: 'N', k: 666 },
  { BFlag: undefined },
  { CFlag: 'N' },
  { DFlag: 'N' },
  { EFlag: null, l: 9641 },
  { AFlag: null, ou: 'hw', ou1: 'hw',ou2: 'hw', jk: 0 },
  { AFlag: null, ou: 'hw', ou1: 'hw',ou2: 'hw', jk1: 0, jk2: 0,jk3: 0,jk4: 0,jk5: 0,jk6: 0,jk7: 0,jk8: 0,jk9: 0,jk10: 0,jk11: 0,jk12: 0,jk13: 0,jk14: 0,jk15: 0,jk16: 0,jk17: 0,jk18: 0,jk19: 0, },
  { AFlag: null, ou: 'hw', ou1: 'hw',ou2: 'hw', jk1: 0, jk2: 0,jk3: 0,jk4: 0,jk5: 0,jk6: 0,jk7: 0,jk8: 0,jk9: 0,jk10: 0,jk11: 0,jk12: 0,jk13: 0,jk14: 0,jk15: 0,jk16: 0,jk17: 0,jk18: 0,jk19: 0, },
  { AFlag: null, ou: 'hw', ou1: 'hw',ou2: 'hw', jk1: 0, jk2: 0,jk3: 0,jk4: 0,jk5: 0,jk6: 0,jk7: 0,jk8: 0,jk9: 0,jk10: 0,jk11: 0,jk12: 0,jk13: 0,jk14: 0,jk15: 0,jk16: 0,jk17: 0,jk18: 0,jk19: 0, },
  { AFlag: null, ou: 'hw', ou1: 'hw',ou2: 'hw', jk1: 0, jk2: 0,jk3: 0,jk4: 0,jk5: 0,jk6: 0,jk7: 0,jk8: 0,jk9: 0,jk10: 0,jk11: 0,jk12: 0,jk13: 0,jk14: 0,jk15: 0,jk16: 0,jk17: 0,jk18: 0,jk19: 0, },
  { AFlag: null, ou: 'hw', ou1: 'hw',ou2: 'hw', jk1: 0, jk2: 0,jk3: 0,jk4: 0,jk5: 0,jk6: 0,jk7: 0,jk8: 0,jk9: 0,jk10: 0,jk11: 0,jk12: 0,jk13: 0,jk14: 0,jk15: 0,jk16: 0,jk17: 0,jk18: 0,jk19: 0, },
  { AFlag: null, ou: 'hw', ou1: 'hw',ou2: 'hw', jk1: 0, jk2: 0,jk3: 0,jk4: 0,jk5: 0,jk6: 0,jk7: 0,jk8: 0,jk9: 0,jk10: 0,jk11: 0,jk12: 0,jk13: 0,jk14: 0,jk15: 0,jk16: 0,jk17: 0,jk18: 0,jk19: 0, AFlag: 'N', },
  { AFlag: null, ou: 'hw', ou1: 'hw',ou2: 'hw', jk1: 0, jk2: 0,jk3: 0,jk4: 0,jk5: 0,jk6: 0,jk7: 0,jk8: 0,jk9: 0,jk10: 0,jk11: 0,jk12: 0,jk13: 0,jk14: 0,jk15: 0,jk16: 0,jk17: 0,jk18: 0,jk19: 0, },
  { AFlag: null, ou: 'hw', ou1: 'hw',ou2: 'hw', jk1: 0, jk2: 0,jk3: 0,jk4: 0,jk5: 0,jk6: 0,jk7: 0,jk8: 0,jk9: 0,jk10: 0,jk11: 0,jk12: 0,jk13: 0,jk14: 0,jk15: 0,jk16: 0,jk17: 0,jk18: 0,jk19: 0, },
  { AFlag: null, ou: 'hw', ou1: 'hw',ou2: 'hw', jk1: 0, jk2: 0,jk3: 0,jk4: 0,jk5: 0,jk6: 0,jk7: 0,jk8: 0,jk9: 0,jk10: 0,jk11: 0,jk12: 0,jk13: 0,jk14: 0,jk15: 0,jk16: 0,jk17: 0,jk18: 0,jk19: 0, },
  { AFlag: null, ou: 'hw', ou1: 'hw',ou2: 'hw', jk1: 0, jk2: 0,jk3: 0,jk4: 0,jk5: 0,jk6: 0,jk7: 0,jk8: 0,jk9: 0,jk10: 0,jk11: 0,jk12: 0,jk13: 0,jk14: 0,jk15: 0,jk16: 0,jk17: 0,jk18: 0,jk19: 0, },
  { AFlag: null, ou: 'hw', ou1: 'hw',ou2: 'hw', jk1: 0, jk2: 0,jk3: 0,jk4: 0,jk5: 0,jk6: 0,jk7: 0,jk8: 0,jk9: 0,jk10: 0,jk11: 0,jk12: 0,jk13: 0,jk14: 0,jk15: 0,jk16: 0,jk17: 0,jk18: 0,jk19: 0, },
  { AFlag: null, ou: 'hw', ou1: 'hw',ou2: 'hw', jk1: 0, jk2: 0,jk3: 0,jk4: 0,jk5: 0,jk6: 0,jk7: 0,jk8: 0,jk9: 0,jk10: 0,jk11: 0,jk12: 0,jk13: 0,jk14: 0,jk15: 0,jk16: 0,jk17: 0,jk18: 0,jk19: 0, },
  { AFlag: null, ou: 'hw', ou1: 'hw',ou2: 'hw', jk1: 0, jk2: 0,jk3: 0,jk4: 0,jk5: 0,jk6: 0,jk7: 0,jk8: 0,jk9: 0,jk10: 0,jk11: 0,jk12: 0,jk13: 0,jk14: 0,jk15: 0,jk16: 0,jk17: 0,jk18: 0,jk19: 0, },
  { AFlag: null, ou: 'hw', ou1: 'hw',ou2: 'hw', jk1: 0, jk2: 0,jk3: 0,jk4: 0,jk5: 0,jk6: 0,jk7: 0,jk8: 0,jk9: 0,jk10: 0,jk11: 0,jk12: 0,jk13: 0,jk14: 0,jk15: 0,jk16: 0,jk17: 0,jk18: 0,jk19: 0, },
  { AFlag: null, ou: 'hw', ou1: 'hw',ou2: 'hw', jk1: 0, jk2: 0,jk3: 0,jk4: 0,jk5: 0,jk6: 0,jk7: 0,jk8: 0,jk9: 0,jk10: 0,jk11: 0,jk12: 0,jk13: 0,jk14: 0,jk15: 0,jk16: 0,jk17: 0,jk18: 0,jk19: 0, },
  { AFlag: null, ou: 'hw', ou1: 'hw',ou2: 'hw', jk1: 0, jk2: 0,jk3: 0,jk4: 0,jk5: 0,jk6: 0,jk7: 0,jk8: 0,jk9: 0,jk10: 0,jk11: 0,jk12: 0,jk13: 0,jk14: 0,jk15: 0,jk16: 0,jk17: 0,jk18: 0,jk19: 0, DFlag: 'Y' },
]

console.time('init')
data.forEach((item) => {
 fields.forEach((field) => {
   if (item[field]) {
    item[field] === 'Y' ?  item[field] = 1 : item[field] = 0
   }
  })
})

// console.log(data)
console.timeEnd('init')

var a = 1;
(function(){
  console.log(this)
  a = 2
  console.log(a) // 2
})()

console.log(a) // 2
