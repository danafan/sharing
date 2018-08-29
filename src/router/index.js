import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/Apprentice/index'
const question = resolve=>System.import('@/components/questionnaire')
const connection = resolve=>System.import('@/components/connection')
const login = resolve=>System.import('@/components/login')
const code = resolve=>System.import('@/components/code')
const registration = resolve=>System.import('../components/registration')
const navbar = resolve=>System.import('@/components/Apprentice/navbar')
const goApp = resolve=>System.import('@/components/Apprentice/goApp')
const task = resolve=>System.import('@/components/Apprentice/task')
const taskDetail = resolve=>System.import('@/components/Apprentice/taskDetail')
const activity = resolve=>System.import('@/components/Apprentice/activity')
const shopFull = resolve=>System.import('@/components/Apprentice/shopFull')
const shopMoney = resolve=>System.import('@/components/Apprentice/shopMoney')
const shopCode = resolve=>System.import('@/components/Apprentice/shopCode')
const orderCode = resolve=>System.import('@/components/Apprentice/orderCode')
const recordTask = resolve=>System.import('@/components/Apprentice/recordTask')
const through = resolve=>System.import('@/components/Apprentice/through')
const mine = resolve=>System.import('@/components/Apprentice/mine')
const cash = resolve=>System.import('@/components/Apprentice/cash')
const property = resolve=>System.import('@/components/Apprentice/property')
const raking = resolve=>System.import('@/components/Apprentice/raking')
const appraisal = resolve=>System.import('@/components/Apprentice/appraisal')
const appraisalDetail = resolve=>System.import('@/components/Apprentice/appraisalDetail')
const updateInfo = resolve=>System.import('@/components/Apprentice/updateInfo')
const updatePass = resolve=>System.import('@/components/Apprentice/updatePass')
const guest = resolve=>System.import('@/components/Apprentice/guest')
const taskRole = resolve=>System.import('@/components/Apprentice/taskRole')
const help = resolve=>System.import('@/components/Apprentice/help')
const about = resolve=>System.import('@/components/about')
const verification = resolve=>System.import('@/components/verification')
const attention = resolve=>System.import('@/components/attention')
const certification = resolve=>System.import('@/components/certification')

Vue.use(Router);

export default new Router({
  routes: [
  {
    path: '/question',
    component: question
  },
  {
    path: '/connection',
    component: connection
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/code',
    component: code
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
      { path:'/activity',component: activity},
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
    path:'/shopCode',
    component: shopCode
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
    path:'/appraisal',
    component: appraisal
  },
  {
    path:'/appraisalDetail',
    component: appraisalDetail
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
    path:'/taskRole',
    component: taskRole
  },
  {
    path:'/help',
    component: help
  },
  {
    path:'/about',
    component: about
  },
  {
    path:'/verification',
    component: verification
  },
  {
    path:'/attention',
    component: attention
  },
  {
    path:'/certification',
    component: certification
  },
  ]
})
