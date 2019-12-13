<template>
  <v-container fluid>
    <client-only>
      <v-sparkline
        :fill="true"
        :smooth="30"
        :value="values"
        color="#66C0B8"
        auto-draw
      ></v-sparkline>
    </client-only>
    <div class="text-center caption">
      <span class="indicator"></span>
      <span>Daily Active Users</span>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    values() {
      return this.data.map((data) => data.value)
    }
  }
}
</script>

<style scoped>
.indicator {
  background: #66c0b8;
  display: inline-block;
  vertical-align: middle;
  width: 12px;
  height: 12px;
}
</style>
