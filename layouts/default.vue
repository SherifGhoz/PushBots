<template>
  <v-app>
    <nuxt />
    <Alert />
  </v-app>
</template>

<script>
import Alert from '../components/Alert.vue'

export default {
  components: { Alert },
  data() {
    return {}
  }
}
</script>
