import axios from 'axios';

const baseUrl = ' http://localhost:3000';

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
        .get(`${baseUrl}/users`)
        .catch((error) => console.log(error));
      commit('SET_USERS', data);
    },
  },
};
