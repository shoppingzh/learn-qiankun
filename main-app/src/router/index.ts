import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: RouteRecordRaw[] = [{
  path: '/',
  component: Layout,
  children: [{
    path: '',
    component: import('@/views/index.vue')
  }, {
    path: 'hello',
    component: import('@/views/hello.vue')
  }]
}/*, {
  path: '/:pathMatch(.*)*',
  component: import('@/views/404.vue')
}*/, {
  path: '/app1',
  component: Layout,
  children: [{
    path: ':pathMatch(.*)*',
    component: import('@/views/app1.vue')
  }]
}]

export default createRouter({
  history: createWebHistory('/'),
  routes
})


