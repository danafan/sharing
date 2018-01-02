import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import apprentice from '@/components/Apprentice/index'
import master from '@/components/Master/index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/apprentice',
      component: apprentice
    },
    {
      path: '/master',
      component: master
    }
  ]
})
