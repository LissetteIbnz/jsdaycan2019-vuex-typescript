import Vue from "vue";
import Vuex from "vuex";
import { StoreTS, HelperTypes } from "./store.helpers";
import { RootState, initialRootState } from "./root.models";
import mutations, { rootMutationsTypes, RootMutations } from "./root.mutations";
import actions, { rootActionsTypes, RootActions } from "./root.actions";
import getters, { RootGetters } from "./root.getters";
import { cart, cartTypes, CartGetters } from "./modules/cart";
import { products, productsTypes } from "./modules/products";

Vue.use(Vuex);

export const store = new Vuex.Store<RootState>({
  strict: true,
  state: initialRootState,
  mutations,
  actions,
  getters,
  modules: {
    cart,
    products,
  },
});

export const rootTypes: HelperTypes<RootMutations, RootActions> = {
  actions: rootActionsTypes,
  mutations: rootMutationsTypes,
};

/** Helper types Object */
export const storeTypes = {
  root: rootTypes,
  cart: cartTypes,
  products: productsTypes,
};

export * from "./root.models";
export default store as StoreTS<RootState, RootGetters & CartGetters>;
