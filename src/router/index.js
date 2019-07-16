import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/feedback'
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: () => import(/* webpackChunkName: "feedback" */ '../pages/layout/layout.vue'),
      redirect: '/feedback/list',
      children: [
        {
          path: 'list',
          name: 'FeedbackList',
          component: () => import(/* webpackChunkName: "feedback" */ '../pages/feedback/list.vue')
        },
        {
          path: 'template',
          name: 'FeedbackTemplate',
          component: () => import(/* webpackChunkName: "feedback" */ '../pages/feedback/template.vue')
        },
        {
          path: 'setting',
          name: 'FeedbackSetting',
          component: () => import(/* webpackChunkName: "feedback" */ '../pages/feedback/setting.vue')
        },
      ]
    },
  ]
})
