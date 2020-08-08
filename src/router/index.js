import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  base: '/console/',
  routes: [
    {
      path: "/",
      redirect: "/base"
    },
    {
      path: '/base',
      name: 'base',
      component: () => import('../pages/layout/layout.vue'),
      redirect: '/base/posterTemplate',
      children: [
        {
          path: 'posterRecord',
          name: 'posterRecord',
          component: () => import('../pages/base/posterRecord.vue')
        },
        {
          path: 'posterTemplate',
          name: 'posterTemplate',
          component: () => import('../pages/base/posterTemplate.vue')
        },
      ]
    },
  ]
})
