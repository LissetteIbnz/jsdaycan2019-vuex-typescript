import { RootState, SetSnackbar } from "./root.models";
import { DefineActions, DefineTypes } from "./store.helpers";
import { rootMutationsTypes } from "./root.mutations";

interface RootActions {
  showSnackbar: SetSnackbar;
}

const actions: DefineActions<RootActions, RootState> = {
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
