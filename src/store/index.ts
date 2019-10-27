import Vuex, { StoreOptions } from "vuex";
import { RootState, initialRootState } from "./root.models";
import mutations from "./root.mutations";

const store: StoreOptions<RootState> = {
  state: initialRootState,
  mutations,
};

export default new Vuex.Store<RootState>(store);
