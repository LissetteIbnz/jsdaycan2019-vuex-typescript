import { GetterTree } from "vuex";
import { RootState } from "../../root.models";
import { CartState, CartProductsGetter, CheckoutStatus } from "./cart.models";

enum GettersTypes {
  CHECKOUT_STATUS = "checkoutStatus",
  CART_PRODUCTS = "cartProducts",
  CART_TOTAL_PRICE = "cartTotalPrice",
}

// TODO: Los parámetros se reciben tal que así: Getter<S, R> = (state: S, getters: any, rootState: R, rootGetters: any) => any;
const getters: GetterTree<CartState, RootState> = {
  [GettersTypes.CHECKOUT_STATUS]: (state): CheckoutStatus =>
    state.checkoutStatus,

  // Podemos acceder al estado raíz donde estarán el resto de módulos
  [GettersTypes.CART_PRODUCTS]: (
    state,
    getters,
    rootState,
    rootGetters,
  ): CartProductsGetter[] =>
    state.added.map(({ id, quantity }) => {
      const product = rootState.products!.all.find(p => p.id === id)!;
      return {
        title: product.title,
        price: product.price,
        quantity,
      };
    }),

  [GettersTypes.CART_TOTAL_PRICE]: (
    state,
    getters: { [GettersTypes.CART_PRODUCTS]: CartProductsGetter[] },
  ): number =>
    getters.cartProducts.reduce(
      (total, product) => total + product.price! * product.quantity,
      0,
    ),
};

/** Helpers types */
export const cartGettersTypes = {
  [GettersTypes.CHECKOUT_STATUS]: GettersTypes.CHECKOUT_STATUS,
  [GettersTypes.CART_PRODUCTS]: GettersTypes.CART_PRODUCTS,
  [GettersTypes.CART_TOTAL_PRICE]: GettersTypes.CART_TOTAL_PRICE,
};

export default getters;
