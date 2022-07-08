/**
 * @author MaZiXiao
 * @date 2022-07-07 20:47
 */
export default {
  path: '/system',
  name: 'staff-query',
  component: () => import('@/layout/index'),
  redirect: '/system/user',
  meta: {
    title: '系统管理',
    icon: 'setting-outlined'
  },
  children: [
    {
      path: '/system/staff',
      name: '/system/staff',
      component: () => import('@/views/staff'),
      meta: {
        title: '员工管理',
        icon: 'home-outlined'
      }
    }
  ]
}
