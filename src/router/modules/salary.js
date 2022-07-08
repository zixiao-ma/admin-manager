/**
 * @author MaZiXiao
 * @date 2022-07-07 20:48
 */
export default {
  path: '/system',
  name: 'salary-query',
  component: () => import('@/layout/index'),
  redirect: '/system/user',
  meta: {
    title: '系统管理',
    icon: 'setting-outlined'
  },
  children: [
    {
      path: '/system/salary',
      name: '/system/salary',
      component: () => import('@/views/salary'),
      meta: {
        title: '薪酬管理',
        icon: 'appstore-outlined'
      }
    }
  ]
}
