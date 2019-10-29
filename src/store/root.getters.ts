import { GetterTree } from "vuex";
import { RootState } from "./root.models";

enum GettersTypes {
  SNACKBAR = "snackbar",
}

const getters: GetterTree<RootState, {}> = {
  [GettersTypes.SNACKBAR]: (state): RootState["snackbar"] => {
    const { isActive, message, type } = state.snackbar;
    return { isActive, message, type };
  },
};

/** Helpers types */
export const rootGettersTypes = {
  [GettersTypes.SNACKBAR]: GettersTypes.SNACKBAR,
};

export default getters;
