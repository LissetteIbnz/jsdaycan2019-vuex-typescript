import { GetterTree } from "vuex";
import { RootState } from "../../root.models";
import { ProductsState } from "./products.models";

enum GettersTypes {
  ALL_PRODUCTS = "allProducts",
}

const getters: GetterTree<ProductsState, RootState> = {
  [GettersTypes.ALL_PRODUCTS]: state => state.all,
};

export const productsGettersTypes = {
  [GettersTypes.ALL_PRODUCTS]: GettersTypes.ALL_PRODUCTS,
};

export default getters;
