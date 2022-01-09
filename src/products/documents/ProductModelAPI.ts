import { ApiProperty } from '@nestjs/swagger';
import { ProductEntity } from '../entities/Product';

export class ProductModelAPI implements ProductEntity {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;
}
