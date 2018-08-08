<template>
  <div>
    <router-view/>
    <tabber-bar></tabber-bar>
  </div>
</template>

<script>
import tabberBar from '@/components/nav/tabberBar'
export default {
  name: 'App',
  components: {
    tabberBar
  }
}
</script>

<style lang="stylus">
html, body
  margin: 0
</style>
