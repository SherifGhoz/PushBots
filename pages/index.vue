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
  head() {
    return {
      title: 'PushBots | Dashboard',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Dashboard of Apps'
        }
      ]
    }
  },
  components: { Navbar, AppsNav, Apps }
}
</script>
