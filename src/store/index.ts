import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState, initialRootState } from "./root.models";
import actions from "./root.actions";
import getters from "./root.getters";
import mutations from "./root.mutations";


Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  strict: true,
  state: initialRootState,
  actions,
  getters,
  mutations,
};

export { storeTypes } from "./root.types";
export default new Vuex.Store<RootState>(store);
