import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import works from '../pages/work'
import study from '../pages/study'
import me from '../pages/me'
import raking from '../pages/raking'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: 'raking',
          name: 'raking',
          component: raking
        }
      ]
    }, {
      path: '/works',
      name: 'works',
      component: works
    }, {
      path: '/study',
      name: 'study',
      component: study
    }, {
      path: '/me',
      name: 'me',
      component: me
    }
  ]
})

// , {
//   path: '/search',
//   name: 'search',
//   component: search,
//   meta: {
//     nav: false
//   }
