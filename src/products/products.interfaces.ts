import { ApiProperty } from '@nestjs/swagger';

export interface ProductTypes {
  name: string;
  price: number;
}

export class ProductModelAPI implements ProductTypes {
  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;
}

export interface ProductsImplements {
  products: ProductTypes[];
  getAll: () => ProductTypes[];
  create: (product: ProductTypes) => void;
  delete: () => void;
}
