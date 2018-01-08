import Vue from 'vue'
import Router from 'vue-router'
import connection from '@/components/connection'
import login from '@/components/login'
import registration from '@/components/registration'
import navbar from '@/components/Apprentice/navbar'
import index from '@/components/Apprentice/index'
import goApp from '@/components/Apprentice/goApp'
import task from '@/components/Apprentice/task'
import taskDetail  from '@/components/Apprentice/taskDetail'
import shopFull from '@/components/Apprentice/shopFull'
import shopMoney from '@/components/Apprentice/shopMoney'
import subOrder from '@/components/Apprentice/subOrder'
import orderCode from '@/components/Apprentice/orderCode'
import recordTask from '@/components/Apprentice/recordTask'
import through from '@/components/Apprentice/through'
import mine from '@/components/Apprentice/mine'
import cash from '@/components/Apprentice/cash'
import cashState from '@/components/Apprentice/cashState'
import property from '@/components/Apprentice/property'
import updateInfo from '@/components/Apprentice/updateInfo'
import updatePass from '@/components/Apprentice/updatePass'
import guest from '@/components/Apprentice/guest'
import about from '@/components/about'
import master from '@/components/Master/index'

Vue.use(Router);

export default new Router({
  routes: [
  {
    path: '/',
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
    path: '/master',
    component: master
  }
  ]
})
