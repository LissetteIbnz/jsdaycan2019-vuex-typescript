import { ActionTree } from "vuex";
import * as shop from "../../../api/shop";
import { RootState } from "../../root.models";
import { rootActionsTypes } from "../../root.actions";
import { Product, mapProductsListVMToAM, productsTypes } from "../products";
import { CartState } from "./cart.models";
import { cartMutationsTypes } from "./cart.mutations";

enum ActionsTypes {
  CHECKOUT = "checkout",
  ADD_TO_CART = "addToCart",
}

const actions: ActionTree<CartState, RootState> = {
  [ActionsTypes.CHECKOUT]: (
    { commit, state, dispatch },
    { products }: { products: Product[] },
  ) => {
    const savedCartItems = [...state.added];
    commit(cartMutationsTypes.checkoutRequest());

    shop
      .buyProducts(mapProductsListVMToAM(products))
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

  [ActionsTypes.ADD_TO_CART]: (
    { commit },
    { product }: { product: Product },
  ) => {
    if (product.inventory > 0) {
      commit(cartMutationsTypes.addToCart(product.id));
      commit(productsTypes.mutations.decrementProductInventory(product.id));
    }
  },
};

export const cartActionsTypes = {
  [ActionsTypes.CHECKOUT]: (products: Product[]) => ({
    type: ActionsTypes.CHECKOUT,
    products,
  }),

  [ActionsTypes.ADD_TO_CART]: (product: Product) => ({
    type: ActionsTypes.ADD_TO_CART,
    product,
  }),
};

export default actions;
