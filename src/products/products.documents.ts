import { ApiProperty } from '@nestjs/swagger';
import { ProductEntity } from './products.entity';
import { IReturnDataProducts } from './products.interfaces';

export class ProductModelAPI implements ProductEntity {
  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;
}

export class ReturnDataProductsAPI implements IReturnDataProducts {
  @ApiProperty({ type: [ProductModelAPI] })
  data: ProductEntity[];
}
