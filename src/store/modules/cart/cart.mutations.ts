import { DefineMutationTree, DefineTypes } from "../../store.helpers";
import { RootState } from "../../root.models";
import { CartState, AddedItem } from "./cart.models";

export interface CartMutations {
  addToCart: AddedItem["id"];
  checkoutRequest: undefined;
  checkoutSuccess: undefined;
  checkoutFailure: AddedItem[];
}

const mutations: DefineMutationTree<CartMutations, CartState, RootState> = {
  addToCart(state, { payload }) {
    state.checkoutStatus = null;

    const record = state.added.find(p => p.id === payload);
    if (!record) {
      state.added.push({
        id: payload,
        quantity: 1,
      });
    } else {
      record.quantity++;
    }
  },

  checkoutRequest: state => {
    state.added = [];
    state.checkoutStatus = null;
  },

  checkoutSuccess: state => (state.checkoutStatus = "successful"),

  checkoutFailure: (state, { payload }) => {
    state.added = payload;
    state.checkoutStatus = "failed";
  },
};

export const cartMutationsTypes: DefineTypes<CartMutations> = {
  addToCart: payload => ({ type: "addToCart", payload }),
  checkoutRequest: () => ({ type: "checkoutRequest" }),
  checkoutSuccess: () => ({ type: "checkoutSuccess" }),
  checkoutFailure: payload => ({ type: "checkoutFailure", payload }),
};

export default mutations;
