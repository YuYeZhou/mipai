<template>
  <div>
    <div class="me-icons-divide"></div>
    <div class="me-icons-container">
      <div class="me-icons" v-for="icon of list" :key="icon.id">
        <img class="me-icons-img" :src="icon.src">
        <p class="me-icons-desc">{{icon.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'meIcons',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.me-icons-divide
  background #f3f6f5
  height .28rem
.me-icons-container
  display flex
  padding .25rem 0
  .me-icons
    width 25%
    .me-icons-img
      display block
      height 1rem
      width 1rem
      margin 0 auto
    .me-icons-desc
      padding-top .25rem
      text-align center
</style>
