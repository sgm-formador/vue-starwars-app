import Vue from 'vue'
import Vuex from 'vuex'

import people from '@/store/modules/people'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  modules: {
    people
  }
})
