import axios from 'axios';

const apiUrl = process.env.VUE_APP_BASE_URL;

export default {
  namespaced: true,

  state: {
    users: [],
  },

  getters: {
    USERS: (state) => state.users,
  },

  mutations: {
    SET_USERS: (state, value) => {
      state.users = value;
    },
  },

  actions: {
    getUsers: async ({ commit }) => {
      const { data } = await axios
        .get(`${apiUrl}/users`)
        .catch((error) => console.log(error));
      commit('SET_USERS', data);
    },
  },
};
