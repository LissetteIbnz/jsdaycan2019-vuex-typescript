import { actionsTypes } from "./root.actions";
import { gettersTypes } from "./root.getters";
import { mutationsTypes } from "./root.mutations";

/** Helper types Object */
export const storeTypes = {
  root: {
    actions: actionsTypes,
    getters: gettersTypes,
    mutations: mutationsTypes,
  },
};
