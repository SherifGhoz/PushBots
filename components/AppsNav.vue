<template>
  <v-row justify="space-between" align="center" padding="0">
    <v-col class="pl-0" cols="auto">
      <v-btn-toggle
        v-model="activeButton"
        group
        color="primary"
        class="flex-wrap"
      >
        <v-btn :value="1" height="50" width="120">
          <v-icon class="ma-1">mdi-check</v-icon>COMPLETE
        </v-btn>
        <v-btn :value="2" height="50" width="120">
          <v-icon class="ma-1">mdi-settings</v-icon>IN SETUP
        </v-btn>
        <v-btn :value="3" height="50" width="120">
          <v-icon class="ma-1">mdi-share</v-icon>SHARED
        </v-btn>
        <v-btn :value="4" height="50" width="120">
          <v-icon class="ma-1">mdi-chart-bar</v-icon>ACTIVE
        </v-btn>
      </v-btn-toggle>
    </v-col>
    <v-col cols="auto">
      <v-btn width="250" dark color="primary"
        ><v-icon>mdi-plus</v-icon>New Integration
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      activeButton: 4
    }
  }
}
</script>

<style scoped>
.v-btn:not(.v-btn--text):not(.v-btn--outlined):before {
  opacity: 0 !important;
}
</style>
