import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    setup: {},
    setups: [],
  },

  getters: {
    setup: (state) => {
      return state.setup;
    },

    setups: (state) => {
      return state.setups;
    },
  },

  mutations: {
    CREATE_SETUP(state, setup) {
      state.setups.push(setup);
    },

    UPDATE_SETUP(state, setup) {
      const index = state.setups.findIndex((x) => x.id == setup.id);
      state.setups[index] = setup;
    },

    DELETE_SETUP(state, setup) {
      const index = state.setups.findIndex((x) => x.id == setup.id);
      state.setups.splice(index, 1);
    },

    SET_CURRENT_SETUP(state, setup) {
      state.setup = setup;
    },

    TRIGGER_FAVORITE(state, setup) {
      const index = state.setups.findIndex((x) => x.id == setup.id);
      state.setups[index].favorite
        ? (state.setups[index].favorite = false)
        : (state.setups[index].favorite = true);
    },

    RESET_SETUP(state) {
      state.setup = {
        id: "",
        title: "",
        description: "",
        favorite: false,
        fork: {
          rebound: 0,
          compression: 0,
          airPressure: 0,
        },
        shock: {
          rebound: 0,
          lowComp: 0,
          highComp: 0,
        },
      };
    },
  },

  actions: {
    setCurrentSetup(context, setupId) {
      if (setupId == -1) {
        context.commit("RESET_SETUP");
      } else {
        context.commit(
          "SET_CURRENT_SETUP",
          context.state.setups.find((x) => x.id === setupId)
        );
      }
    },

    saveSetup(context, setup) {
      if (setup.id == "") {
        setup.id = Date.now();
        context.commit("CREATE_SETUP", setup);
        console.log(JSON.stringify(setup));
      } else {
        context.commit("UPDATE_SETUP", setup);
      }
    },

    deleteSetup(context, setup) {
      context.commit("DELETE_SETUP", setup);
    },

    triggerFavorite(context, setup) {
      context.commit("TRIGGER_FAVORITE", setup);
    },
  },
});

export default store;
