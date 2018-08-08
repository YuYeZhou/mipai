<template>
  <div>
    <div class="work-subscribe-title">你喜欢什么呢？</div>
    <div class="work-subscribe">
      <div class="work-subscribe-item" v-for="item of list" :key="item">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'workSubscribe',
  data () {
    return {
      list: ['人像', '风光', '纪实', '手机', '旅行', '街拍', '色彩', '胶片', '静物', '创意', '城市', '航拍']
    }
  }
}
</script>

<style lang='stylus' scoped>
.work-subscribe-title
  margin-top .1rem
  text-align center
  height 1rem
  line-height 1rem
  color #6b6b6b
.work-subscribe
  width 100%
  display flex
  flex-wrap wrap
  justify-content center
  align-items center
  .work-subscribe-item
    margin .1rem
    width 2rem
    height .6rem
    border 1px solid #01a0e9
    border-radius .3rem
    text-align center
    line-height .6rem
    font-size .32rem
    color #01a0e9
</style>
