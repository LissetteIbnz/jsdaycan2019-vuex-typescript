export interface ProductAM {
  id: number;
  title: string;
  price: number;
  inventory: number;
}

/**
 * Mocking client-server processing
 */
const mockProducts: ProductAM[] = [
  { id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 2 },
  { id: 2, title: "H&M T-Shirt White", price: 10.99, inventory: 10 },
  { id: 3, title: "Charli XCX - Sucker CD", price: 19.99, inventory: 5 },
];

export const buyProducts = (products: ProductAM[]): Promise<void> => {
  const promise = new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve() : reject();
    }, 200);
  });

  return promise;
};

export const getProducts = (): Promise<ProductAM[]> => {
  const promise = new Promise<ProductAM[]>(resolve => {
    setTimeout(() => resolve(mockProducts), 1000);
  });

  return promise;
};
