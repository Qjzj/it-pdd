<template>
  <div class="select-login">
    <div class="login-block">
      <h2>选择登录方式</h2>
      <button @click="login">
        <i class="pdd-mobilephone_fill"></i>
        手机登录
      </button>
    </div>
    <div class="logo"></div>
    <p class="desc">版权所有，纯属瞎搞</p>
  </div>
</template>

<script>
  export default {
    methods: {
      login() {
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import '../../../common/icon/style.css'
  .select-login
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background: #f5f5f5
    z-index 1000
    .login-block
      position absolute
      top 25%
      left 0
      width 100%
      text-align center
      h2
        margin-bottom 20px
        line-height 25px
        font-size 19px
        text-align center
        color #333333
      button
        width 75%
        height 45px
        background #f6a622
        border none
        border-radius 5px
        color #fff
        font-size 15px
        text-align center
        line-height 45px
        i
          font-size 22px
          vertical-align -4px
    .logo
      position absolute
      left 50%
      margin-left -70px
      bottom 100px
      width 140px
      height 60px
      background url("../images/login_footer.png") no-repeat center
      background-size 100%
    .desc
      position absolute
      left 0
      bottom 75px
      width 100%
      color #666666
      font-size 14px
      text-align center
</style>