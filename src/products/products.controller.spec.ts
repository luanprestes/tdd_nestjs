import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import { ProductsModule } from './products.module';
import { ProductsService } from './products.service';
import { ProductsImplements, ProductTypes } from './products.interfaces';

describe('ProductsController', () => {
  let app: INestApplication;

  class ProductsServiceSpy implements ProductsImplements {
    products: ProductTypes[] = [{ name: 'Example Product', price: 0.8 }];

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

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ProductsModule],
    })
      .overrideProvider(ProductsService)
      .useValue(new ProductsServiceSpy())
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it(`/GET`, () => {
    const productsService = new ProductsServiceSpy();
    return request(app.getHttpServer()).get('/').expect(200).expect({
      data: productsService.getAll(),
    });
  });

  it(`/POST`, () => {
    return request(app.getHttpServer())
      .post('/')
      .send({ name: 'Teste', price: 0.6 })
      .expect(200)
      .expect({
        data: [
          { name: 'Example Product', price: 0.8 },
          { name: 'Teste', price: 0.6 },
        ],
      });
  });

  it(`/DELETE`, () => {
    return request(app.getHttpServer()).delete('/').expect(200).expect({
      data: [],
    });
  });
});
