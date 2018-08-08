<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="banner of banners" :key="banner.id">
      <img class="swiper-img" :src="banner.url" alt="">
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
import { mapState } from 'vuex'
export default{
  name: 'homeSwiper',
  computed: mapState(['banners']),
  mounted () {
    this.$store.dispatch('getBanners')
  }
}
</script>

<style lang='stylus'>
.mint-swipe-items-wrap
  box-sizing border-box
  width 100%
  padding-bottom 45.73%
  background #ccc
  .swiper-img
    width 100%
</style>
