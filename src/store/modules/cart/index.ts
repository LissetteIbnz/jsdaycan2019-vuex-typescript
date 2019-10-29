import { Module } from "vuex";
import { RootState } from "../../root.models";
import { CartState, initialCartState } from "./cart.models";
import actions, { cartActionsTypes } from "./cart.actions";
import getters, { cartGettersTypes } from "./cart.getters";
import mutations, { cartMutationsTypes } from "./cart.mutations";

export * from "./cart.models";
export { cartActionsTypes, cartGettersTypes, cartMutationsTypes };

export const cart: Module<CartState, RootState> = {
  namespaced: false,
  state: initialCartState,
  mutations,
  getters,
  actions,
};

/** Helper types Object */
export const cartTypes = {
  mutations: cartMutationsTypes,
  getters: cartGettersTypes,
  actions: cartActionsTypes,
};
