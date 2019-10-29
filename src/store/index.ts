import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState, initialRootState } from "./root.models";
import mutations, { rootMutationsTypes } from "./root.mutations";
import actions, { rootActionsTypes } from "./root.actions";
import getters, { rootGettersTypes } from "./root.getters";
import {
  cart,
  cartTypes,
} from "./modules/cart";
import {
  products,
  productsTypes,
} from "./modules/products";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  strict: true,
  state: initialRootState,
  mutations,
  actions,
  getters,
  modules: {
    cart,
    products,
  },
};

export const rootTypes = {
  actions: rootActionsTypes,
  getters: rootGettersTypes,
  mutations: rootMutationsTypes,
};

/** Helper types Object */
export const storeTypes = {
  root: rootTypes,
  cart: cartTypes,
  products: productsTypes,
};

export * from "./root.models";
export default new Vuex.Store<RootState>(store);
