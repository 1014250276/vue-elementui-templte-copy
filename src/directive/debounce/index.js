/**
 * 防抖指令
 * debounce
 * 定义一个延迟执行的方法，如果在延迟时间内再调用该方法，则重新计算执行时间
 * 将时间绑定在 click 方法上
 */

/**
 * 自定义防抖
 */
 import debounce from './debounce'
 const install = function(Vue) {
   Vue.directive('debounce', debounce)
 }
 
 if (window.Vue) {
//    window['permission'] = permission
   Vue.use(install); // eslint-disable-line
 }
 
 debounce.install = install
 export default debounce
  

