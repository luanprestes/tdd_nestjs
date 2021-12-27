import { Injectable } from '@nestjs/common';
import { ProductsImplements, ProductTypes } from './products.interfaces';

@Injectable()
export class ProductsService implements ProductsImplements {
  products: ProductTypes[] = [];

  getAll(): ProductTypes[] {
    return this.products;
  }

  create(product: ProductTypes): void {
    this.products.push(product);
  }

  delete(): void {
    this.products.splice(0, 1);
  }
}
