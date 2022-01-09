import { Controller, Get, Post, HttpCode, Body, Delete } from '@nestjs/common';
import { ApiBody, ApiTags, ApiResponse } from '@nestjs/swagger';

import { ProductModelAPI, ReturnDataProductsAPI } from './products.documents';
import { ProductEntity } from './products.entity';
import { IReturnDataProducts } from './products.interfaces';
import { ProductsService } from './products.service';

@ApiTags('products')
@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: ReturnDataProductsAPI,
    description: 'Successfully in get all products.',
  })
  getAll(): IReturnDataProducts {
    return { data: this.productsService.getAll() };
  }

  @Post()
  @HttpCode(201)
  @ApiBody({ type: ProductModelAPI })
  @ApiResponse({
    status: 201,
    type: ReturnDataProductsAPI,
    description: 'Successfully in create new product.',
  })
  create(@Body() product: ProductEntity): IReturnDataProducts {
    this.productsService.create(product);
    return { data: this.productsService.getAll() };
  }

  @Delete()
  @HttpCode(204)
  @ApiResponse({
    status: 204,
    type: ReturnDataProductsAPI,
    description: 'Successfully in delete product.',
  })
  delete(): IReturnDataProducts {
    this.productsService.delete();
    return { data: this.productsService.getAll() };
  }
}
