import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/Index/Home',
          name: 'Home',
          component: Home
        },
        {
          path: '/Index/Search',
          name: 'Search',
          component: Search
        }
      ]
    }
  ]
})
