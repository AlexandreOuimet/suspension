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
          rebound: 10,
          compression: 18,
          airPressure: 90,
        },
        shock: {
          rebound: 4,
          lowComp: 2.5,
          highComp: 3,
        },
      },
      {
        id: 2342212,
        title: "Ste-Julie setup",
        description: "Un setup de ste-julie, la piste était belle et sèche",
        favorite: true,
        fork: {
          rebound: 8,
          compression: 12,
          airPressure: 87,
        },
        shock: {
          rebound: 8,
          lowComp: 2,
          highComp: 1,
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

  mutations: {
    UPDATE_SETUP(state, setup) {
      console.log("updateSetup", setup);
    },

    CREATE_SETUP(state, setup) {
      console.log("createSetup", setup);
      setup.id = Date.now();
      state.setups.push(setup);
    },
  },

  actions: {
    saveSetup(context, setup) {
      if (setup.id != null) context.commit("UPDATE_SETUP", setup);
      else context.commit("CREATE_SETUP", setup);
    },
  },
});

export default store;
