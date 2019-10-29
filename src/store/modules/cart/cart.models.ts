/** Cart State */
export interface CartState {
  added: AddedItem[];
  checkoutStatus: CheckoutStatus;
}

/** Type to extend the RootState interface */
export type ExtendedCartState = { cart?: CartState };

export interface AddedItem {
  id: number;
  quantity: number;
}

export interface CartItem extends AddedItem {
  title: string;
  price: number;
}

export type CartProductsGetter = Omit<CartItem, "id">;

export type CheckoutStatus = "successful" | "failed" | null;

export const initialCartState: CartState = {
  added: [],
  checkoutStatus: null,
};
