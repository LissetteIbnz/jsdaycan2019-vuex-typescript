import { Module } from "vuex";
import { RootState } from "../../root.models";
import { ProductsState, initialProductsState } from "./products.models";
import getters from "./products.getters";
import mutations, {
  productsMutationsTypes,
  ProductsMutations,
} from "./products.mutations";
import actions, {
  productsActionsTypes,
  ProductsActions,
} from "./products.actions";
import { HelperTypes } from "../../store.helpers";

export * from "./products.models";
export * from "./products.mappers";
export { productsMutationsTypes, productsActionsTypes };

export const products: Module<ProductsState, RootState> = {
  namespaced: false,
  state: initialProductsState,
  mutations,
  getters,
  actions,
};

/** Helper types Object */
export const productsTypes: HelperTypes<ProductsMutations, ProductsActions> = {
  mutations: productsMutationsTypes,
  actions: productsActionsTypes,
};
