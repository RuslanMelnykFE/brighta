import Vue from 'vue';
import Vuex from 'vuex';
// ---------- modules ---------
import users from './modules/users';
import date from './modules/date';
import modal from './modules/modal';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    date,
    modal,
  },
});
