import { MutationTree } from "vuex";
import { RootState } from "./root.models";

enum MutationsTypes {
  SET_LOADING = "setLoading",
  SET_SNACKBAR = "setSnackbar",
}

const mutations: MutationTree<RootState> = {
  [MutationsTypes.SET_LOADING]: (
    state,
    { payload }: { payload: RootState["loading"] },
  ) => {
    state.loading = payload;
  },
  [MutationsTypes.SET_SNACKBAR]: (
    state,
    { payload }: { payload: RootState["snackbar"] },
  ) => {
    state.snackbar = {
      message: payload.message,
      type: payload.type || "success",
      isActive: payload.isActive,
    };
  },
};

/** Helpers types */
export const mutationsTypes = {
  [MutationsTypes.SET_LOADING]: (payload: RootState["loading"]) => ({
    type: MutationsTypes.SET_LOADING,
    payload,
  }),
  [MutationsTypes.SET_SNACKBAR]: (payload: RootState["snackbar"]) => ({
    type: MutationsTypes.SET_SNACKBAR,
    payload,
  }),
};

export default mutations;
