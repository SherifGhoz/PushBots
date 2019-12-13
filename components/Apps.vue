<template>
  <div>
    <v-row>
      <v-col
        v-for="(app, index) in apps"
        :key="index"
        class="col-12 col-md-6 col-lg-4"
      >
        <AppCard :app="app" />
      </v-col>
    </v-row>
    <LoadingCard v-if="loading && !error"></LoadingCard>
    <v-alert v-if="error" type="error">
      {{ error }}
    </v-alert>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LoadingCard from './LoadingCard.vue'
import AppCard from './AppCard.vue'
export default {
  components: { LoadingCard, AppCard },
  computed: mapState(['loading', 'apps', 'total', 'error']),
  mounted() {
    this.$store.dispatch('loadApps')
    this.onBottom(() => this.$store.dispatch('loadApps'))
  }
}
</script>

<style></style>
