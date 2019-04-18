<template>
  <div class="login">
    <div class="logo"><img src="./images/login_footer.png" alt=""></div>
    <div class="form">
      <div class="tabBar">
        <div class="item" :class="{current: phoneLoginMode}" @click="changeLoginMode(true)">手机登录</div>
        <div class="item" :class="{current: !phoneLoginMode}" @click="changeLoginMode(false)">账号登录</div>
      </div>
      <div class="phone-panel" v-if="phoneLoginMode">
        <div class="input-item" v-show="count === 0">
          <input type="text" placeholder="请输入手机号" v-model="phone" autocomplete="off">
          <span :class="{disable: checkPhone}" @click="postCode">发送验证码</span>
        </div>
        <div class="input-item" v-show="count > 0">
          <input type="text" placeholder="请输入手机号" v-model="phone" autocomplete="off">
          <span>已发送 {{count}} s</span>
        </div>
        <div class="input-item">
          <input type="text" v-model="phoneCaptcha" placeholder="验证码">
          <img src="" alt="">
        </div>
        <div class="tips">温馨提示：未注册的账号的手机号，登录时自动注册，且代表已同意 <a href="#">服务协议与隐私政协</a></div>
      </div>
      <div class="pwd-panel" v-else>
        <div class="input-item">
          <input type="text" v-model="title" placeholder="用户名/手机号/邮箱">
        </div>
        <div class="input-item">
          <input type="password" v-model="pwd" v-if="pwdHide" placeholder="密码">
          <input type="text" v-model="pwd" placeholder="密码" v-else>
          <i @click="pwdToggle"></i>
        </div>
        <div class="input-item">
          <input type="text" v-model="imgCaptcha" class="input-captcha" placeholder="验证码">
          <img ref="captcha" src="http://127.0.0.1:3000/api/captcha" @click="getCaptcha()">
        </div>
      </div>

      <div class="button-group">
        <div class="button-login" @click="doLogin">登录</div>
        <div class="button-back">返回</div>
      </div>
    </div>

  </div>
</template>

<script>
  import { getPhoneCode, postPhoneLogin, postPwdLogin } from '../../api/index'
  export default {
    name: "Login",
    data() {
      return {
        phoneLoginMode: true,
        count: 0,
        pwdHide: true,
        phone: '',
        phoneCaptcha: '',
        title: '',
        pwd: '',
        imgCaptcha: ''
      }
    },
    computed: {
      checkPhone() {
        let reg = /^1[35678][0-9]{9}$/;
        return  !reg.test(this.phone);
      }
    },
    methods: {
      changeLoginMode(flag) {
        this.phoneLoginMode = flag;
      },
      // 获取图片验证啊
      getCaptcha() {
        this.$refs.captcha.src = "http://127.0.0.1:3000/api/captcha?"+ new Date();
      },
      // 密码明文密文切换
      pwdToggle() {
        this.pwdHide = !this.pwdHide;
      },
      // 发送验证啊
      postCode() {
        if(this.checkPhone) return false;
        getPhoneCode(this.phone);
        this.count = 60;
        this.timer = setInterval(()=> {
          this.count --;
          if(this.count <= 0) {
            clearInterval(this.timer)
          }
        },1000)
      },
      // 登录
      async doLogin() {
        let result;
        if(this.phoneLoginMode) {
          result = await postPhoneLogin(this.phone, this.phoneCaptcha);
        }else {
          result = await postPwdLogin(this.title, this.pwd, this.imgCaptcha);
        }
        if(result.success_code === 200) {
          this.$store.dispatch('syncSaveUserInfo',result.user_info);
          this.$router.replace('/me')
        }
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .login
    padding-top 50px
    width 100%
    height 100%
    background #fff
    box-sizing border-box
    .logo
      margin 0 auto 20px
      width 70%
      img
        width 100%
        height auto
        border-radius 10px
    .form
      margin 0 auto;
      width 80%
      .tabBar
        margin-bottom 15px
        display flex
        justify-content space-around
        .item
          padding 0 8px
          height 35px
          line-height 35px
          text-align center
          font-size 16px
          font-weight bold
        .current
          color #e02e24
          border-bottom 2px solid #e02e24
      .phone-panel
        padding 10px 20px
        .input-item
          display flex
          align-items stretch
          margin-bottom 15px
          width 100%
          height 40px
          line-height 40px
          border 1px solid #ccc
          border-radius 5px
          overflow: hidden
          input
            flex 1
            border none
            padding-left 5px
            outline none
          span
            margin-left 10px
            padding 0 5px
            font-size 13px
            color #333
          .disable
            color #999
        .tips
          line-height 22px
          font-size 12px
          color #999
          a
            color #e02e24
      .pwd-panel
        padding 10px 20px
        .input-item
          display flex
          align-items stretch
          margin-bottom 15px
          width 100%
          height 40px
          border 1px solid #ccc
          border-radius 5px
          line-height 40px
          overflow hidden
          input
            flex 1
            border none
            padding-left 5px
            outline none
          .input-captcha
            width 60px
          i
            margin-top 10px
            margin-right 10px
            width 20px
            height 20px
            background red
          img
            flex 1
            margin 2px 0 0 10px
            height 35px
      .button-group
        padding 10px 20px
        div
          margin-bottom 10px
          width 100%
          height 40px
          line-height 40px
          font-size 18px
          text-align center
          border-radius 5px
        .button-login
          background #e02e24
          color #fff
        .button-back
          border 1px solid #e02e24
          color #e02e24
</style>