export const state = () => ({
  alertActive: false,
  alert: {
    type: null,
    color: null,
    message: null
  }
})

export const getters = {
  loggedInUser(state) {
    return state.auth.user
  },
  alert(state) {
    return state.alert
  }
}

export const mutations = {
  alertMessage(state, [type, message]) {
    state.alertActive = true
    state.alert.type = type
    state.alert.color = type === 'success' ? 'green' : 'red'
    state.alert.message = message
  },

  closeAlert(state) {
    state.alertActive = false
  }
}
