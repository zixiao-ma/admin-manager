import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login'
import user from './modules/user'
import role from './modules/role'
import menu from './modules/menu'
import approve from './modules/approve'
import dept from './modules/dept'
import leave from './modules/leave'
import salary from './modules/salary'
import staff from './modules/staff'

export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/welcome',
    component: () => import('@/layout/index'),
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import('@/views/welcome')
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404')
      }
    ]
  }
]
export const privateRoutes = [user, role, menu, approve, dept, leave, salary, staff]
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
