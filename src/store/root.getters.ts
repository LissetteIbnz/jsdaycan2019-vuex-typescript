import { GetterTree } from "vuex";
import { RootState } from "./root.models";

export const rootGettersTypes = {
  snackbar: "snackbar",
}

const getters: GetterTree<RootState, {}> = {
  [rootGettersTypes.snackbar]: (state): RootState["snackbar"] => {
    const { isActive, message, type } = state.snackbar;
    return { isActive, message, type };
  },
};

export default getters;
