import { ProductAM } from "../../../api/shop";
import { Product } from "./products.models";

export const mapProductVMToAM = (product: Product): ProductAM =>
  product && {
    id: product.id,
    inventory: product.inventory,
    price: product.price,
    title: product.title,
  };

export const mapProductsListVMToAM = (products: Product[]): ProductAM[] =>
  products.map(mapProductVMToAM);

export const mapProductAMToVM = (product: ProductAM): Product =>
  product && {
    id: product.id,
    inventory: product.inventory,
    price: product.price,
    title: product.title,
  };

export const mapProductsListAMToVM = (products: ProductAM[]): Product[] =>
  products.map(mapProductAMToVM);
