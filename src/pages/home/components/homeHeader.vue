<template>
  <div class="top-search">
    <div class="search-wrap">
      <div class="placeholder-img">
        <img src="@/assets/images/ic_search_gray.png" alt="">
      </div>
      <span class="placeholder" @click="handleClick">搜索摄影师、标签、课程或问题</span>
    </div>
    <search @handleShow="updateShow" v-show="showSearch"></search>
  </div>
</template>

<script>
import search from '../../../components/search/search'
export default {
  name: 'homeHeader',
  components: {
    search
  },
  data () {
    return {
      showSearch: false
    }
  },
  methods: {
    handleClick () {
      this.showSearch = true
    },
    updateShow () {
      this.showSearch = false
    }
  }
}
</script>

<style lang='stylus' scoped>
.top-search
  height .6rem
  padding .15rem .3rem
  .search-wrap
    box-sizing: border-box
    width: 100%
    height: .6rem
    background: #eee
    border-radius: .08rem
    color: #c0c0c0
    text-align center
    line-height .6rem
    border-radius .12rem
    .placeholder-img
      line-height .6rem
      display inline-block
    img
      width: .36rem
      height: .36rem
</style>
