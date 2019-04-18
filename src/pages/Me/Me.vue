<template>
  <div class="me">
    <div class="profile" v-if="userInfo && userInfo.id > 0">
      <div class="profile-header">
        <div class="info">
          <div class="content">
            <div class="pic"><img src="./images/timg.jpg" alt=""></div>
            <div class="title">娃哈哈</div>
          </div>
          <div class="pin-return">
            <span> <i class="pdd-hongbao"></i> 拼单返现</span>
          </div>
        </div>
        <div class="pincard">
          <span class="title">拼单卡品牌权益</span>
          <span class="discount">大宝7折疯抢</span>
        </div>
      </div>
      <div class="order-menu">
        <div class="title-bar">
          <span>我的订单</span>
          <span class="more">查看全部</span>
        </div>
        <div class="order-wrap">
          <div class="item">
            <i class="pdd-daifukuan"></i>
            <span>待付款</span>
          </div>
          <div class="item">
            <i class="pdd-share"></i>
            <span>待分享</span>
          </div>
          <div class="item">
            <i class="pdd-daifahuo"></i>
            <span>待发货</span>
          </div>
          <div class="item">
            <i class="pdd-daishouhuo"></i>
            <span>待收货</span>
          </div>
          <div class="item">
            <i class="pdd-daipingjia"></i>
            <span>待评价</span>
          </div>
        </div>
      </div>
      <div class="middle-menu">
        <div class="item">
          <i class="pdd-youhuiquan"></i>
          <span>优惠券</span>
        </div>
        <div class="item">
          <i class="pdd-icon_save"></i>
          <span>商品收藏</span>
        </div>
        <div class="item">
          <i class="pdd-haofangtuoiconfont_dianpushoucang"></i>
          <span>店铺收藏</span>
        </div>
        <div class="item">
          <i class="pdd-zuji"></i>
          <span>历史浏览</span>
        </div>
        <div class="item">
          <i class="pdd-tuikuanguanli"></i>
          <span>店铺售后</span>
        </div>
      </div>
      <div class="bottom-menu">
        <div class="item">
          <i class="pdd-hongbao"></i>
          <span>新人红包</span>
        </div>
        <div class="item">
          <i class="pdd-liwu"></i>
          <span>邀请好友</span>
        </div>
        <div class="item">
          <i class="pdd-dizhi"></i>
          <span>收货地址</span>
        </div>
        <div class="item">
          <i class="pdd-pingjia"></i>
          <span>我的评价</span>
        </div>
        <div class="item">
          <i class="pdd-service_icon"></i>
          <span>官方客服</span>
        </div>
        <div class="item">
          <i class="pdd-shezhi"></i>
          <span>设置</span>
        </div>
      </div>
    </div>
     <select-login v-else />
  </div>
</template>

<script>
  import SelectLogin from './children/SelectLogin'

  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        
      }
    },
    computed:  {
      ...mapState(['userInfo'])
    },
    components:  {
      SelectLogin
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import '../../common/libs/pddIcon/style.css'
  .me
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    height 100%
    padding-bottom 50px
    .profile-header
      display flex
      flex-direction column
      padding 15px 15px 0
      background #fff
      .info
        display flex
        justify-content space-between
        height 75px
        .content 
          display flex
          align-items center
          height 60px
          .pic
            margin-right 15px
            width 60px
            height 60px
            border-radius 50%
            overflow hidden
            img
              width 100%
              height 100%
          .title
            font-size 19px
            color #151516
            line-height 60px
        .pin-return
          display flex
          justify-content flex-end
          align-items center
          height 60px
          span
            height 30px
            padding 0 10px
            line-height 30px
            border 1px solid #ccc
            border-radius 20px
            overflow hidden
            font-size 14px
            i
              vertical-align -1px
              color red
      .pincard
        display flex
        justify-content space-between
        align-items center
        padding 0 10px
        height 45px
        background linear-gradient(#625e70,#4f4c5b); 
        border-radius 10px 10px 0 0;
        overflow hidden
        .title
          color #ffe2c0
        .discount
          padding 3px 5px
          background #ffe2c0
          border-radius 5px
          color #524e5e
          font-size 13px
    .item
      display flex
      flex-direction column
      align-items center
      width 20%
      color #333
      font-size 13px
      i
        display flex
        justify-content center
        align-items center
        padding 12px 0
        font-size 24px
        color #666
    .order-menu
      display flex
      flex-direction column
      margin-bottom 8px
      background #fff
      .title-bar
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        padding 0 15px
        height 30px
        color #333
        .more
          font-size 13px
          color #999
          &:after
            content ">"
            margin-left 5px
            color #666
            vertical-align 1px
      .order-wrap
        display flex
        padding-bottom 15px
    .middle-menu
      display flex
      margin-bottom 8px
      padding 15px 0
      background #fff
      i
        color #e02e24
    .bottom-menu
      display flex
      flex-wrap wrap
      margin-bottom 8px
      padding 15px  0
      background #fff
      .item
        margin-bottom 5px
        i
          color #CB802A
    
            


          

</style>
