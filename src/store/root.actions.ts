import { ActionTree } from "vuex";
import { RootState, SetSnackbar } from "./root.models";
import { rootMutationsTypes } from "./root.mutations";

enum ActionsTypes {
  SHOW_SNACKBAR = "showSnackbar",
}

const actions: ActionTree<RootState, RootState> = {
  [ActionsTypes.SHOW_SNACKBAR]: (
    { commit },
    { snackbar }: { snackbar: SetSnackbar },
  ) => {
    commit(rootMutationsTypes.setSnackbar({ ...snackbar, isActive: true }));

    setTimeout(() => {
      commit(rootMutationsTypes.setSnackbar({ ...snackbar, isActive: false }));
    }, 3000);
  },
};

/** Helpers types */
export const rootActionsTypes = {
  [ActionsTypes.SHOW_SNACKBAR]: (snackbar: SetSnackbar) => ({
    type: ActionsTypes.SHOW_SNACKBAR,
    snackbar,
  }),
};

export default actions;
