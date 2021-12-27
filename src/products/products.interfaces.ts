export interface ProductTypes {
  name: string;
  price: number;
}
export interface ProductsImplements {
  products: ProductTypes[];
  getAll: () => ProductTypes[];
  create: (product: ProductTypes) => void;
  delete: () => void;
}
