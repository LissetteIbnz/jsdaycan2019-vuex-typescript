import { MutationTree } from "vuex";
import { RootState } from "./root.models";

const MutationsTypes = {
  SET_LOADING: "setLoading",
  SET_SNACKBAR: "setSnackbar",
} as const;

const mutations: MutationTree<RootState> = {
  [MutationsTypes.SET_LOADING]: (
    state,
    { loading }: { loading: RootState["loading"] },
  ) => {
    state.loading = loading;
  },

  [MutationsTypes.SET_SNACKBAR]: (
    state,
    { snackbar }: { snackbar: RootState["snackbar"] },
  ) => {
    state.snackbar = {
      message: snackbar.message,
      type: snackbar.type || "success",
      isActive: snackbar.isActive,
    };
  },
};

/** Helpers types */
export const rootMutationsTypes = {
  [MutationsTypes.SET_LOADING]: (loading: RootState["loading"]) => ({
    type: MutationsTypes.SET_LOADING,
    loading,
  }),
  [MutationsTypes.SET_SNACKBAR]: (snackbar: RootState["snackbar"]) => ({
    type: MutationsTypes.SET_SNACKBAR,
    snackbar,
  }),
};

export default mutations;
