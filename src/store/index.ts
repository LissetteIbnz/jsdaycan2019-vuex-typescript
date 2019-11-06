import Vue from "vue";
import Vuex from "vuex";
import { StoreTS } from "./store.helpers";
import { RootState, initialRootState } from "./root.models";
import mutations, { rootMutationsTypes } from "./root.mutations";
import actions, { rootActionsTypes } from "./root.actions";
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

export const rootTypes = {
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
