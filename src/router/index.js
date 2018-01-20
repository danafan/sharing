import Vue from 'vue'
import Router from 'vue-router'
// import connection from '@/components/connection'
// import login from '@/components/login'
// import registration from '@/components/registration'
// import navbar from '@/components/Apprentice/navbar'
import index from '@/components/Apprentice/index'
//import goApp from '@/components/Apprentice/goApp'
//import task from '@/components/Apprentice/task'
// import taskDetail  from '@/components/Apprentice/taskDetail'
// import shopFull from '@/components/Apprentice/shopFull'
// import shopMoney from '@/components/Apprentice/shopMoney'
// import orderCode from '@/components/Apprentice/orderCode'
// import recordTask from '@/components/Apprentice/recordTask'
// import through from '@/components/Apprentice/through'
//import mine from '@/components/Apprentice/mine'
// import cash from '@/components/Apprentice/cash'
// import cashState from '@/components/Apprentice/cashState'
// import property from '@/components/Apprentice/property'
// import raking from '@/components/Apprentice/raking'
// import updateInfo from '@/components/Apprentice/updateInfo'
// import updatePass from '@/components/Apprentice/updatePass'
// import guest from '@/components/Apprentice/guest'
// import about from '@/components/about'
// import verification from '@/components/verification'

const connection = resolve=>System.import('@/components/connection')
const login = resolve=>System.import('@/components/login')
const registration = resolve=>System.import('../components/registration')
const navbar = resolve=>System.import('@/components/Apprentice/navbar')
//const index = resolve=>System.import('@/components/Apprentice/index')
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
const cashState = resolve=>System.import('@/components/Apprentice/cashState')
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
    path:'/cashState',
    component: cashState
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
