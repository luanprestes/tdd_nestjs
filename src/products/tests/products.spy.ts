import { IProductsImplements } from '../products.interfaces';
import { ProductEntity } from '../products.entity';

export class ProductsServiceSpy implements IProductsImplements {
  products: ProductEntity[] = [{ name: 'Example Product', price: 0.8 }];

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
