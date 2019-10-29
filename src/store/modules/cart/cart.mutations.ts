import { MutationTree } from "vuex";
import { CartState, AddedItem } from "./cart.models";

enum MutationsTypes {
  ADD_TO_CART = "addToCart",
  CHECKOUT_REQUEST = "checkoutRequest",
  CHECKOUT_SUCCESS = "checkoutSuccess",
  CHECKOUT_FAILURE = "checkoutFailure",
}

const mutations: MutationTree<CartState> = {
  [MutationsTypes.ADD_TO_CART]: (state, { id }: { id: AddedItem["id"] }) => {
    state.checkoutStatus = null;

    const record = state.added.find(p => p.id === id);
    if (!record) {
      state.added.push({
        id: id,
        quantity: 1,
      });
    } else {
      record.quantity++;
    }
  },

  [MutationsTypes.CHECKOUT_REQUEST]: state => {
    state.added = [];
    state.checkoutStatus = null;
  },

  [MutationsTypes.CHECKOUT_SUCCESS]: state =>
    (state.checkoutStatus = "successful"),

  [MutationsTypes.CHECKOUT_FAILURE]: (
    state,
    { savedCartItems }: { savedCartItems: AddedItem[] },
  ) => {
    state.added = savedCartItems;
    state.checkoutStatus = "failed";
  },
};

export const cartMutationsTypes = {
  [MutationsTypes.ADD_TO_CART]: (id: AddedItem["id"]) => ({
    type: MutationsTypes.ADD_TO_CART,
    id,
  }),

  [MutationsTypes.CHECKOUT_REQUEST]: () => ({
    type: MutationsTypes.CHECKOUT_REQUEST,
  }),

  [MutationsTypes.CHECKOUT_SUCCESS]: () => ({
    type: MutationsTypes.CHECKOUT_SUCCESS,
  }),

  [MutationsTypes.CHECKOUT_FAILURE]: (savedCartItems: AddedItem[]) => ({
    type: MutationsTypes.CHECKOUT_FAILURE,
    savedCartItems,
  }),
};

export default mutations;
