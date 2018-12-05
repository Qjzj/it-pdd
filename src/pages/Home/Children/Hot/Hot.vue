<template>
  <div class="hot">
    <div class="swiper-container" v-if="homeCasual.length > 0">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in homeCasual" :key="index">
          <img :src="item.imgurl" width="100%" alt="">
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
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

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
      ...mapState(['homeCasual'])
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
      }
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
    .swiper-container
      width 100%
    .hot-adv
      background #fff


</style>
