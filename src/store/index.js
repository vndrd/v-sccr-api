import Vue from 'vue'
import Vuex from 'vuex'
import data from './modules/data'
import club from './modules/club'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    data,
    club
  }
})
