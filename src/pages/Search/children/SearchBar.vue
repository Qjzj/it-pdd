<template>
  <div class="searchBar">
    <div class="search-wrap" @click="showSearchPage(true)">
      <div class="search-content">
        <i class="icon"></i>
        <span class="txt">女外套冬</span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "searchBar",
    props: {
      showSearchPage: Function
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus" ref="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .searchBar
    position relative
    padding 10px 15px
    text-align center
    border-bottom-1px(#ccc)
    .search-wrap
      height 42px
      line-height 42px
      background #ededed
      border-radius 5px
      color #999
      .search-content
        .icon
          display inline-block
          width 16px
          height 16px
          background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAM1BMVEUAAACenp6dnZ2lpaWdnZ2dnZ2enp6dnZ2dnZ2enp6fn5+cnJydnZ2enp6dnZ2dnZ2cnJwuBT3hAAAAEHRSTlMAL/AR2OVFlopkVcR7Hqa0bCS5IQAAANNJREFUKM91kdm6xRAMRiUSQ4v+7/+0Z2s5bHbXjWHJ8IXpOC8MlhKtWYmKDodvnU8AEuIRU92pmxwpcFE7WA/gGHEKPpa3/7EnmMyMFXBuvfQsA2KUZ6e4zEoC7mSurhuKUBcPWc24FYRFtHx1FIz4Q9JTrPa6Yz/yNTI/UpDeaxacP2SCtgHZXQr8XZrhN3f00Yd9RFZ6LavQJfE13jtAaI77uDBX4DROAsw/7BhQ78hml6oKPNtcMDjJULMNCnIb8fWy24ElorvtYTeGVfNutfwBiJYKBbU3umQAAAAASUVORK5CYII=") no-repeat center
          background-size cover
          vertical-align -2px
</style>