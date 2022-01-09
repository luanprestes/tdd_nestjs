import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { ProductEntity } from '../entities/Product';

export class ProductDto implements ProductEntity {
  @IsUUID(4)
  @IsOptional()
  id: string;

  @IsString()
  name: string;

  @IsNumber()
  price: number;
}
