import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false,
  user_type: null,
}

const mutations = {
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set (state, [variable, value]) {
    state[variable] = value
  },

  SET_USER_TYPE(state, user_type) {
      state.user_type = user_type;
  },
}

const actions = {
  setUserType(state, user_type) {
      state.commit(`SET_USER_TYPE`, user_type);
  },
}

const getters = {
  getUserType: state => {
      return state.user_type;
  },
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})