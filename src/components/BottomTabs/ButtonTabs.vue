<template>
    <div class="bottom-tabs">
      <div class="item" @click="switchTo('/home')">
        <img :src="$route.path.includes('/home') ? iconArr[0].selected : iconArr[0].normal" alt="">
        <span :class="{active: $route.path.includes('/home')}">首页</span>
      </div>
      <div class="item" @click="switchTo('/recommend')">
        <img :src="$route.path.includes('/recommend') ? iconArr[1].selected : iconArr[1].normal" alt="">
        <span :class="{active: $route.path.includes('/recommend')}">推荐</span>
      </div>
      <div class="item" @click="switchTo('/search')">
        <img :src="$route.path.includes('/search') ? iconArr[2].selected : iconArr[2].normal" alt="">
        <span :class="{active: $route.path.includes('/search')}">搜索</span>
      </div>
      <div class="item" @click="switchTo('/chat')">
        <img :src="$route.path.includes('/chat') ? iconArr[3].selected : iconArr[3].normal" alt="">
        <span :class="{active: $route.path.includes('/chat')}">聊天</span>
      </div>
      <div class="item" @click="switchTo('/me')">
        <img :src="$route.path.includes('/me') ? iconArr[4].selected : iconArr[4].normal" alt="">
        <span :class="{active: $route.path.includes('/me')}">我的</span>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
          return {
            iconArr:[
              {normal: require('./../../../static/img/icon_home.png'), selected: require('./../../../static/img/icon_home_selected.png')},
              {normal: require('./../../../static/img/icon_intro.png'), selected: require('./../../../static/img/icon_intro_selected.png')},
              {normal: require('./../../../static/img/icon_search.png'), selected: require('./../../../static/img/icon_search_selected.png')},
              {normal: require('./../../../static/img/icon_chat.png'), selected: require('./../../../static/img/icon_chat_selected.png')},
              {normal: require('./../../../static/img/icon_mine.png'), selected: require('./../../../static/img/icon_mine_selected.png')}
            ]
          }
        },
      methods: {
          switchTo(path) {
            this.$router.replace(path);
          }
      }
    }
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .bottom-tabs
    position fixed
    bottom 0
    left 0
    display flex
    width 100%
    height 50px
    font-size 12px
    background: #fff
    border
    .item
      display flex
      flex 1
      flex-direction column
      justify-content center
      align-items center
      img
        margin-bottom 4px
        width 35%
        height auto
    .active
      color: red


</style>
