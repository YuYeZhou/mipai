<template>
  <div class="m-tabber">
    <m-tabber-item id='home'>
      <img src="../../assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal">
      <img src="../../assets/images/ic_tab_home_active.png" alt="" slot="icon-active">
      首页
    </m-tabber-item>
    <m-tabber-item id='works'>
      <img src="../../assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal">
      <img src="../../assets/images/ic_tab_status_active.png" alt="" slot="icon-active">
      作品
    </m-tabber-item>
    <m-tabber-item id='study'>
      <img src="../../assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal">
      <img src="../../assets/images/ic_tab_subject_active.png" alt="" slot="icon-active">
      学习
    </m-tabber-item>
    <m-tabber-item id='me'>
      <img src="../../assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal">
      <img src="../../assets/images/ic_tab_profile_active.png" alt="" slot="icon-active">
      我的
    </m-tabber-item>
  </div>
</template>

<script>
import mTabberItem from './tabberItem'
export default {
  prop: ['value'],
  components: {
    mTabberItem
  },
  computed: {
    value () {
      // console.log(this.$route.matched)
      // if (this.$route.matched[0].name === undefined ){
      //   return value = null
      // }
      return this.$route.matched[0].name
      // return '/home'
    }
  }
}
</script>

<style lang="stylus">
  .m-tabber
    display: flex
    flex-direction: row
    position: fixed
    z-index: 9
    bottom: 0
    left: 0
    right: 0
    width: 100%
    overflow: hidden
    height: 1rem
    background: #fff
    &:before
      content: ''
      position: absolute
      left: 0
      top: 0;
      right: 0
      height: .02rem
      background: @tabbarBorderColor
      transform: scaleY(0.5)
</style>
