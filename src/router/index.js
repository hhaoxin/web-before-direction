import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Index from '@/views/index/index.vue'
import db from '@/utils/localstorage'
import request from '@/utils/request'
import store from '@/store/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

const constRouter = [
  {
    path: '/',
    component: App,
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: Index,
        name: '首页'
      }
    ]
  }
]
const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constRouter
})

const whiteList = ['/login']

export default router
