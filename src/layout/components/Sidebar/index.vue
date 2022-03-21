<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="true"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters([
      'permission_routes',//定义动态权限路由
      'sidebar'
    ]),
    // routes() {//用于监听路由 此处废弃
    //   return this.$router.options.routes
    // },
    //当前激活的菜单
    activeMenu() {
      //获取当前路由
      const route = this.$route
      const { meta, path } = route
      // 如果设置路径，侧边栏将突出显示您设置的路径
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    //显示logo
    showLogo() {
      // console.log(`showLogo:${this.$store.state.settings.sidebarLogo}`)
      return this.$store.state.settings.sidebarLogo
    },
    //引用scss
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
