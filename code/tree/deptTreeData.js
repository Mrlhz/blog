/**
 * @reference 工具函数：普通数组如何转为树形结构数据(多层级)数组？ https://juejin.cn/post/6844903696371826695
 */
const data = [
  {
      "departmentid": 1,
      "departmentname": "总部",
      "parentid": 0,
      "isrmv": false,
      "sort": 1,
      "leaderid": null,
      "qxDepartmentid": 1,
      "children": [
          {
              "departmentid": 2,
              "departmentname": "总经办",
              "parentid": 1,
              "isrmv": false,
              "sort": 1,
              "leaderid": 44220,
              "qxDepartmentid": null
          },
          {
              "departmentid": 4,
              "departmentname": "IT部",
              "parentid": 1,
              "isrmv": false,
              "sort": 3,
              "leaderid": null,
              "qxDepartmentid": null,
              "children": [
                  {
                      "departmentid": 31,
                      "departmentname": "技术组1",
                      "parentid": 4,
                      "isrmv": false,
                      "sort": null,
                      "leaderid": null,
                      "qxDepartmentid": null
                  },
                  {
                      "departmentid": 32,
                      "departmentname": "啦啦",
                      "parentid": 4,
                      "isrmv": false,
                      "sort": null,
                      "leaderid": null,
                      "qxDepartmentid": null
                  }
              ]
          },
          {
              "departmentid": 9,
              "departmentname": "技术组",
              "parentid": 1,
              "isrmv": false,
              "sort": null,
              "leaderid": null,
              "qxDepartmentid": 1432010565
          },
          {
              "departmentid": 10,
              "departmentname": "财务部",
              "parentid": 1,
              "isrmv": false,
              "sort": null,
              "leaderid": null,
              "qxDepartmentid": 1432014225
          },
          {
              "departmentid": 28,
              "departmentname": "总经办22",
              "parentid": 1,
              "isrmv": false,
              "sort": null,
              "leaderid": null,
              "qxDepartmentid": null
          },
          {
              "departmentid": 33,
              "departmentname": "test23",
              "parentid": 1,
              "isrmv": false,
              "sort": null,
              "leaderid": null,
              "qxDepartmentid": 33
          },
          {
              "departmentid": 38,
              "departmentname": "测试部门3",
              "parentid": 1,
              "isrmv": false,
              "sort": null,
              "leaderid": 44229,
              "qxDepartmentid": 1432014228,
              "children": [
                  {
                      "departmentid": 39,
                      "departmentname": "测试部门31",
                      "parentid": 38,
                      "isrmv": false,
                      "sort": null,
                      "leaderid": 44283,
                      "qxDepartmentid": 1432014229,
                      "children": [
                          {
                              "departmentid": 41,
                              "departmentname": "测试部门311",
                              "parentid": 39,
                              "isrmv": false,
                              "sort": null,
                              "leaderid": 44239,
                              "qxDepartmentid": 1432014231
                          }
                      ]
                  },
                  {
                      "departmentid": 40,
                      "departmentname": "测试部门32",
                      "parentid": 38,
                      "isrmv": false,
                      "sort": null,
                      "leaderid": 44246,
                      "qxDepartmentid": 1432014230
                  },
                  {
                      "departmentid": 44,
                      "departmentname": "测试部门34",
                      "parentid": 38,
                      "isrmv": false,
                      "sort": null,
                      "leaderid": null,
                      "qxDepartmentid": 1432014233
                  }
              ]
          }
      ]
  }
]

module.exports = {
	data
}