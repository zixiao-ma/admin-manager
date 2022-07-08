/**
 * @author MaZiXiao
 * @date 2022-07-07 16:30
 */
import request from '@/utils/request'

/**
 *
 * @param data 用户登录参数
 * @return {*}
 */
export const login = (data) => {
  return request.post('/users/login', data)
}
/**
 *
 * @return {Promise<AxiosResponse<any>>}
 */
export const getPermission = () => {
  return request.get('/users/getPermissionList')
}
/**
 *
 * @param data 用户列表
 * @return {Promise<AxiosResponse<any>>}
 */
export const getUserList = (data) => {
  return request.get('/users/list', {
    params: data
  })
}
/**
 *
 * @param data 获取菜单数据
 * @return {Promise<AxiosResponse<any>>}
 */
export const getMenus = (data) => {
  return request.get('/menu/list', {
    params: data
  })
}
/**
 *
 * @param data获取角色数据列表
 * @return {Promise<AxiosResponse<any>>}
 */
export const getRoleList = (data) => {
  return request.get('/roles/list', {
    params: data
  })
}
/**
 *
 * @param data 获取部门管理数据
 * @return {Promise<AxiosResponse<any>>}
 */
export const getDeptList = (data) => {
  return request.get('/dept/list', {
    params: data
  })
}
