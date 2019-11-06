import { DefineGetters } from "./store.helpers";
import { RootState } from "./root.models";

export interface RootGetters {
  snackbar: RootState["snackbar"];
}

const getters: DefineGetters<RootGetters, RootState> = {
  snackbar: state => state.snackbar,
};

export default getters;
