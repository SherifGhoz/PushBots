<template>
  <v-snackbar v-model="alertActive" :timeout="2000" :color="alert.color">
    <v-icon v-if="alert.type === 'success'">mdi-account-star</v-icon>
    <v-icon v-if="alert.type === 'error'">mdi-alert</v-icon>
    {{ alert.message }}
    <v-btn dark text @click="closeAlert">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-snackbar>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    alert() {
      return this.$store.getters.alert
    },
    alertActive: {
      get() {
        return this.$store.state.alertActive
      },
      set() {
        this.$store.commit('closeAlert', [null, null, null])
      }
    }
  },
  methods: {
    closeAlert() {
      this.$store.commit('closeAlert', [null, null, null])
    }
  }
}
</script>
