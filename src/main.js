import Vue from 'vue';
import VueResource from 'vue-resource';

import App from './components/App.vue';
import store from './store/index.js';

Vue.use(VueResource);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
