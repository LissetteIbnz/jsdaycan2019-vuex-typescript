import { DefineGetterTree } from "./store.helpers";
import { RootState } from "./root.models";

export interface RootGetters {
  snackbar: RootState["snackbar"];
}

const getters: DefineGetterTree<RootGetters, RootState> = {
  snackbar: state => state.snackbar,
};

export default getters;
