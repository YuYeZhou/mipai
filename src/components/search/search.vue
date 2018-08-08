<template>
  <div class="search-container" @touchmove.prevent @mousewheel.prevent>
    <div class="top-search">
      <div class="search-wrap">
        <div class="placeholder-img">
          <img src="../../assets/images/ic_search_gray.png" alt="">
        </div>
        <input class="placeholder" placeholder="搜索" />
      </div>
      <div class="cancel" @click="handleClick">取消</div>
    </div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">摄影师</mt-tab-item>
      <mt-tab-item id="2">标签</mt-tab-item>
      <mt-tab-item id="3">课程</mt-tab-item>
      <mt-tab-item id="4">问答</mt-tab-item>
    </mt-navbar>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      selected: '1'
    }
  },
  methods: {
    handleClick () {
      this.$emit('handleShow')
    }
  }
}
</script>

<style lang='stylus'>
.search-container
  position fixed
  left 0;
  top 0;
  width 100%;
  height 100%;
  z-index 10
  background #fff
  .top-search
    display flex
    height .6rem
    padding .15rem .3rem
    .search-wrap
      box-sizing border-box
      width 100%
      height .6rem
      background: #eee
      border-radius .08rem
      color #c0c0c0
      padding-left .1rem
      line-height .6rem
      border-radius .12rem
      .placeholder-img
        line-height .6rem
        display inline-block
      .placeholder
        background #eee
        color #c0c0c0
        line-height .4rem
      img
        width .36rem
        height .36rem
    .cancel
      width 1rem
      text-align right
      height .6rem
      line-height .6rem
  .mint-tab-item-label
    color #666
    font-size .28rem
</style>
