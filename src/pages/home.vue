<template>
  <div class="home">
    <router-view></router-view>
    <home-header></home-header>
    <p class="drop-down" v-if="dropDown">松手刷新数据...</p>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <home-swiper></home-swiper>
        <home-icons :list="iconsList"></home-icons>
        <today-list></today-list>
        <recommend-card></recommend-card>
      </div>
    </div>
    <!--<p class="drop-down" v-if="dropUp">加载更多...</p>-->
  </div>
</template>

<script>
import homeHeader from './home/components/homeHeader'
import homeSwiper from './home/components/homeSwiper'
import homeIcons from './home/components/homeIcons'
import todayList from './home/components/todayList'
import recommendCard from './home/components/recommendCard'
import BScroll from 'better-scroll'
import axios from 'axios'
import '../mock/mock.js'
// import { getHomeIcons } from '../store/actions.js'
export default {
  name: 'home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcons,
    todayList,
    recommendCard
  },
  data () {
    return {
      iconsList: [],
      dropDown: false
      // dropUp: false
    }
  },
  methods: {
    async getHomeIcons () {
      await axios.get('api/homeicons')
        .then((res) => {
          res = res.data
          if (res.code === 0) {
            const data = res.data
            this.iconsList = data.homeicons
          }
          // this.$nextTick(() => {
          //   if (!this.scroll) {
          //     let wrapper = this.$refs.wrapper
          //     this.scroll = new BScroll(wrapper, {})
          //     this.scroll.on('touchend', (pos) => {
          //       console.log(pos.y)
          //       if (pos.y > 50) {
          //         this.getHomeIcons()
          //       }
          //     })
          //   } else {
          //     this.scroll.refresh()
          //   }
          // })
        })
    },
    scrollFn () {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            scrollY: true,
            probeType: 3
          })
        } else {
          this.scroll.refresh()
        }
        this.scroll.on('scroll', (pos) => {
          //  如果下拉超过50px 就显示下拉刷新的文字
          if (pos.y > 50) {
            this.dropDown = true
          } else {
            this.dropDown = false
          }
        })
        //  this.scroll.on('touchEnd', (pos) => {
        //   if (pos.y > 50) {
        //     console.log("下拉刷新成功")
        //     this.dropDown = false
        //   }
        //   if(this.scroll.maxScrollY>pos.y+10){
        //     console.log("加载更多")
        //     this.dropUp = true
        //     //使用refresh 方法 来更新scroll  解决无法滚动的问题
        //     this.scroll.refresh()
        //   }
        //   console.log(this.scroll.maxScrollY+"总距离----下拉的距离"+pos.y)
        //  })
        //  console.log(this.scroll.maxScrollY)
      })
    }
  },
  mounted () {
    this.getHomeIcons()
    // this.$store.dispatch('getBanners')
    // this.$nextTick(() => {
    //   let wrapper = this.$refs.wrapper
    //   this.scroll = new BScroll(wrapper, {})
    // })
    this.scrollFn()
  }
}
</script>

<style lang='stylus'>
.home
  overflow hidden
  .wrapper
    overflow :hidden
    position :absolute
    top .9rem
    left 0
    right 0
    bottom 1rem
</style>
