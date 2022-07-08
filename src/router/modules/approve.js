/**
 * @author MaZiXiao
 * @date 2022-07-07 20:49
 */
export default {
  path: '/audit',
  name: 'approve-query',
  component: () => import('@/layout/index'),
  redirect: '/audit/leave',
  meta: {
    title: '审批管理',
    icon: 'setting-outlined'
  },
  children: [
    {
      path: '/audit/approve',
      name: '/audit/approve',
      component: () => import('@/views/approve'),
      meta: {
        title: '待审批',
        icon: 'menu-outlined'
      }
    }
  ]
}
