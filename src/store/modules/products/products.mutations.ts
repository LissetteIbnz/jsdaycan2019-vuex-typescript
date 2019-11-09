import { DefineMutationTree, DefineTypes } from "../../store.helpers";
import { RootState } from "../../root.models";
import { ProductsState, Product } from "./products.models";

export interface ProductsMutations {
  setProducts: Product[];
  decrementProductInventory: Product["id"];
}

// Si quieres tener disponible el contexto del Store
// debes pasar la interface del state raíz (a no
// ser que la local sea la del raíz) y NO debes usar
// una arrow function
const mutations: DefineMutationTree<
  ProductsMutations,
  ProductsState,
  RootState
> = {
  setProducts(state, { payload }) {
    console.log("Acceso al contexto del Store:", this);
    state.all = payload;
  },

  decrementProductInventory: (state, { payload }) => {
    state.all.find(p => p.id === payload)!.inventory--;
  },
};

export const productsMutationsTypes: DefineTypes<ProductsMutations> = {
  setProducts: payload => ({ type: "setProducts", payload }),
  decrementProductInventory: payload => ({
    type: "decrementProductInventory",
    payload,
  }),
};

export default mutations;
