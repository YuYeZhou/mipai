<template>
  <div>
    <transition name="fade">
      <div class="cover" transiton="fade" v-if="showAbs">
        <div class="name" v-if="showName">{{name}}</div>
      </div>
    </transition>
    <me-card></me-card>
    <me-icons :list="iconsList"></me-icons>
    <me-list></me-list>    
  </div>
</template>

<script>
import meCard from './me/components/meCard'
import meIcons from './me/components/meIcons'
import meList from './me/components/meList'
import axios from 'axios'
import '../mock/mock'
export default {
  name: 'me',
  components: {
    meCard,
    meIcons,
    meList
  },
  data () {
    return {
      iconsList: [],
      showAbs: false,
      showName: false,
      name: '白小白'
    }
  },
  methods: {
    getMeIcons () {
      axios.get('api/meicons')
        .then((res) => {
          res = res.data
          if (res.code === 0) {
            const data = res.data
            this.iconsList = data.meicons
          }
        })
    },
    handleScroll () {
      const top = document.documentElement.scrollTop
      console.log(top)
      if (top >= 180 ) {
        this.showAbs = true
      }
      if (top >= 230 ) {
        document.documentElement.scrollTop = 230
        this.showName = true
      }
      if (top < 230) {
        this.showName = false
      }
      if (top < 180) {
        this.showAbs = false
      }
    }
  },
  mounted () {
    this.getMeIcons()
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
.cover
  position absolute
  height 5.6rem
  width 100%
  background #153540
  top 0
  opacity 1
  .name
    color #fff
    text-align center
    box-sizing border-box
    padding-top 4.9rem
    font-size .36rem
.fade-enter-active, .fade-leave-active
  transition  opacity 1s
.fade-enter, .fade-leave-active 
  opacity 0
</style>
