import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
//https://www.football-data.org/documentation/api
axios.defaults.baseURL = 'http://api.football-data.org/v2/'
axios.defaults.headers.common = {
  'X-Auth-Token': '593fb478d991492ebed3318c7c5e1486'
};
//6bd688cffee243f2a973d25dcc6d6d1b anterior


//https://www.football-data.org/docs/v1/index.html
Vue.use(VueAxios, axios)
//Vue.http.headers.common['X-Auth-Token'] = '6bd688cffee243f2a973d25dcc6d6d1b';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
