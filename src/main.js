import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import fastclick from "fastclick"
import vuelaztload from "vue-lazyload"

import toast from "components/common/toast"

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(toast)

Vue.use(vuelaztload, {
  loading: require("./assets/img/common/placeholder.png")
})

fastclick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
