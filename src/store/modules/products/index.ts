import { Module } from "vuex";
import { RootState } from "../../root.models";
import { ProductsState, initialProductsState } from "./products.models";
import getters, { productsGettersTypes } from "./products.getters";
import mutations, { productsMutationsTypes } from "./products.mutations";
import actions, { productsActionsTypes } from "./products.actions";

export * from "./products.models";
export * from "./products.mappers";
export { productsGettersTypes, productsMutationsTypes, productsActionsTypes };

export const products: Module<ProductsState, RootState> = {
  namespaced: false,
  state: initialProductsState,
  mutations,
  getters,
  actions,
};

/** Helper types Object */
export const productsTypes = {
  mutations: productsMutationsTypes,
  getters: productsGettersTypes,
  actions: productsActionsTypes,
};
