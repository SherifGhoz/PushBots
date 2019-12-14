<template>
  <v-card class="ma-auto ma-lg-0 pt-2">
    <div class="d-flex pt-3 pl-5">
      <v-avatar tile class="mr-3">
        <img :src="`${app.icon}?${app.id}`" alt="app icon" />
      </v-avatar>
      <div class="card-head">
        <span class="title">
          {{ app.title | capitalize }}
        </span>
        <span class="subtitle d-flex align-center">
          <v-icon small>mdi-cellphone-iphone</v-icon>
          <span>{{ app.totalUsers | formatNumber }}</span>
          <AppPlatforms :platforms="app.platforms" class="ml-2" />
        </span>
      </div>

      <div class="col-3 pa-0 mr-3 ml-auto">
        <div class="text-right">
          <v-btn icon aria-label="Share">
            <v-icon>mdi-share</v-icon>
          </v-btn>
          <v-btn icon aria-label="Options">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <AppChart :data="app.chartData"></AppChart>

    <v-card-actions>
      <v-btn icon aria-label="Send">
        <v-icon>mdi-telegram</v-icon>
      </v-btn>
      <v-btn icon aria-label="History">
        <v-icon>mdi-history</v-icon>
      </v-btn>
      <v-btn icon aria-label="phone">
        <v-icon>mdi-cellphone-iphone</v-icon>
      </v-btn>
      <v-btn icon aria-label="Users">
        <v-icon>mdi-account-group</v-icon>
      </v-btn>
      <v-btn icon aria-label="Settings">
        <v-icon>mdi-settings</v-icon>
      </v-btn>
      <v-btn icon aria-label="Statistics">
        <v-icon>mdi-chart-histogram</v-icon>
      </v-btn>
      <v-btn icon aria-label="Tweet">
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import AppChart from './AppChart.vue'
import AppPlatforms from './AppPlatforms.vue'
export default {
  components: {
    AppChart,
    AppPlatforms
  },
  props: {
    app: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
