import { createStore } from 'vuex'
import user from './moudles/user'
import menu from './moudles/menu'

export default createStore({
  state: {
    loading: false,
    coll: false
  },
  getters: {
    token: state => state.user.token,
    userInfo: state => state.user.userInfo,
    hasuserInfo: state => JSON.stringify(state.user.actionList) === '[]',
    actionList: state => state.user.actionList,
    loadingStatus: state => state.loading,
    collapsed: state => state.coll
  },
  mutations: {
    startLoading (state) {
      state.loading = true
    },
    closeLoading (state) {
      state.loading = false
    },
    toggleCollapsed (state) {
      state.coll = !state.coll
    }
  },
  actions: {},
  modules: {
    user,
    menu
  }
})
