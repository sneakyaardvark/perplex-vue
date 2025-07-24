// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeDashboard.vue'),
      },
    ],
  },
  {
    path: '/game',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: ':id',
        name: 'GameControl',
        component: () => import('@/views/GameControl.vue')
      }
    ]
  },
  {
    path: '/manage',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '',
        name: 'Manage',
        component: () => import('@/views/GameManagement.vue')
      },
      {
        path: ':id',
        name: 'GameEdit',
        component: () => import('@/views/GameEdit.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
