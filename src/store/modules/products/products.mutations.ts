import { MutationTree } from "vuex";
import { ProductsState, Product } from "./products.models";

enum MutationsTypes {
  SET_PRODUCTS = "setProducts",
  DECREMENT_PRODUCT_INVENTORY = "decrementProductInventory",
}

const mutations: MutationTree<ProductsState> = {
  [MutationsTypes.SET_PRODUCTS]: (
    state,
    { products }: { products: Product[] },
    ): void => {
    state.all = products;
  },

  [MutationsTypes.DECREMENT_PRODUCT_INVENTORY]: (
    state,
    { id }: { id: Product["id"] },
  ): void => {
    state.all.find(p => p.id === id)!.inventory--;
  },
};

export const productsMutationsTypes = {
  [MutationsTypes.SET_PRODUCTS]: (products: Product[]) => ({
    type: MutationsTypes.SET_PRODUCTS,
    products,
  }),
  [MutationsTypes.DECREMENT_PRODUCT_INVENTORY]: (id: Product["id"]) => ({
    type: MutationsTypes.DECREMENT_PRODUCT_INVENTORY,
    id,
  }),
};

export default mutations;
