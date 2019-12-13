import Vue from 'vue'

const listeners = []

Vue.prototype.onBottom = (callback) => {
  listeners.push(callback)
}

// if not server
if (typeof window !== 'undefined') {
  window.onscroll = () => {
    if (
      // if bottom
      document.body.scrollHeight - (window.scrollY + window.innerHeight) <=
      20
    ) {
      // excute my listeners
      listeners.map((listener) => listener())
    }
  }
}
