import axios from 'axios'

export default {
  getBanners: async ({ commit }, playload) => {
    // 声明变量用来存放之后获得的数据
    await axios.get('api/banners')
      .then((res) => {
        res = res.data
        if (res.code === 0) {
          const data = res.data
          playload = data.banners
        }
      })
    commit('loadBanners', playload)
  },
  getWorks: async ({ commit }, playload) => {
    // 声明变量用来存放之后获得的数据
    await axios.get('api/works')
      .then((res) => {
        res = res.data
        if (res.code === 0) {
          const data = res.data
          playload = data.works
        }
      })
    commit('loadWorks', playload)
  }
}
