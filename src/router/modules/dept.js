/**
 * @author MaZiXiao
 * @date 2022-07-07 20:46
 */
export default {
  path: '/system',
  name: 'dept-query',
  component: () => import('@/layout/index'),
  redirect: '/system/user',
  meta: {
    title: '系统管理',
    icon: 'setting-outlined'
  },
  children: [
    {
      path: '/system/dept',
      name: '/system/dept',
      component: () => import('@/views/dept'),
      meta: {
        title: '部门管理',
        icon: 'setting-outlined'
      }
    }
  ]
}
