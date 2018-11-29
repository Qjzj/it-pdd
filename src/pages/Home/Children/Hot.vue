<template>
  <div class="hot">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../images/rowing/s1.png" width="100%" alt=""></div>
        <div class="swiper-slide"><img src="../images/rowing/s2.png" width="100%" alt=""></div>
        <div class="swiper-slide"><img src="../images/rowing/s3.png" width="100%" alt=""></div>
        <div class="swiper-slide"><img src="../images/rowing/s4.png" width="100%" alt=""></div>
        <div class="swiper-slide"><img src="../images/rowing/s5.png" width="100%" alt=""></div>
        <div class="swiper-slide"><img src="../images/rowing/s6.png" width="100%" alt=""></div>
        <div class="swiper-slide"><img src="../images/rowing/s7.png" width="100%" alt=""></div>
        <div class="swiper-slide"><img src="../images/rowing/s8.png" width="100%" alt=""></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    name: "Hot",
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }
  }
</script>

<style scoped type="text/stylus" ref="stylesheet/stylus">
  .hot
    .swiper-container
      width: 100%;


</style>