import { Injectable } from '@nestjs/common';
import { IProductsImplements } from './products.interfaces';
import { ProductEntity } from './entities/Product';

@Injectable()
export class ProductsService implements IProductsImplements {
  products: ProductEntity[] = [];

  getAll(): ProductEntity[] {
    return this.products;
  }

  create(product: ProductEntity): ProductEntity {
    const newProduct = new ProductEntity(product);
    this.products.push(newProduct);
    return newProduct;
  }

  delete(id: string): boolean {
    const productFinded = this.products.find((product) => product.id === id);
    this.products = this.products.filter((product) => product.id !== id);
    return Boolean(productFinded);
  }
}
