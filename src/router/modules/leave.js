/**
 * @author MaZiXiao
 * @date 2022-07-07 20:49
 */
export default {
  path: '/audit',
  name: 'leave-query',
  component: () => import('@/layout/index'),
  redirect: '/audit/leave',
  meta: {
    title: '审批管理',
    icon: 'setting-outlined'
  },
  children: [
    {
      path: '/audit/leave',
      name: '/audit/leave',
      component: () => import('@/views/leave'),
      meta: {
        title: '休假申请',
        icon: 'file-search-outlined'
      }
    }
  ]
}
