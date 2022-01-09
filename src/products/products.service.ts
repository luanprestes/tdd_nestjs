import { Injectable } from '@nestjs/common';
import { IProductsImplements } from './products.interfaces';
import { ProductEntity } from './products.entity';

@Injectable()
export class ProductsService implements IProductsImplements {
  products: ProductEntity[] = [];

  getAll(): ProductEntity[] {
    return this.products;
  }

  create(product: ProductEntity): void {
    this.products.push(product);
  }

  delete(): void {
    this.products.splice(0, 1);
  }
}
