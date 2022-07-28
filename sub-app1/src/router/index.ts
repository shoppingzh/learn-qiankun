import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const routes: RouteRecordRaw[] = [{
  path: '/hello',
  component: import('@/views/hello.vue')
}]

export default createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/app1' : '/'),
  routes
})

