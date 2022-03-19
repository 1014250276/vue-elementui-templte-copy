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

  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [{
  //     path: 'dashboard',
  //     name: 'Dashboard',
  //     component: () => import('@/views/dashboard/index'),
  //     meta: { title: 'Dashboard', icon: 'dashboard' }
  //   }]
  // },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  // {
  //   path: '/home',
  //   component: Layout,
  //   redirect: '/home',
  //   name: 'Home',
  //   meta: { title: '主页', icon: 'dashboard' },
  //   children: [{
  //     path: 'console',
  //     name: 'Console',
  //     component: () => import('@/views/home/console/index'),
  //     meta: { title: '控制台', icon: 'dashboard' }
  //   }]
  // },

  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]

/**
 * asyncRoutes
 * 需求动态判断权限并通过 addRoutes 动态添加的页面
 * 拥有权限用户可见
 */
export const asyncRoutes = [
  /**
   * 权限管理
   * **/
  {
    path: '/systemmanage',
    component: Layout,
    redirect: '/systemmanage/user',
    name: 'Systemmanage',
    meta: { title: '权限管理', icon: 'example' ,roles: ['admin', 'editor']},
    children: [
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/systemmanage/user/index'),
        meta: { title: '用户管理' ,roles: ['admin', 'editor']}
      },
      {
        path: 'branch',
        name: 'branch',
        component: () => import('@/views/systemmanage/branch/index'),
        meta: { title: '部门管理' ,roles: ['admin', 'editor']}
      },
      {
        path: 'permission',
        name: 'permission',
        component: () => import('@/views/systemmanage/permission/index'),
        meta: { title: '权限管理' ,roles: ['admin', 'editor']}
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/systemmanage/role/index'),
        meta: { title: '角色管理' ,roles: ['admin', 'editor']}
      }
    ]
  },

  /** 
   * 配置管理
   * **/
  {
    path: '/configmanage',
    component: Layout,
    redirect: '/configmanage/system',
    name: 'Configmanage',
    meta: { title: '配置管理', icon: 'el-icon-s-help' ,roles: ['admin', 'editor']},
    children: [
      {
        path: 'system',
        name: 'system',
        component: () => import('@/views/configmanage/system/index'),
        meta: { title: '系统设置'  ,roles: ['admin', 'editor']}
      },
      {
        path: 'pay',
        name: 'pay',
        component: () => import('@/views/configmanage/pay/index'),
        meta: { title: '支付平台列表' ,roles: ['admin', 'editor']}
      },
      {
        path: 'service',
        name: 'service',
        component: () => import('@/views/configmanage/service/index'),
        meta: { title: '短信服务商列表' ,roles: ['admin', 'editor']}
      }
    ]
  },

  /**
   * 营销管理
   * **/
  {
    path: '/marketingmanage',
    component: Layout,
    redirect: '/marketingmanage/put',
    name: 'Marketingmanage',
    meta: { title: '营销管理', icon: 'el-icon-s-help' ,roles: ['admin', 'editor']},
    children: [
      {
        path: 'put',
        name: 'put',
        component: () => import('@/views/marketingmanage/put/index'),
        meta: { title: '落地页列表' ,roles: ['admin', 'editor']}
      },
      {
        path: 'source',
        name: 'source',
        component: () => import('@/views/marketingmanage/source/index'),
        meta: { title: '来源平台列表' ,roles: ['admin', 'editor']}
      },
      {
        path: 'qrcode',
        name: 'qrcode',
        component: () => import('@/views/marketingmanage/qrcode/index'),
        meta: { title: '客服推广二维码列表' ,roles: ['admin', 'editor']}
      },
      {
        path: 'make',
        name: 'make',
        component: () => import('@/views/marketingmanage/make/index'),
        meta: { title: '落地页制作' ,roles: ['admin', 'editor']}
      },
      {
        path: 'account',
        name: 'account',
        component: () => import('@/views/marketingmanage/account/index'),
        meta: { title: '账户列表' ,roles: ['admin', 'editor']}
      },
      {
        path: 'request',
        name: 'request',
        component: () => import('@/views/marketingmanage/request/index'),
        meta: { title: '广告访问详情' ,roles: ['admin', 'editor']}
      }
    ]
  },

  /**
   * 贷款管理
   * **/
  {
    path: '/paycodemanage',
    component: Layout,
    redirect: '/paycodemanage/paylist',
    name: 'Paycodemanage',
    meta: { title: '贷款管理', icon: 'el-icon-s-help' ,roles: ['admin', 'editor']},
    children: [
      {
        path: 'paylist',
        name: 'paylist',
        component: () => import('@/views/paycodemanage/paylist/index'),
        meta: { title: '平台列表' ,roles: ['admin', 'editor']}
      },
      {
        path: 'payorder',
        name: 'payorder',
        component: () => import('@/views/paycodemanage/payorder/index'),
        meta: { title: '订单记录' ,roles: ['admin', 'editor']}
      },
      {
        path: 'createcode',
        name: 'createcode',
        component: () => import('@/views/paycodemanage/createcode/index'),
        meta: { title: '生成贷款二维码' ,roles: ['admin', 'editor']}
      },
      {
        path: 'getlink',
        name: 'getlink',
        component: () => import('@/views/paycodemanage/getlink/index'),
        meta: { title: '生成贷款链接' ,roles: ['admin', 'editor']}
      }
    ]
  },

  /**
   * 课程管理
   * **/
  {
    path: '/curriculummanage',
    component: Layout,
    redirect: '/curriculummanage/courseType',
    name: 'Configmanage',
    meta: { title: '课程管理', icon: 'el-icon-s-help' ,roles: ['admin', 'editor']},
    children: [
      {
        path: 'courseType',
        name: 'courseType',
        component: () => import('@/views/curriculummanage/courseType/index'),
        meta: { title: '课程类型列表' ,roles: ['admin', 'editor']}
      },
      {
        path: 'course',
        name: 'course',
        component: () => import('@/views/curriculummanage/course/index'),
        meta: { title: '课程列表' ,roles: ['admin', 'editor']}
      }
    ]
  },

  /**
   * 订单管理
   * **/
   {
    path: '/ordermanage',
    component: Layout,
    redirect: '/ordermanage/list',
    name: 'Ordermanage',
    meta: { title: '订单管理', icon: 'el-icon-s-help' ,roles: ['admin', 'editor']},
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/ordermanage/list/index'),
        meta: { title: '订单列表' ,roles: ['admin', 'editor']}
      },
      {
        path: 'aloot',
        name: 'aloot',
        component: () => import('@/views/ordermanage/aloot/index'),
        meta: { title: '订单分配记录' ,roles: ['admin', 'editor']}
      }
    ]
  },

  /**
   * 日志管理
   * **/
   {
    path: '/logmanage',
    component: Layout,
    redirect: '/logmanage/system',
    name: 'Logmanage',
    meta: { title: '日志管理', icon: 'el-icon-s-help' ,roles: ['admin', 'editor']},
    children: [
      {
        path: 'system',
        name: 'system',
        component: () => import('@/views/logmanage/system/index'),
        meta: { title: '系统操作日志' ,roles: ['admin', 'editor']}
      },
      {
        path: 'sms',
        name: 'sms',
        component: () => import('@/views/logmanage/sms/index'),
        meta: { title: '短信发送记录' ,roles: ['admin', 'editor']}
      },
      {
        path: 'notify',
        name: 'notify',
        component: () => import('@/views/logmanage/notify/index'),
        meta: { title: '支付回调记录' ,roles: ['admin', 'editor']}
      }
    ]
  },

  /**
   * 资产管理
   * **/
   {
    path: '/propertymanage',
    component: Layout,
    redirect: '/propertymanage/list',
    name: 'Propertymanage',
    meta: { title: '资产管理', icon: 'el-icon-s-help' ,roles: ['admin', 'editor']},
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/propertymanage/list/index'),
        meta: { title: '资产列表' ,roles: ['admin', 'editor']}
      },
      {
        path: 'check',
        name: 'check',
        component: () => import('@/views/propertymanage/check/index'),
        meta: { title: '资产盘点' ,roles: ['admin', 'editor']}
      },
      {
        path: 'record',
        name: 'record',
        component: () => import('@/views/propertymanage/record/index'),
        meta: { title: '资产记录' ,roles: ['admin', 'editor']}
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import('@/views/propertymanage/setting/index'),
        meta: { title: '资产设置' ,roles: ['admin', 'editor']}
      }
    ]
  },

  /**
   * 渠道与退款管理
   * **/
   {
    path: '/channelmanage',
    component: Layout,
    redirect: '/channelmanage/count',
    name: 'Channelmanage',
    meta: { title: '渠道与退款管理', icon: 'el-icon-s-help' ,roles: ['admin', 'editor']},
    children: [
      {
        path: 'count',
        name: 'count',
        component: () => import('@/views/channelmanage/count/index'),
        meta: { title: '渠道统计列表' ,roles: ['admin', 'editor']}
      },
      {
        path: 'ditchlist',
        name: 'ditchlist',
        component: () => import('@/views/channelmanage/ditchlist/index'),
        meta: { title: '渠道列表' ,roles: ['admin', 'editor']}
      },
      {
        path: 'refund',
        name: 'refund',
        component: () => import('@/views/channelmanage/refund/index'),
        meta: { title: '渠道退款信息统计' ,roles: ['admin', 'editor']}
      },
      {
        path: 'docking',
        name: 'docking',
        component: () => import('@/views/channelmanage/docking/index'),
        meta: { title: '信息对接统计' ,roles: ['admin', 'editor']}
      },
      {
        path: 'relevancy',
        name: 'relevancy',
        component: () => import('@/views/channelmanage/relevancy/index'),
        meta: { title: '渠道关联记录' ,roles: ['admin', 'editor']}
      }
    ]
  },


]


const createRouter = () => new Router({
  // mode: 'history', // mode默认为hash模式
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

//重置路由
//详细见链接: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
