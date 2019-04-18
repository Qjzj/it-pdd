<template>
  <div id="app">
    <router-view></router-view>
    <BottomTabs v-show="$route.meta.showBottomTab"></BottomTabs>
  </div>
</template>

<script>
  import BottomTabs from './components/BottomTabs/ButtonTabs'

  import { mapActions } from 'vuex'
  export default {
    name: 'App',
    components: {
      BottomTabs
    },
    methods: {
      ...mapActions(['asyncSaveUserInfo'])
    },
    created() {
      // 获取用户数据
      this.asyncSaveUserInfo();
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  #app
    height 100%

</style>
