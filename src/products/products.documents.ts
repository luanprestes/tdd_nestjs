import { ApiProperty } from '@nestjs/swagger';
import { ProductEntity } from './entities/Product';
import { IReturnDataProducts } from './products.interfaces';

export class ProductModelAPI implements ProductEntity {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;
}

export class ReturnDataProductsAPI implements IReturnDataProducts {
  @ApiProperty({ type: [ProductModelAPI] })
  data: ProductEntity[];
}

export class ReturnDeletedProductAPI {
  @ApiProperty()
  deleted: boolean;
}
