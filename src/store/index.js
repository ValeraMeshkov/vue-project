import Vue from 'vue';
import Vuex from 'Vuex';
import config from '../config/config.js';
Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      cards: {}
    }
  },
  mutations: {
    setCards(state, value) {
      state.cards = value;
    }
  },
  actions: {
    getCards({ commit }, { http }) {
      http.get(config.itemsUrl)
        .then(response => response.json())
        .then(cards => commit('setCards', cards))
        .catch(err => console.log(err));
    }
  }
});
