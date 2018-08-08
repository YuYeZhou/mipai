<template>
  <div class="icon-container">
    <div class="icon-wrap" v-for="icon of list" :key="icon.id">
      <img class="icon-img" :src="icon.src" alt="">
      <div class="icon-desc">
        <h1>{{icon.title}}</h1>
        <p>{{icon.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeIcons',
  props: {
    list: Array
  }
}
</script>

<style lang='stylus'>
.icon-container
  height 0
  padding-bottom 32.66%
  overflow hidden
  .icon-wrap
    display :flex
    float left
    height 0
    width 50%
    box-sizing border-box
    padding .2rem
    padding-bottom 13.83%
    overflow hidden
    background #fff
    .icon-img
      box-sizing border-box
      padding .2px
      height .8rem
      width .8rem
    .icon-desc
      flex 1
      padding-left .2rem
      h1
        font-size .4rem
      p
        font-size .2rem
        padding-top .16rem
        color #ccc
</style>
