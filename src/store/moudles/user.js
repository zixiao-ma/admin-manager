/**
 * @author MaZiXiao
 * @date 2022-07-07 20:04
 */
import { getItem, setItem } from '@/utils/storage'
import { getPermission } from '@/api/user'
import router from '@/router'

export default {
  namespaced: true,
  state: {
    token: getItem('hxToken') || '',
    userInfo: getItem('userInfo') || {},
    actionList: []
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      setItem('hxToken', state.token)
    },
    setUserInfo (state, info) {
      state.userInfo = info
      setItem('userInfo', info)
    },
    setactionList (state, payload) {
      state.actionList = payload
    },
    logout (state) {
      state.userInfo = {}
      setItem('userInfo', {})
      state.token = ''
      setItem('hxToken', '')
      state.actionList = []
      router.push('/login')
    }
  },
  actions: {
    async getUserInfo ({ commit }) {
      try {
        const res = await getPermission()
        commit('setactionList', res.actionList)
        return res
      } catch (error) {

      }
    }
  }
}
