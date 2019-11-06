import { DefineGetters } from "../../store.helpers";
import { RootState } from "../../root.models";
import { ProductsState, Product } from "./products.models";

export interface ProductsGetters {
  allProducts: Product[];
}

const getters: DefineGetters<ProductsGetters, ProductsState, RootState> = {
  allProducts: state => state.all,
};

export default getters;
