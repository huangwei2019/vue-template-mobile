import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import state from './state'
import * as getters from './getters'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
})
