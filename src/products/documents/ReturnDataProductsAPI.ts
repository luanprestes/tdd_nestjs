import { ApiProperty } from '@nestjs/swagger';
import { ProductEntity } from '../entities/Product';
import { IReturnDataProducts } from '../interfaces';
import { ProductModelAPI } from './DProductModelAPI';

export class ReturnDataProductsAPI implements IReturnDataProducts {
  @ApiProperty({ type: [ProductModelAPI] })
  data: ProductEntity[];
}
