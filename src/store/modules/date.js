import axios from 'axios';

const apiUrl = process.env.VUE_APP_BASE_URL;

export default {
  namespaced: true,

  state: {
    period: {},
  },

  getters: {
    PERIOD: (state) => state.period,
  },

  mutations: {
    SET_PERIOD: (state, value) => {
      state.period = value;
    },
  },

  actions: {
    cahngePeriod: async ({ commit }, period) => {
      const { data } = await axios
        .post(`${apiUrl}/period`, period)
        .catch((error) => console.log(error));

      commit('SET_PERIOD', data);
    },
    deletePeriod: async ({ commit }) => {
      const { data } = await axios
        .delete(`${apiUrl}/period`)
        .catch((error) => console.log(error));

      commit('SET_PERIOD', data);
    },
  },

};
