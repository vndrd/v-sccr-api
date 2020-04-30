import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.headers.common = {
  'X-Auth-Token': '6bd688cffee243f2a973d25dcc6d6d1b'
};
Vue.use(VueAxios, axios)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
