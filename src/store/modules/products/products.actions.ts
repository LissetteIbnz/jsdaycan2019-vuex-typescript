import { ActionTree } from "vuex";
import * as shop from "../../../api/shop";
import { RootState } from "../../root.models";
import { rootMutationsTypes } from "../../root.mutations";
import { ProductsState } from "./products.models";
import { productsMutationsTypes } from "./products.mutations";
import { mapProductsListAMToVM } from "./products.mappers";

enum ActionsTypes {
  GET_ALL_PRODUCTS = "getAllProducts",
}

const actions: ActionTree<ProductsState, RootState> = {
  [ActionsTypes.GET_ALL_PRODUCTS]: ({ commit }) => {
    commit(rootMutationsTypes.setLoading(true));

    shop
      .getProducts()
      .then(products => {
        commit(productsMutationsTypes.setProducts(mapProductsListAMToVM(products)));
      })
      .finally(() => {
        commit(rootMutationsTypes.setLoading(false));
      });
  },
};

export const productsActionsTypes = {
  [ActionsTypes.GET_ALL_PRODUCTS]: () => ({
    type: ActionsTypes.GET_ALL_PRODUCTS,
  }),
};

export default actions;
