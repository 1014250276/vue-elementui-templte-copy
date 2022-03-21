<template>
  <div class="app">
    <div class="">权限管理</div>
    <!-- <button v-debounce="debounceClick">防抖</button> -->
    <!-- <input v-debounce /> -->
    <div>
        <span v-permission="['admin']" class="permission-alert">
          Only
          <el-tag class="permission-tag" size="small">admin</el-tag> can see this
        </span>
        <el-tag v-permission="['admin']" class="permission-sourceCode" type="info">
          v-permission="['admin']"
        </el-tag>
      </div>

      <div>
        <span v-permission="['editor']" class="permission-alert">
          Only
          <el-tag class="permission-tag" size="small">editor</el-tag> can see this
        </span>
        <el-tag v-permission="['editor']" class="permission-sourceCode" type="info">
          v-permission="['editor']"
        </el-tag>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'permission',
    methods:{
      // debounceClick () {
      //   console.log('只触发一次')
      // }
    }
  }
</script>

<style lang="scss" scoped>

</style>
