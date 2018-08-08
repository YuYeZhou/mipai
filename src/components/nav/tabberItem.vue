<template>
  <a class="m-tabbar-item"  @click="goToRouter">
        <span class="m-tabbar-item-icon" v-show="!isActive"><slot name="icon-normal"></slot></span>
        <span class="m-tabbar-item-icon" v-show="isActive"><slot name="icon-active"></slot></span>
        <span class="m-tabbar-item-text"><slot></slot></span>
    </a>
</template>

<script>
export default{
  props: {
    id: {
      type: String
    }
  },
  data () {
    return {
      showBar: ''
    }
  },
  computed: {
    isActive () {
      // console.log(this.$parent.value)
      // console.log(this.id)
      if (this.$parent.value === this.id) {
        // this.$parent.$emit('toggle',true)
        return true
      }
    }
  },
  methods: {
    goToRouter () {
      // this.$parent.$emit('input', this.id)
      this.$router.push(this.id)
    }
  }
}
</script>

<style lang='stylus'>
.m-tabbar-item
  flex: 1
  text-align: center
  .m-tabbar-item-icon
    display: block
    padding-top: .04rem
    img
      width: .56rem
      height: .56rem
  .m-tabbar-item-text
    display: block
    font-size: .2rem
    color:#949494
  &.is-active
    .m-tabbar-item-text
      color: @tabbarActiveColor
</style>
