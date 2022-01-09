import { ProductEntity } from './entities/Product';

export interface IProductsImplements {
  products: ProductEntity[];
  getAll: () => ProductEntity[];
  create: (product: ProductEntity) => ProductEntity;
  delete: (id: string) => boolean;
}

export interface IReturnDataProducts {
  data: ProductEntity[];
}

export interface IReturnProductDeleted {
  deleted: boolean;
}
