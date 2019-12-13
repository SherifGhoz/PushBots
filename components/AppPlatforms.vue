<template>
  <div>
    <v-icon v-if="platforms.ios" small>mdi-apple</v-icon>
    <v-icon v-if="platforms.android" small>mdi-android</v-icon>
    <v-icon v-if="platforms.chrome" small>mdi-google-chrome</v-icon>
    <v-icon v-if="platforms.firefox" small>mdi-firefox</v-icon>
    <v-icon v-if="platforms.opera" small>mdi-opera</v-icon>
    <v-icon v-if="platforms.safari" small>mdi-apple-safari</v-icon>
  </div>
</template>

<script>
export default {
  props: {
    platforms: {
      type: Object,
      default: () => ({
        ios: false,
        android: false,
        chrome: false,
        firefox: false,
        opera: false,
        safari: false
      })
    }
  }
}
</script>

<style></style>
