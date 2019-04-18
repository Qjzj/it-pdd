<template>
  <div class="hot-list">
    <ul class="hot-list-content" v-if="homeShopList.length > 0">
      <li class="list-item" v-for="(good, index) in homeShopList">
        <div class="pic">
          <img :src="good.hd_thumb_url" width="100%" alt="">
        </div>
        <div class="content">
          <div class="item-title">
            <span class="icon">12·12</span>
            {{good.goods_name}}
          </div>
          <div class="item-bottom">
            <div class="tags">
              <span class="tag">极速退款</span>
            </div>
            <div class="bottom-bar">
              <span class="money">￥{{good.normal_price}}</span>
              <span class="total">{{good.sales_tip}}</span>
              <span class="head-img">
                <img v-for="(item, index) in good.bubble" :key="index" :src="item.avatar" alt="">
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['homeShopList'])
    },
    watch: {
      homeShopList() {
        this.$nextTick(()=> {
          // this._Init_Scroll();
        })
      }
    },
    methods: {
      _Init_Scroll() {
        this.scroll = new BScroll('.hot-list',{
          scrollY: true,
          click: true
        });

        this.scroll.on('touchEnd',(pos) => {
          console.log(pos.y);
        })
      }
    },
    mounted() {

    }
  }
</script>

<style scoped lang="stylus" type="text/stylus" ref="stylesheet/stylus">
.hot-list
  background: #f5f5f5
  .hot-list-content
    display flex
    flex-direction column
    padding 5px
    background #f5f5f5
    .list-item
      display flex
      flex-direction row
      align-items stretch
      padding 8px 5px
      margin-top 10px
      height 150px
      .pic
        flex 2
        display flex
        justify-content center
        align-items stretch
      .content
        flex 3
        display flex
        flex-direction column
        justify-content space-around
        margin-left 15px
        .item-title
          height 45px
          line-height 22px
          overflow hidden
          font-size 14px
          .icon
            padding 1px 2px
            background hotpink
            color #fff
            border-radius 2px
            font-size 13px
        .item-bottom
          display flex
          flex-direction column
          .tags
            display flex
            height 20px
            .tag
              padding 2px 5px
              display flex
              margin-right 5px
              background orange
              font-size 13px
              color orangered
              border-radius 3px
          .bottom-bar
            display flex
            align-items center
            .money
              flex 1
              display flex
              align-items center
              color red
              font-weight bold
            .total
              flex 2
              display flex
              align-items center
              color #666
            .head-img
              flex 1
              display: flex
              align-items center
              img
                width 40%
                border-radius 50%
              img:nth-child(2)
                margin-left -5px
</style>