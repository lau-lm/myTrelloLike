import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Critique from '@/components/Critique'
import Hidden from '@/components/Hidden'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/critique',
      name: 'Critique',
      component: Critique
    },
    {
      path: '/hidden',
      name: 'Hidden',
      component: Hidden
    }
  ]
})
