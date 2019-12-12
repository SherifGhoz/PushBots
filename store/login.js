import { isAuthError } from '~/helpers'

export const state = () => ({
  isLoading: false,
  alertActive: false,
  alert: {
    color: null,
    message: null
  }
})

export const mutations = {
  SET_LOADING(state, loading) {
    state.isLoading = loading
  },

  SET_ALERT(state, [color, message]) {
    state.alertActive = true
    state.alert.color = color
    state.alert.message = message
  },

  CLOSE_ALERT(state) {
    state.alertActive = false
    state.alert.color = null
    state.alert.message = null
  }
}

export const getters = {
  alert(state) {
    return state.alert
  },
  alertActive(state) {
    return state.alertActive
  },
  isLoading(state) {
    return state.isLoading
  }
}

export const actions = {
  closeAlert({ commit }) {
    commit('CLOSE_ALERT')
  },

  async login({ commit }, data) {
    commit('SET_LOADING', true)
    try {
      await this.$auth.loginWith('local', { data })
      commit('SET_LOADING', false)
      commit('SET_ALERT', ['green', 'Welcome!'])
    } catch (e) {
      commit('SET_LOADING', false)
      isAuthError(e)
        ? commit('SET_ALERT', ['red', 'Wrong Email Or Password'])
        : commit('SET_ALERT', ['red', e.message])
    }
  }
}
