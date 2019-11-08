import * as shop from "../../../api/shop";
import { DefineActionTree, DefineTypes } from "../../store.helpers";
import { RootState } from "../../root.models";
import { rootActionsTypes } from "../../root.actions";
import { Product, mapProductsListVMToAM, productsTypes } from "../products";
import { CartState } from "./cart.models";
import { cartMutationsTypes } from "./cart.mutations";

export interface CartActions {
  checkout: Product[];
  addToCart: Product;
}

const actions: DefineActionTree<CartActions, CartState, RootState> = {
  checkout: ({ commit, state, dispatch }, { payload }) => {
    const savedCartItems = [...state.added];
    commit(cartMutationsTypes.checkoutRequest());

    shop
      .buyProducts(mapProductsListVMToAM(payload))
      .then(() => {
        commit(cartMutationsTypes.checkoutSuccess());
        dispatch(
          rootActionsTypes.showSnackbar({
            message: "Checkout successful",
            type: "success",
          }),
        );
      })
      .catch(() => {
        commit(cartMutationsTypes.checkoutFailure(savedCartItems));
        dispatch(
          rootActionsTypes.showSnackbar({
            message: "Checkout failed",
            type: "error",
          }),
        );
      });
  },

  addToCart: ({ commit }, { payload }) => {
    if (payload.inventory > 0) {
      commit(cartMutationsTypes.addToCart(payload.id));
      commit(productsTypes.mutations!.decrementProductInventory(payload.id));
    }
  },
};

export const cartActionsTypes: DefineTypes<CartActions> = {
  checkout: payload => ({ type: "checkout", payload }),
  addToCart: payload => ({ type: "addToCart", payload }),
};
export default actions;
