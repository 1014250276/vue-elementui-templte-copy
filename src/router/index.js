import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * 不需要动态判断权限的路由
 * 所有用户可见
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/home',
    component: Layout,
    redirect: '/home/console',
    name: 'Home',
    meta: { title: '主页', icon: 'dashboard' },
    children: [{
      path: 'console',
      name: 'Console',
      component: () => import('@/views/home/console/index'),
      meta: { title: '控制台', icon: 'dashboard' }
    }]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

/**
 * asyncRoutes
 * 需求动态判断权限并通过 addRoutes 动态添加的页面
 * 拥有权限用户可见
 */
export const asyncRoutes = [
  //权限管理
  {
    path: '/systemmanage',
    component: Layout,
    redirect: '/systemmanage/systemuser',
    name: 'Systemmanage',
    meta: { title: '权限管理', icon: 'example' },
    children: [
      {
        path: 'systemuser',
        name: 'Systemuser',
        component: () => import('@/views/systemmanage/systemuser/index'),
        meta: { title: '用户管理' }
      },
      {
        path: 'systembranch',
        name: 'Systembranch',
        component: () => import('@/views/systemmanage/systembranch/index'),
        meta: { title: '部门管理' }
      },
      {
        path: 'systempermission',
        name: 'Systempermission',
        component: () => import('@/views/systemmanage/systempermission/index'),
        meta: { title: '权限管理' }
      },
      {
        path: 'systemrole',
        name: 'Systemrole',
        component: () => import('@/views/systemmanage/systemrole/index'),
        meta: { title: '角色管理' }
      }
    ]
  },

  // 配置管理
  {
    path: '/configmanage',
    component: Layout,
    redirect: '/configmanage/configsystem',
    name: 'Configmanage',
    meta: { title: '配置管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'configsystem',
        name: 'Configsystem',
        component: () => import('@/views/configmanage/configsystem/index'),
        meta: { title: '系统设置' }
      },
      {
        path: 'configpay',
        name: 'Configpay',
        component: () => import('@/views/configmanage/configpay/index'),
        meta: { title: '支付平台列表' }
      },
      {
        path: 'configservice',
        name: 'Configservice',
        component: () => import('@/views/configmanage/configservice/index'),
        meta: { title: '短信服务商列表' }
      }
    ]
  },

  //营销管理
  {
    path: '/marketingmanage',
    component: Layout,
    redirect: '/marketingmanage/marketingput',
    name: 'Marketingmanage',
    meta: { title: '营销管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'marketingput',
        name: 'Marketingput',
        component: () => import('@/views/marketingmanage/marketingput/index'),
        meta: { title: '落地页列表' }
      },
      {
        path: 'marketingsource',
        name: 'Marketingsource',
        component: () => import('@/views/marketingmanage/marketingsource/index'),
        meta: { title: '来源平台列表' }
      },
      {
        path: 'marketingqrcode',
        name: 'Marketingqrcode',
        component: () => import('@/views/marketingmanage/marketingqrcode/index'),
        meta: { title: '客服推广二维码列表' }
      },
      {
        path: 'marketingmake',
        name: 'Marketingmake',
        component: () => import('@/views/marketingmanage/marketingmake/index'),
        meta: { title: '落地页制作' }
      },
      {
        path: 'marketingaccount',
        name: 'Marketingaccount',
        component: () => import('@/views/marketingmanage/marketingaccount/index'),
        meta: { title: '账户列表' }
      },
      {
        path: 'marketingrequest',
        name: 'Marketingrequest',
        component: () => import('@/views/marketingmanage/marketingrequest/index'),
        meta: { title: '广告访问详情' }
      }
    ]
  },

  //贷款管理
  {
    path: '/paycodemanage',
    component: Layout,
    redirect: '/paycodemanage/paycodepaylist',
    name: 'Paycodemanage',
    meta: { title: '贷款管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'paycodepaylist',
        name: 'Paycodepaylist',
        component: () => import('@/views/paycodemanage/paycodepaylist/index'),
        meta: { title: '平台列表' }
      },
      {
        path: 'paycodepayorder',
        name: 'Paycodepayorder',
        component: () => import('@/views/paycodemanage/paycodepayorder/index'),
        meta: { title: '订单记录' }
      },
      {
        path: 'paycodecreatecode',
        name: 'Paycodecreatecode',
        component: () => import('@/views/paycodemanage/paycodecreatecode/index'),
        meta: { title: '生成贷款二维码' }
      },
      {
        path: 'paycodegetlink',
        name: 'Paycodegetlink',
        component: () => import('@/views/paycodemanage/paycodegetlink/index'),
        meta: { title: '生成贷款链接' }
      }
    ]
  },

  //课程管理
  {
    path: '/curriculummanage',
    component: Layout,
    redirect: '/curriculummanage/curriculumcourseType',
    name: 'Configmanage',
    meta: { title: '课程管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'curriculumcourseType',
        name: 'CurriculumcourseType',
        component: () => import('@/views/curriculummanage/curriculumcourseType/index'),
        meta: { title: '课程类型列表' }
      },
      {
        path: 'curriculumcourse',
        name: 'Curriculumcourse',
        component: () => import('@/views/curriculummanage/curriculumcourse/index'),
        meta: { title: '课程列表' }
      }
    ]
  },

  //订单管理

  //日志管理

  //资产管理

  //渠道与退款管理


]


const createRouter = () => new Router({
  // mode: 'history', // mode默认为hash模式
  scrollBehavior: () => ({ y: 0 }),
  // routes: constantRoutes
  routes: [...constantRoutes,...asyncRoutes]//展示用这种方式拼接，调用接口时此处需更改
})

const router = createRouter()

//详细见链接: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
