<template>
  <div>
    <Navbar />
    <v-container>
      <AppsNav />
      <Apps />
    </v-container>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import AppsNav from '../components/AppsNav.vue'
import Apps from '../components/Apps.vue'
export default {
  middleware: 'auth',
  components: { Navbar, AppsNav, Apps }
}
</script>
