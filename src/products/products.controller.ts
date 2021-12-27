import { Controller, Get, Post, HttpCode, Body, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductTypes } from './products.interfaces';

type getProducts = {
  data: ProductTypes[];
};

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @HttpCode(200)
  getAll(): getProducts {
    return this.responseDefault();
  }

  @Post()
  @HttpCode(200)
  create(@Body() product: ProductTypes): getProducts {
    this.productsService.create(product);
    return this.responseDefault();
  }

  @Delete()
  @HttpCode(200)
  delete(): getProducts {
    this.productsService.delete();
    return this.responseDefault();
  }

  responseDefault(): getProducts {
    return { data: this.productsService.getAll() };
  }
}
