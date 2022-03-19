const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles : state => state.user.roles,//用户权限
  permission_routes: state => state.permission.routes,//权限路由
}
export default getters
