import Vue from "vue";
import Vuex from "vuex";

import appRoot from "./appRoot";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    appRoot
  },
});

export default store;

