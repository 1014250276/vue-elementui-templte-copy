/**
 * 自定义左侧菜单数据
 */
const Mock = require('mockjs')

const data = Mock.mock({
  // 'items|30': [{
  //   id: '@id',
  //   title: '@sentence(10, 20)',
  //   'status|1': ['published', 'draft', 'deleted'],
  //   author: 'name',
  //   display_time: '@datetime',
  //   pageviews: '@integer(300, 5000)'
  // }]
})

module.exports = [
  {
    url: '/vue-admin-template/menu/list',//菜单查询
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 0,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
