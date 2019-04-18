<template>
  <div class="search">
    <search-bar :showSearchPage=showSearchPage />
    <div class="main">
      <div class="left-menu">
        <ul class="menu-wrap" v-if="searchShopList.length > 0">
          <li class="item"
              v-for="(item,index) in searchShopList"
              :class="{current: index===currentIndex}"
              ref="menuItem"
              @click="menuItemClick(index)"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="right-content">
        <ul class="content-wrap" v-if="searchShopList.length > 0">
          <li class="item-block"
              ref="content"
              v-for="(list, i) in searchShopList"
              :key="i">
            <div class="title-bar">
              <span class="title">{{list.name}}</span>
              <span class="more">查看更多 &gt;</span>
            </div>
            <div class="lists">
              <div class="list-item" v-for="(item, index) in list.items" :key="index">
                <img :src="item.icon" alt="">
                <span class="name">{{item.title}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <search-page v-show="isShow" :showSearchPage=showSearchPage />
  </div>
</template>

<script>
  import SearchBar from './children/SearchBar'
  import SearchPage from './children/SearchPage'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        scrollY: 0,
        leftHeight: 52,
        rightHeightArr: [],
        isShow: false,
        timer: null
      }
    },
    watch:  {
      searchShopList() {
        this.$nextTick(()=> {
          this._InitScroll();
          // 获取右侧内容高度
          this.getRightHeight();
        });

      }
    },
    methods: {
      _InitScroll() {
        // 左侧菜单滚动
        this.scrollLeft = new BScroll('.left-menu',{
          scrollY: true,
          click: true
        });

        // 右侧内容滚动
        this.scrollRight = new BScroll('.right-content',{
          scrollY: true,
          probeType: 3
        });
        this.scrollRight.on('scroll',(pos)=> {
          clearTimeout(this.timer);

          this.timer = setTimeout(()=> {
            this.scrollY = Math.abs(pos['y']);
          },10)
        })
      },
      getRightHeight() {
        let aLis = this.$refs.content;
        let tempArr = [];
        let top = 0;
        tempArr.push(top);
        Array.prototype.slice.call(aLis).forEach(li=> {
          top += li.clientHeight;
          tempArr.push(top);
        });
        this.rightHeightArr = tempArr;
      },
      menuItemClick(index) {
        this.scrollRight.scrollTo(0,-this.rightHeightArr[index],300)
      },
      _leftScroll(index) {  // 左侧联动
        let allLis = this.$refs.menuItem;
        let el = allLis[index];
        this.scrollLeft.scrollToElement(el,300,0,0)
      },
      showSearchPage(flag) {  // 显示搜索面板
        this.isShow = flag
      }
    },
    components: {
      SearchBar,
      SearchPage
    },
    computed: {
      ...mapState(['searchShopList']),
      currentIndex() {
        return this.rightHeightArr.findIndex((item,index)=> {
          this._leftScroll(index);
          return this.scrollY >= item && this.scrollY < this.rightHeightArr[index+1]
        });
      }
    },
    mounted() {
      this.$store.dispatch('reqSearchShopList');
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .search
    height 100%
    background #fff
    .main
      position absolute
      top 62px
      left 0
      right 0
      bottom 50px
      display flex
      overflow hidden
      .left-menu
        width 80px
        height 100%
        background #f5f5f5
        .menu-wrap
          display flex
          flex-direction column
          .item
            display flex
            justify-content center
            align-items center
            height 52px
            color #333
            font-size 15px
            font-weight lighter
          .current
            color red
            position relative
            &::after
              content ''
              position absolute
              left 0
              top 50%
              width 4px
              height 50%
              transform translateY(-50%)
              background red
      .right-content
        flex 1
        padding 10px
        .content-wrap
          display flex
          flex-direction column
          .item-block
            display flex
            flex-direction column
            .title-bar
              display flex
              justify-content space-between
              align-items center
              height 37px
              .title
                font-size 15px
                color #333
              .more
                font-size 14px
                color #666
            .lists
                display flex
                flex-wrap wrap
              .list-item
                width 33%
                display flex
                flex-direction column
                justify-content center
                align-items center
                margin-bottom 5px
                img
                  width 60%
                .name
                  font-size 13px
                  color #333


</style>
