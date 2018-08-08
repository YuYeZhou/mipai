<template>
  <div class="list">
    <div class="list-header"></div>
    <div class="list-title">
      <img class="list-title-icon" src="@/assets/images/icons/list_icon.png"/>
      <span class="list-title-word">今日实时榜单</span>
      <router-link class="list-title-all" :to="{name: 'raking'}" tag="span">全部></router-link>
    </div>
    <div class="list-wrap">
      <div class="list-img-wrap">
        <img class="list-img" src="@/assets/images/listimg/img_item1.png" />
        <p class="list-img-title">1.Raychain-INF</p>
      </div>
      <div class="list-img-wrap">
        <img class="list-img" src="@/assets/images/listimg/img_item2.png" />
        <p class="list-img-title">2.CHAPA</p>
      </div>
      <div class="list-img-wrap">
        <img class="list-img" src="@/assets/images/listimg/img_item3.png" />
        <p class="list-img-title">3.子丰</p>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'todayList'
}
</script>

<style lang='stylus'>
  .list-header
    background #f3f6f5
    height .28rem
  .list-title
    overflow hidden
    box-sizing border-box
    padding .4rem
    height 1.1rem
    .list-title-icon
      float left
      width .2rem
      height .33rem
    .list-title-word
      float left
      height .3rem
      line-height .3rem
      padding-left .2rem
    .list-title-all
      float right
      height .3rem
      line-height .3rem
      padding-left .2rem
      color #909090
  .list-wrap
    overflow hidden
    display flex
    padding-bottom .8rem
    .list-img-wrap
      height 0
      padding-bottom 33.33%
      background #ccc
      .list-img
        width 100%
      .list-img-title
        height .8rem
        margin .3rem 0
        text-align center
        color #a1a1a1
</style>
