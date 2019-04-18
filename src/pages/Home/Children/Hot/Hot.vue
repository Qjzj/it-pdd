<template>
  <div class="hot" ref="hot">
    <div class="hot-wrap">
      <div class="swiper-container" v-if="homeCasual.length > 0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in homeCasual" :key="index">
            <img :src="'http://127.0.0.1:3000'+item.imgurl" width="100%" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <!--  首页导航模块  -->
      <hot-nav />

      <!--广告栏位-->
      <div class="hot-adv">
        <img src="../../images/hot_ad/home_ad.gif" width="100%" alt="">
      </div>
      <!--商品列表-->
      <HotList />
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import BScroll from 'better-scroll'
  import HotNav from './HotNav'
  import HotList from './HotList'
  import {mapState} from 'vuex';
  export default {
    name: "Hot",
    components: {
      HotNav,
      HotList
    },
    computed: {
      ...mapState(['homeCasual', 'homeShopList'])
    },
    watch: {
      homeCasual() {
        this.$nextTick(()=>{
          // 轮播图
          new Swiper('.swiper-container', {
            autoplay: {
              delay: 3000,
              disableOnInteraction: false
            },//可选选项，自动滑动
            pagination: {
              el: '.swiper-pagination',
            }
          })
        });
      },

    },
    methods: {
      reqHomeCasual() {
        // 请求轮播图数据
        this.$store.dispatch('reqHomeCasual');
        // 请求首页导航数据
        this.$store.dispatch('reqHomeNav');
        // 请求首页商品数据
        this.$store.dispatch('reqHomeShopList');
      }

    },
    mounted() {
      // 请求轮播图数据
      this.reqHomeCasual();
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus" ref="stylesheet/stylus">
  .hot
    height 100%
    padding-bottom 50px
    /*overflow hidden*/
    .swiper-container
      width 100%
    .hot-adv
      background #fff


</style>
