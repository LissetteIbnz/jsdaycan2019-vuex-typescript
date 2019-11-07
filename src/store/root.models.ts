import { ExtendedCartState } from "./modules/cart";
import { ExtendedProductsState } from "./modules/products";

/** Root State */
export interface RootState extends ExtendedCartState, ExtendedProductsState {
  loading: boolean;
  snackbar: Snackbar;
}

interface Snackbar {
  message: string;
  isActive: boolean;
  type?: "success" | "info" | "error";
}

export type SetSnackbar = Pick<Snackbar, "message" | "type">;

export const initialRootState: RootState = {
  loading: false,
  snackbar: {
    message: "",
    isActive: false,
    type: undefined,
  },
};
