import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    setups: [
      {
        id: 654345,
        title: "Ste-Élie setup",
        description: "Un setup de ste-élie, la piste était belle et sèche",
        favorite: false,
        fork: {
          forkRebound: 10,
          forkCompression: 18,
        },
        shock: {
          shockRebound: 4,
          shockLowComp: 2.5,
          shockHighComp: 3,
        },
      },
      {
        id: 2342212,
        title: "Ste-Julie setup",
        description: "Un setup de ste-julie, la piste était belle et sèche",
        favorite: true,
        fork: {
          forkRebound: 8,
          forkCompression: 12,
        },
        shock: {
          shockRebound: 8,
          shockLowComp: 2,
          shockHighComp: 1,
        },
      },
    ],
  },

  getters: {
    setups: (state) => {
      return state.setups;
    },

    setup: (state) => (id) => {
      return state.setups.find((setup) => setup.id === id);
    },
  },
});

export default store;
