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
  import BScroll from 'better-scroll';
  import { Indicator } from 'mint-ui';
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        msg: "推荐",
        offset: 0,
        count: 20,
        scrollY: 0
      }
    },
    mounted() {
      Indicator.open("数据加载中");
      // 请求列表数据
      this.getListData();
    },
    computed:{
      ...mapState(['recommendShopList'])
    },
    watch: {
      recommendShopList() {
        this.$nextTick(() => {
          this.offset += this.count;
          this._InitScroll();
        })
      }
    },
    methods: {
      _InitScroll() {
        this.listScroll = new BScroll('.shop-content', {
          scrollY: true,
          probeType: 3
        });

        this.listScroll.on('touchEnd', (pos) => {
          if(pos.y > 50) {
            console.log("下拉刷新");
          }

          if(pos.y < this.listScroll.maxScrollY - 30) {
            // 记录当前位置
            this.scrollY = pos.y;
            console.log(this.scrollY);
            this.getListData();
            Indicator.open("数据加载中");
          }
        });
        this.listScroll.on('scrollEnd',()=> {
          this.listScroll.refresh();
        });
        // 返回刷新时的位置
        this.listScroll.scrollTo(0,this.scrollY,0)
      },
      getListData() {
        this.$store.dispatch('reqRecommendShopList',
          {offset: this.offset, count: this.count,callback: ()=> {
              Indicator.close();
        }})
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.recommend
  background  #f5f5f5
  h2
    position relative
    font-size: 16px
    font-weight bold
    color #333
    height 35px
    background #fff
    border-bottom 1px solid #ccc
    line-height 35px
    text-align center
    z-index 100
  .shop-content
    position fixed
    top 36px
    bottom 50px
    .shop-list
      padding 0 5px
      display flex
      flex-wrap wrap
      flex-direction row
      overflowhidden
      .shop-item:nth-child(2n-1)
        margin-right 1%
      .shop-item
        display flex
        flex-direction column
        margin-bottom 5px
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
