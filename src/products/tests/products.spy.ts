import { IProductsImplements } from '../products.interfaces';
import { ProductEntity } from '../entities/Product';

export class ProductsServiceSpy implements IProductsImplements {
  products: ProductEntity[] = [
    {
      id: '370bab01-8dfc-4bbb-bb47-dce5e124aa9b',
      name: 'Example Product',
      price: 0.8,
    },
  ];

  getAll(): ProductEntity[] {
    return this.products;
  }

  create(product: ProductEntity): ProductEntity {
    const newProduct = new ProductEntity(
      product,
      '35426a89-7d94-4f46-a3c0-ff9ff233b8d0',
    );
    this.products.push(newProduct);
    return newProduct;
  }

  delete(id: string): boolean {
    const productFinded = this.products.find((product) => product.id === id);
    this.products = this.products.filter((product) => product.id !== id);
    return Boolean(productFinded);
  }
}
