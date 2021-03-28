import Vue from 'vue';
import Vuex from 'vuex';
// ---------- modules ---------
import users from './modules/users';
import date from './modules/date';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    date,
  },
});
