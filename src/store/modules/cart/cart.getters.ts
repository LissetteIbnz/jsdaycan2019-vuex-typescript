import { GetterTree } from "vuex";
import { RootState } from "../../root.models";
import { CartState, CartProductsGetter, CheckoutStatus } from "./cart.models";

/** Helpers types */
export const cartGettersTypes = {
  checkoutStatus: "checkoutStatus",
  cartProducts: "cartProducts",
  cartTotalPrice: "cartTotalPrice",
};

// TODO: Los parámetros se reciben tal que así: Getter<S, R> = (state: S, getters: any, rootState: R, rootGetters: any) => any;
const getters: GetterTree<CartState, RootState> = {
  [cartGettersTypes.checkoutStatus]: (state): CheckoutStatus =>
    state.checkoutStatus,

  // Podemos acceder al estado raíz donde estarán el resto de módulos
  [cartGettersTypes.cartProducts]: (
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

  [cartGettersTypes.cartTotalPrice]: (
    state,
    getters: { cartProducts: CartProductsGetter[] },
  ): number =>
    getters.cartProducts.reduce(
      (total, product) => total + product.price! * product.quantity,
      0,
    ),
};

export default getters;
