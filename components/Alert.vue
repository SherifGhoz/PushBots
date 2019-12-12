<template>
  <v-snackbar v-model="alertActive" :timeout="2000" :color="alert.color">
    <v-icon v-if="alert.color === 'green'">mdi-account-star</v-icon>
    <v-icon v-if="alert.color === 'red'">mdi-alert</v-icon>
    {{ alert.message }}
    <v-btn dark text @click="closeAlert">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    alert() {
      return this.$store.getters['login/alert']
    },
    alertActive: {
      get() {
        return this.$store.getters['login/alertActive']
      },
      set() {
        this.closeAlert() // used by v-model when timeout, resetting alert props
      }
    }
  },

  methods: {
    closeAlert() {
      this.$store.dispatch('login/closeAlert')
    }
  }
}
</script>
