import { GetterTree } from "vuex";
import { RootState } from "../../root.models";
import { ProductsState } from "./products.models";

export const productsGettersTypes = {
  allProducts: "allProducts"
};

const getters: GetterTree<ProductsState, RootState> = {
  [productsGettersTypes.allProducts]: state => state.all,
};

export default getters;
