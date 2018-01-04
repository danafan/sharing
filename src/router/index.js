import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import navbar from '@/components/Apprentice/navbar'
import index from '@/components/Apprentice/index'
import task from '@/components/Apprentice/task'
import taskDetail  from '@/components/Apprentice/taskDetail'
import shopFull from '@/components/Apprentice/shopFull'
import shopMoney from '@/components/Apprentice/shopMoney'
import subOrder from '@/components/Apprentice/subOrder'
import orderCode from '@/components/Apprentice/orderCode'
import recordTask from '@/components/Apprentice/recordTask'
import through from '@/components/Apprentice/through'
import mine from '@/components/Apprentice/mine'
import master from '@/components/Master/index'

Vue.use(Router);

export default new Router({
  routes: [
  {
    path: '/',
    component: login
  },
  {
    path: '/navbar',
    component: navbar,
    children:[
      { path: '/index', component: index},
      { path: '/task', component: task},
      { path: '/mine', component: mine},
    ]
  },
  {
    path:'/taskDetail',
    component: taskDetail
  },
  {
    path:'/shopFull',
    component: shopFull
  },
  {
    path:'/shopMoney',
    component: shopMoney
  },
  {
    path:'/subOrder',
    component: subOrder
  },
  {
    path:'/orderCode',
    component: orderCode
  },
  {
    path:'/recordTask',
    component: recordTask
  },
  {
    path:'/through',
    component: through
  },
  {
    path: '/master',
    component: master
  }
  ]
})
