<template>
  <div id="app">
    <router-view></router-view>
    <BottomTabs></BottomTabs>
  </div>
</template>

<script>
  import BottomTabs from './components/BottomTabs/ButtonTabs'

  export default {
    name: 'App',
    components: {
      BottomTabs
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  #app
    height 100%

</style>
