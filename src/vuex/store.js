import Vue from 'vue'
import Vuex from '../../../src'
import mutations from './mutations'
import createLogger from '../../../src/middlewares/logger'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentThreadID: null,
    threads:null
  },
  mutations,
  middlewares: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
})
