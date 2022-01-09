import { ProductEntity } from './products.entity';

export interface IProductsImplements {
  products: ProductEntity[];
  getAll: () => ProductEntity[];
  create: (product: ProductEntity) => void;
  delete: () => void;
}

export interface IReturnDataProducts {
  data: ProductEntity[];
}
