<template>
  <div class="home">
    <ly-tab
      v-model="selectedId"
      :items="items"
      :options="options"
      @change="routerJump"
      class="home-tab"
    >
    </ly-tab>
    <router-view />
  </div>
</template>

<script>
  import Vue from 'vue'
  import LyTab from 'ly-tab'

  Vue.use(LyTab);
  export default {
    data() {
      return {
        selectedId: 0,
        items: [
          {label: '热门'},
          {label: '女装'},
          {label: '内衣'},
          {label: '鞋包'},
          {label: '百货'},
          {label: '母婴'},
          {label: '手机'},
          {label: '男装'},
          {label: '电器'}
        ],
        options: {
          activeColor: '#e92321'
          // 可在这里指定labelKey为你数据里文字对应的字段
        },
        routerArr: ['/home/hot', '/home/dress', '/home/underclothes', '/home/shoes', '/home/general', '/home/mbaby', '/home/phone', '/home/man', '/home/elec']
      }
    },
    methods: {
      routerJump(item, index) {
        this.$router.replace(this.routerArr[index])
      },
      routerChange() {
        this.selectedId = this.routerArr.indexOf(this.$route.path)
      }
    },
    mounted() {
      // 路由变化是改变二级路由指向
      this.routerChange();
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
.home
  padding-top: 43px
  height 100%
  .home-tab
    position fixed
    top 0
    left 0
    width 100%
    z-index 998
</style>
