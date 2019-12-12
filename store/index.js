export const state = () => ({
  apps: [],
  loading: true,
  error: null
})

export const actions = {
  loadApps({ state, commit }) {
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
        commit('updateApps', response.data.data)
        commit('changeLoadingState', false)
      })
  }
}
export const mutations = {
  updateApps(state, apps) {
    state.apps = apps
  },

  changeLoadingState(state, loading) {
    state.loading = loading
  }
}
