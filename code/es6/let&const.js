
// 变量提升： 
console.log(a.toString())

function a() {
  console.log(1)
}

function a() {
  console.log(2)
}


var a = function() {
  console.log(3)
}



// 暂时性死区

var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}