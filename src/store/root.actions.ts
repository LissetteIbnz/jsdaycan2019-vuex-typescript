import { ActionTree } from "vuex";
import { RootState, SetSnackbar } from "./root.models";
import { mutationsTypes } from "./root.mutations";

enum ActionsTypes {
  SHOW_SNACKBAR = "showSnackbar",
}

const actions: ActionTree<RootState, RootState> = {
  [ActionsTypes.SHOW_SNACKBAR]: (
    { commit },
    { payload }: { payload: SetSnackbar },
  ) => {
    const snackbar: RootState["snackbar"] = { ...payload, isActive: true };
    commit(mutationsTypes.setSnackbar(snackbar));

    setTimeout(() => {
      snackbar.isActive = false;
      commit(mutationsTypes.setSnackbar(snackbar));
    }, 3000);
  },
};

/** Helpers types */
export const actionsTypes = {
  [ActionsTypes.SHOW_SNACKBAR]: (payload: SetSnackbar) => ({
    type: ActionsTypes.SHOW_SNACKBAR,
    payload,
  }),
};

export default actions;
