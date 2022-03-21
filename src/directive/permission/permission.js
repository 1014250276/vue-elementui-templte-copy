import store from '@/store'

//检查权限
function checkPermission(el, binding) {
    // debugger;
    const { value } = binding
    const roles = store.getters && store.getters.roles
    // 判断角色信息是否存在并且是数组
    if (value && value instanceof Array) {
      // 当角色存在时
      if (value.length > 0) {
        const permissionRoles = value
        /**
       * 判断vuex中获取的角色信息是否符合
       * some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
       * some() 方法会依次执行数组的每个元素：
       * 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
       * 如果没有满足条件的元素，则返回false。
       * 注意： some() 不会对空数组进行检测。
       * 注意： some() 不会改变原始数组。
       */

        const hasPermission = roles.some(role => {
          return permissionRoles.includes(role)
        })
        /**
        * 如果不符合则取出这个dom
        */
        if (!hasPermission) {
          el.parentNode && el.parentNode.removeChild(el)
        }
      }
    } else {
      throw new Error(`need roles! Like v-permission="['admin','editor']"`)
    }
  }
  
  export default {
    inserted(el, binding) {
      checkPermission(el, binding)
    },
    update(el, binding) {
      checkPermission(el, binding)
    }
  }