import Vuex, { StoreOptions } from "vuex";
import { RootState, initialRootState } from "./root.models";

const store: StoreOptions<RootState> = {
  state: initialRootState,
};

export default new Vuex.Store<RootState>(store);
