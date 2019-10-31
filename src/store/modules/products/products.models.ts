/** Products State */
export interface ProductsState {
  all: Product[];
}

/** Type to extend the RootState interface */
export type ExtendedProductsState = { products?: ProductsState };

export interface Product {
  id: number;
  title: string;
  price: number;
  inventory: number;
}

export const initialProductsState: ProductsState = {
  all: [],
};
