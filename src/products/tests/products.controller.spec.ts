import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import { ProductsModule } from '../products.module';
import { ProductsService } from '../products.service';
import { ProductsServiceSpy } from './products.spy';

describe('ProductsController', () => {
  let app: INestApplication;

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
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect({
        data: [{ name: 'Example Product', price: 0.8 }],
      });
  });

  it(`/POST`, () => {
    return request(app.getHttpServer())
      .post('/')
      .send({ name: 'Teste', price: 0.6 })
      .expect(201)
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
