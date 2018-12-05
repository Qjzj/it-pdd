<template>
  <div class="hot-nav">
    <div class="hot-nav-content" v-if="homeNav.length > 0">
      <div class="nav-content-inner">
        <a class="nav-item" v-for="(item, index) in homeNav" :key="index">
          <img :src="item.iconurl" alt="">
          <span>{{item.icontitle}}</span>
        </a>
      </div>
    </div>
    <div class="hot-nav-scroll">
      <div class="hot-nav-bar" :style="barStyle"></div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
      data() {
        return {
          // 屏幕的宽度
          screenWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
          // 导航内部容器宽度
          navContentWidth: 720,
          // 滑动条背景的宽度
          barBgWidth: 100,
          // 滑动条的宽度
          barWidth: 0,
          moveX: 0,
          startX: 0,
          endX: 0
        }
      },
      computed: {
        ...mapState(['homeNav']),
        barStyle() {
          return {
            width: `${this.barWidth}px`,
            transform: `translateX(${this.moveX}px)`
          }
        }
      },
      methods: {
        // 设置滑块的宽度
        getBarWidth() {
          this.barWidth = this.screenWidth / this.navContentWidth * this.barBgWidth
        },
        bindEvent() {
          this.$el.addEventListener('touchstart',this.handleTouchStart,false);
          this.$el.addEventListener('touchmove',this.handleTouchMove,false);
          this.$el.addEventListener('touchend',this.handleTouchEnd,false);
        },
        handleTouchStart(e) {
          let touch = e.touches[0];
          this.startX = (touch.pageX);
        },
        handleTouchMove(e) {
          let touch = e.touches[0];
          // 计算移动距离
          let moveX = Number(touch.pageX) - this.startX;
          // 计算滑块的移动距离
          this.moveX = - ((this.barBgWidth / this.navContentWidth) * moveX - this.endX);
          if(this.moveX <= 0) {
            this.moveX = 0
          }else if(this.moveX >= this.barBgWidth - this.barWidth ) {
            this.moveX = this.barBgWidth - this.barWidth
          }

        },
        handleTouchEnd() {
          this.endX = this.moveX;
        }
      },
      mounted() {
        // 设置滑块的宽度
        this.getBarWidth();
        // 监听事件
        this.bindEvent();
      }
    }
</script>

<style scoped lang="stylus" type="text/stylus" ref="stylesheet/stylus">
  .hot-nav
    position relative
    padding-bottom 15px
    width 100%
    height 180px
    background #fff
    .hot-nav-content
      width 100%
      height 180px
      overflow-x scroll
      &::-webkit-scrollbar
        display none
      .nav-content-inner
        width 720px
        height 180px
        display flex
        flex-direction column
        flex-wrap wrap
        .nav-item
          display flex;
          flex-direction column
          justify-content center
          align-items center
          width 90px
          height 90px
          font-size 13px
          img
            margin-bottom 4px
            width 40%
    .hot-nav-scroll
      position absolute
      left 50%
      bottom: 7px
      width 100px
      margin-left -(@width/2)
      height 3px
      background #ccc
      border-radius 3px
      overflow hidden
      .hot-nav-bar
        position absolute
        top 0
        height 3px
        background red
        border-radius 3px
        transition all .2s
</style>
