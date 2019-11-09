import { RootState } from "./root.models";
import { DefineMutationTree, DefineTypes } from "./store.helpers";

export interface RootMutations {
  setLoading: RootState["loading"];
  setSnackbar: RootState["snackbar"];
}

const mutations: DefineMutationTree<RootMutations, RootState> = {
  setLoading(state, { payload }) {
    state.loading = payload;
  },
  setSnackbar(state, { payload }) {
    state.snackbar = {
      message: payload.message,
      type: payload.type || "success",
      isActive: payload.isActive,
    };
  },
};

export const rootMutationsTypes: DefineTypes<RootMutations> = {
  setLoading: payload => ({ type: "setLoading", payload }),
  setSnackbar: payload => ({ type: "setSnackbar", payload }),
};

export default mutations;
