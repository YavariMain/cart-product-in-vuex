import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    count: 5,
    loggedInUser: {
      name: 'John',
      role: 'Admin',
      age: 25
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
