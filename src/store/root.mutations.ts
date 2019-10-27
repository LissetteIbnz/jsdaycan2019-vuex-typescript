import { MutationTree } from "vuex";
import { RootState } from "./root.models";

const mutations: MutationTree<RootState> = {
  setLoading: (state, { payload }: { payload: RootState["loading"] }) => {
    state.loading = payload;
  },
  showSnackbar: (state, { payload }: { payload: RootState["snackbar"] }) => {
    state.snackbar.type = payload.type ? payload.type : "success";
    state.snackbar.message = payload.message;
  },
};

export default mutations;
