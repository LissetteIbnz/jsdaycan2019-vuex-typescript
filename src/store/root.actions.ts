import { RootState, SetSnackbar } from "./root.models";
import { DefineActionTree, DefineTypes } from "./store.helpers";
import { rootMutationsTypes } from "./root.mutations";

export interface RootActions {
  showSnackbar: SetSnackbar;
}

const actions: DefineActionTree<RootActions, RootState> = {
  showSnackbar({ commit }, { payload }) {
    commit(rootMutationsTypes.setSnackbar({ ...payload, isActive: true }));

    setTimeout(() => {
      commit(rootMutationsTypes.setSnackbar({ ...payload, isActive: false }));
    }, 3000);
  },
};

export const rootActionsTypes: DefineTypes<RootActions> = {
  showSnackbar: payload => ({ type: "showSnackbar", payload }),
};

export default actions;
