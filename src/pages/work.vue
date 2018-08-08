<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">推荐</mt-tab-item>
      <mt-tab-item id="2">关注</mt-tab-item>
      <mt-tab-item id="3">兴趣</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected" swipeable>
      <mt-tab-container-item id="1">
        <mt-cell :title="'content ' + 1" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <workSubscribe></workSubscribe>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell :title="'content ' + 3" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import workSubscribe from './work/components/workSubscribe'
export default {
  name: 'works',
  components: {
    workSubscribe
  },
  data () {
    return {
      selected: '1'
    }
  }
}
</script>

<style lang="stylus">
  .mint-tab-item-label
    color #7b7b7b
    font-size .28rem
</style>
