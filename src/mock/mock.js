import Mock from 'mockjs'
import homeicons from './homeicons'
import meicons from './meicons'
import banners from './banners'
import works from './works'
import rakings from './rakings'
Mock.mock('api/homeicons', {
  ...homeicons
})
Mock.mock('api/meicons', {
  ...meicons
})
Mock.mock('api/banners', {
  ...banners
})
Mock.mock('api/works', {
  ...works
})
Mock.mock('api/rakings', {
  ...rakings
})
