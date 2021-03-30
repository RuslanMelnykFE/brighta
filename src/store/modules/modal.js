export default {
  namespaced: true,

  state: {
    modal: {
      isOpen: false,
      name: '',
    },
  },

  getters: {
    MODAL: (state) => state.modal,
  },

  mutations: {
    SET_MODAL: (state, { isOpen, name }) => {
      state.modal = { isOpen, name };
    },
  },

  actions: {
    toggleModal: ({ commit }, { isOpen, name }) => {
      commit('SET_MODAL', { isOpen, name });
    },
  },

};
