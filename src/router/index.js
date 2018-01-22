import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/Apprentice/index'
const connection = resolve=>System.import('@/components/connection')
const login = resolve=>System.import('@/components/login')
const registration = resolve=>System.import('../components/registration')
const navbar = resolve=>System.import('@/components/Apprentice/navbar')
const goApp = resolve=>System.import('@/components/Apprentice/goApp')
const task = resolve=>System.import('@/components/Apprentice/task')
const taskDetail = resolve=>System.import('@/components/Apprentice/taskDetail')
const shopFull = resolve=>System.import('@/components/Apprentice/shopFull')
const shopMoney = resolve=>System.import('@/components/Apprentice/shopMoney')
const orderCode = resolve=>System.import('@/components/Apprentice/orderCode')
const recordTask = resolve=>System.import('@/components/Apprentice/recordTask')
const through = resolve=>System.import('@/components/Apprentice/through')
const mine = resolve=>System.import('@/components/Apprentice/mine')
const cash = resolve=>System.import('@/components/Apprentice/cash')
const property = resolve=>System.import('@/components/Apprentice/property')
const raking = resolve=>System.import('@/components/Apprentice/raking')
const updateInfo = resolve=>System.import('@/components/Apprentice/updateInfo')
const updatePass = resolve=>System.import('@/components/Apprentice/updatePass')
const guest = resolve=>System.import('@/components/Apprentice/guest')
const about = resolve=>System.import('@/components/about')
const verification = resolve=>System.import('@/components/verification')

Vue.use(Router);

export default new Router({
  routes: [
  {
    path: '/connection',
    component: connection
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/registration',
    component: registration
  },
  {
    path: '/navbar',
    component: navbar,
    children:[
      { path: '/index', component: index},
      { path: '/goApp', component: goApp},
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
    path:'/cash',
    component: cash
  },
  {
    path:'/property',
    component: property
  },
  {
    path:'/raking',
    component: raking
  },
  {
    path:'/updateInfo',
    component: updateInfo
  },
  {
    path:'/updatePass',
    component: updatePass
  },
  {
    path:'/guest',
    component: guest
  },
  {
    path:'/about',
    component: about
  },
  {
    path:'/verification',
    component: verification
  }
  ]
})
