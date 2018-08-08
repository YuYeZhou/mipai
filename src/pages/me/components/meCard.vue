<template>
  <div class="profile-container">
    <img class="profile-face" src="@/assets/images/users/user_3.jpg"/>
    <p class="profile-name">白小白</p>
    <p class="profile-intro">简介：一名小键摄</p>
    <div class="profile-category">
      <div class="profile-category-item item-border">
        <p>12</p>
        <p>作品</p>
      </div>
      <div class="profile-category-item item-border">
        <p>56</p>
        <p>关注</p>
      </div>
      <div class="profile-category-item item-border">
        <p>3</p>
        <p>粉丝</p>
      </div>
      <div class="profile-category-item">
        <p>19</p>
        <p>标签</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'meCard'
}
</script>

<style lang="stylus" scoped>
.profile-container
  box-sizing border-box
  padding .4rem
  height 5.6rem
  width 100%
  background #aaa
  .profile-face
    display block
    height 1.5rem
    width 1.5rem
    border-radius .75rem
    border 1px solid #fff
    margin .25rem auto 0
  .profile-name, .profile-intro
    text-align center
    color #fff
    font-size .36rem
    margin-top .32rem
  .profile-category
    display flex
    align-items center
    justify-content space-around
    margin-top .4rem
    .profile-category-item
      width 25%
      color #fff
      &.item-border
        border-right 1px solid #fff
      p
        text-align center
        font-size .40rem
        margin-top .2rem
</style>
