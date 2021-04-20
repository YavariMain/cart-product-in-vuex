import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: ['shoe', 'dress'],
    counter: 0,
    loggedInUser: {
      name: 'John',
      role: 'Admin',
      age: 25
    },
    evenOdd: {
      even: 'even',
      odd: 'odd'
    },
    names: ["Bob", "Billy", "Mary", "Jane"]
  },
  mutations: {
    increment(state, item) {
      state.counter += item
    },
    decrement(state) {
      state.counter--
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
  },
})
