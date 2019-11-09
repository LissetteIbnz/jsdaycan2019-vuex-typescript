import * as shop from "../../../api/shop";
import { DefineActionTree, DefineTypes } from "../../store.helpers";
import { rootMutationsTypes } from "../../root.mutations";
import { ProductsState } from "./products.models";
import { productsMutationsTypes } from "./products.mutations";
import { mapProductsListAMToVM } from "./products.mappers";

export interface ProductsActions {
  getAllProducts: undefined;
}

const actions: DefineActionTree<ProductsActions, ProductsState> = {
  getAllProducts: ({ commit }) => {
    commit(rootMutationsTypes.setLoading(true));

    shop
      .getProducts()
      .then(products => {
        commit(
          productsMutationsTypes.setProducts(mapProductsListAMToVM(products)),
        );
      })
      .finally(() => {
        commit(rootMutationsTypes.setLoading(false));
      });
  },
};

export const productsActionsTypes: DefineTypes<ProductsActions> = {
  getAllProducts: () => ({ type: "getAllProducts" }),
};

export default actions;
