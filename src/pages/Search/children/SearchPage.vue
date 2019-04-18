<template>
  <div class="search-page">
    <div class="top-bar">
      <div class="input-wrap">
        <img src="../images/search.png" alt="">
        <input type="text" placeholder="男鞋运动鞋">
      </div>
      <span class="cancel" @click="showSearchPage(false)">取消</span>
    </div>
    <div class="history-search search-wrap">
      <div class="title">历史搜索</div>
      <div class="content">
        <span>女士护肤品</span>
        <span>鞋袜</span>
        <span>帽子</span>
        <span>笔记本</span>
        <span>显示器</span>
      </div>
    </div>
    <div class="hot-search search-wrap">
      <div class="title"><img src="../images/hot.png" alt="">热门搜索</div>
      <div class="content">
        <span>长袖t恤男</span>
        <span>男士卫衣</span>
        <span>纸巾卷纸</span>
        <span>ins独角兽</span>
        <span>冲锋衣女</span>
        <span>被套单件</span>
        <span>被套单件</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchPage",
    props: {
      showSearchPage: Function
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .search-page
    position fixed
    top 0
    right 0
    left 0
    bottom 0
    background #fff
    z-index 1000
    .top-bar
      display flex
      justify-content space-between
      align-items center
      padding-left 15px
      height 50px
      border-bottom 1px solid #eee
      .input-wrap
        flex 1
        display flex
        align-items center
        height 35px
        background #ededed
        border-radius 5px
        overflow hidden
        img
          margin 0 10px
          width 20px
          height 20px
        input
          flex 1
          background #ededed
          align-self stretch
          border none
          outline none
      .cancel
        margin 0 12px
        font-size 14px
        color #333
    .search-wrap
      margin-top 20px
      padding 0 16px
      overflow hidden
      .title
        height 35px
        line-height 35px
        img
          margin-right 5px
          width 20px
          height 20px
          vertical-align -2px
      span
        float left
        margin 0 15px 10px 0
        padding 5px 8px
        background #f9f9f9
        border-radius 5px
        color #999
        font-size 13px
    .history-search
        span
          color #666

</style>