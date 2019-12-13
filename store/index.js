export const state = () => ({
  apps: [],
  loading: false,
  total: null,
  error: null
})

export const actions = {
  loadApps({ state, commit }) {
    if (!state.total || state.total > state.apps.length) {
      commit('SET_LOADING_STATE', true)
      this.$axios
        .get('https://pushbots-fend-challenge.herokuapp.com/api/apps', {
          params: {
            take: 10,
            skip: state.apps.length,
            sortBy: 'title',
            direction: 'desc'
          }
        })
        .then((response) => {
          commit('UPDATE_APPS', response.data.data)
          commit('SET_TOTAL', response.data.total)
          commit('SET_LOADING_STATE', false)
        })
        .catch((error) => commit('SET_ERROR', error))
    }
  }
}
export const mutations = {
  UPDATE_APPS(state, apps) {
    state.apps = [...state.apps, ...apps]
  },

  SET_LOADING_STATE(state, loading) {
    state.loading = loading
  },

  SET_ERROR(state, error) {
    state.error = error
  },

  SET_TOTAL(state, total) {
    state.total = total
  }
}
