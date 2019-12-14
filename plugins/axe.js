import Vue from 'vue'
import axe from 'axe-core'
import VueAxe from 'vue-axe'

const activeAxe = () => {
  Vue.use(VueAxe, {
    config: {
      rules: axe.getRules(['wcag21aa'])
    },
    clearConsoleOnUpdate: false
  })
}

if (process.env.NODE_ENV !== 'production') {
  window.activeAxe = activeAxe
}
