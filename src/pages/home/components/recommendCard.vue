<template>
  <div>
    <div class="content" v-for="work of works" :key="work.id">
      <div class='recommend-card-header'></div>
      <div class="recommend-card-form">精选自 <span v-for="tag of work.tags" :key="tag">#{{tag}}# </span></div>
      <div class="recommend-card-title">
        <img class="recommend-user-face" :src="work.avatar"/>
        <p class="recommend-user-name">{{work.name}}</p>
        <p class="recommend-user-category">{{work.category}}</p>
      </div>
      <div class="recommend-img-wrap">
        <img class="recommend-img" :src="work.url">
      </div>
      <div class="recommend-card-footer">
        <div class="recommend-card-content">
          <div class="recommend-card-score-title">
            <span class="recommend-card-score-title-number">{{getInteger(work.mark)}}</span>
            <span class="recommend-card-score-title-number2">.{{getDecimal(work.mark)}}</span>
            <span class="recommend-card-score-title-number3">分/{{work.number}}人</span>
            <span class="recommend-card-score-title-number4">{{work.thumbup}}赞</span>
            <div class="recommend-card-content-title">
              《{{work.title}}》
            </div>
          </div>
        </div>
        <img class="recommend-card-score" src="@/assets/images/icons/score.png"/>
        <img class="recommend-card-remcommand" src="@/assets/images/icons/recommand.png"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default{
  name: 'recommendCard',
  computed: mapState(['works']),
  methods: {
    getInteger (num) {
      return Math.floor(num)
    },
    getDecimal (num) {
      let arr = num.toString().split('.')
      return arr[1]
    }
  },
  mounted () {
    this.$store.dispatch('getWorks')
  }
}
</script>

<style lang='stylus'>
  .recommend-card-header
    background #f3f6f5
    height .28rem
  .recommend-card-form
    padding 0.2rem 0.2rem 0.05rem 0.2rem
    color #a0a0a0
    font-size .28rem
  .recommend-card-title
    padding 0.2rem
    height .4rem
    line-height .4rem
    .recommend-user-face
      float left
      height .4rem
      width .4rem
      border-radius .2rem
    .recommend-user-name
      padding-left .2rem
      float left
      height .4rem
      line-height .4rem
      color #b1babd
    .recommend-user-category
      float right
      height .4rem
      line-height .4rem
      color #b1babd
  .recommend-img-wrap
    width 100%
    overflow hidden
    height 0
    padding-bottom 53.70%
    background #eee
    .recommend-img
      width 100%
  .recommend-card-footer
    padding 0.2rem
    overflow hidden
    .recommend-card-content
      margin-top .1rem
      float left
      .recommend-card-score-title-number
        font-size .8rem
        color #16baf3
      .recommend-card-score-title-number2
        font-size .3rem
        color #16baf3
      .recommend-card-score-title-number3
        margin-left .2rem
        font-size .3rem
        color #353535
      .recommend-card-score-title-number4
        margin-left .34rem
        font-size .3rem
        color #353535
      .recommend-card-content-title
        color #7b7b7b
        font-size .36rem
        margin-top 0.25rem
    .recommend-card-remcommand, .recommend-card-score
      margin-left .42rem
      float right
      height .95rem
      width .95rem
</style>
