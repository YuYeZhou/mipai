<template>
  <div class="raking" @scrollReachBottom.prevent
      @pullDownEnd.prevent>
  <div class="raking-header">
  <div class="raking-header-arrow" @click="handleClick">&lt;</div>
    榜单
  </div>
    <div class="contain" ref="wrapper">
      <div class="content">
        <div class="card-title">
          今日榜单
        </div>
        <div class="card" v-for="raking of rakings" :key="raking.id">
          <img class="card-img" :src="raking.src"/>
          <div class="card-desc">
            <span style="font-size: .8rem">{{raking.id+1}}</span>
            <p style="float: right; height: .8rem; line-height: .8rem">{{raking.name}}</p>
          </div>
        </div>
      </div>
    </div>
    <!--<vue-waterfall-easy
      :imgsArr="rakings"
      :imgWidth="120"
      :maxCols="2"
      :loadingDotCount="0"
    >
      <div class="img-info" slot-scope="props">
        <p class="some-info">第{{props.index+1}}张图片</p>
        <p class="some-info">{{props.value.name}}</p>
      </div>
    </vue-waterfall-easy>-->
  </div>
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'raking',
  data () {
    return {
      rakings: []
    }
  },
  components: {
    vueWaterfallEasy
  },
  methods: {
    async getRakings () {
      await axios.get('api/rakings')
        .then((res) => {
          res = res.data
          if (res.code === 0) {
            const data = res.data
            this.rakings = data.rakings
          }
        })
    },
    handleClick () {
      this.$router.back()
    }
  },
  mounted () {
    // this.$store.dispatch('getWorks')
    this.getRakings()
    // console.log(Waterfall)
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
  }
}
</script>

<style lang='stylus'>
.raking
  position absolute
  z-index 990
  width 100%
  height 100%
  background: #eee
  .raking-header
    position relative
    height 0.9rem
    line-height .9rem
    font-size .35rem
    text-align center
    background #fff
    .raking-header-arrow
      position absolute
      height 0.9rem
      line-height .9rem
      font-size: .55rem
      color #aaa
      top 0
      left .25rem
  .contain
    overflow hidden
    position absolute
    top 0.9rem
    right 0
    bottom 0
    left 0
    .content
      overflow hidden
      width 100%
      box-sizing border-box
      padding .2rem
      column-count 2
      column-gap 0.2rem
      column-rule 0px solid #ff0000
      .card-title
        border-radius .05rem
        height .8rem
        line-height .8rem
        text-align center
        background #bcd2ee
      .card
        overflow hidden
        box-sizing border-box
        padding .1rem 0
        width 100%
        border-radius .05rem
        break-inside avoid
        .card-img
          width 100%
        .card-desc
          padding .2rem
          background: #fff
</style>
