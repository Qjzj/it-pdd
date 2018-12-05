<template>
  <div class="recommend">
    <h2>{{msg}}</h2>
    <div class="shop-content">
      <ul class="shop-list" v-if="recommendShopList.length > 0">
        <li class="shop-item" v-for="(good, index) in recommendShopList" :key="index">
          <div class="pic">
            <img :src="good.image_url" alt="">
          </div>
          <div class="title">{{good.short_name}}</div>
          <div class="tags">
            <span class="tag">极速退款</span>
            <span class="tag">爱逛街</span>
          </div>
          <div class="item-bottom">
            <span class="money">￥{{good.price}}</span>
            <span class="totalNum">{{good.sales_tip}}</span>
            <span class="btn">去拼 ></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        msg: "推荐"
      }
    },
    mounted() {
      // 请求列表数据
      this.$store.dispatch('reqRecommendShopList')
    },
    computed:{
      ...mapState(['recommendShopList'])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.recommend
  background  #f5f5f5
  h2
    font-size: 16px
    font-weight bold
    color #333
    height 35px
    line-height 35px
    text-align center
    background #fff
  .shop-list
    padding 5px
    display flex
    flex-wrap wrap
    flex-direction row
    .shop-item:nth-child(2n-1)
      margin-right 1%
    .shop-item
      display flex
      flex-direction column
      margin-top 5px
      width 49.5%
      background #fff
      .pic
        display flex
        align-items center
        justify-content center
        height 100px
        img
          width 100%
      .title
        margin-bottom 5px
        height 25px
        line-height 25px
        font-size 14px
        overflow hidden
      .tags
        height 20px
        display flex
        align-items center
        .tag
          margin-right 5px
          padding 1px 3px
          font-size 12px
          border-radius 3px
          background orange
          color orangered
      .item-bottom
        display flex
        justify-content center
        .money
          display flex
          align-items center
          font-size 12px
          font-weight bold
          color red
        .totalNum
          flex 1
          display flex
          align-items center
          margin-left 5px
          margin-right 5px
          font-size 13px
          color #666
        .btn
          display flex
          align-items center
          justify-content center
          padding 2px 5px
          font-size 12px
          color #333
          border 1px solid #ccc
          border-radius 10px 0 0 10px



</style>
