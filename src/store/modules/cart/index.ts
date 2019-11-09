import { Module } from "vuex";
import { HelperTypes } from "../../store.helpers";
import { RootState } from "../../root.models";
import { CartState, initialCartState } from "./cart.models";
import actions, { cartActionsTypes, CartActions } from "./cart.actions";
import getters from "./cart.getters";
import mutations, { cartMutationsTypes, CartMutations } from "./cart.mutations";

export * from "./cart.models";
export * from "./cart.actions";
export * from "./cart.getters";

export const cart: Module<CartState, RootState> = {
  namespaced: false,
  state: initialCartState,
  mutations,
  getters,
  actions,
};

/** Helper types Object */
export const cartTypes: HelperTypes<CartMutations, CartActions> = {
  mutations: cartMutationsTypes,
  actions: cartActionsTypes,
};
