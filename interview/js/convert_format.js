/**
 * @see https://shimo.im/forms/yXUgGENQI5kRr88f/fill~
 */
// 假设后端同学通过接口向前端返回了天猫的行业信息，例如：
const industry_list = [{
    "parent_ind": "女装",
    "name": "连衣裙"
  },
  {
    "name": "女装"
  },
  {
    "parent_ind": "女装",
    "name": "半身裙"
  },
  {
    "parent_ind": "女装",
    "name": "A字裙"
  },
  {
    "name": "数码"
  },
  {
    "parent_ind": "数码",
    "name": "电脑配件"
  },
  {
    "parent_ind": "电脑配件",
    "name": "内存"
  },
]


{
  // 为了取用方便，我们希望可以将其转换为树状格式，例如：
  const result = {
    "数码": {
      "电脑配件": {
        "内存": {}
      }
    },
    "女装": {
      "连衣裙": {},
      "半身裙": {},
      "A字裙": {}
    }
  }
}
// 实现一个方法完成这个转换

function convert_format(data = []) {

  data.reduce((acc, cur) => {

  }, {})
}

convert_format(industry_list)
