import Vue from 'vue'
import Vuex from 'vuex'
import index from './page.js'
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
  	index
  },
})