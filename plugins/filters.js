import Vue from 'vue'

Vue.filter('capitalize', function(value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('formatNumber', (number) => {
  return number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : []
})
