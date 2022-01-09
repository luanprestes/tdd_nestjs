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

  @ApiResponse({
    status: 200,
    type: ReturnDataProductsAPI,
    description: 'Successfully in get all products.',
  })
  @Get()
  @HttpCode(200)
  getAll(): IReturnDataProducts {
    return { data: this.productsService.getAll() };
  }

  @ApiBody({ type: ProductModelAPI })
  @ApiResponse({
    status: 201,
    type: ReturnDataProductsAPI,
    description: 'Successfully in create new product.',
  })
  @Post()
  @HttpCode(201)
  create(@Body() product: ProductEntity): IReturnDataProducts {
    this.productsService.create(product);
    return { data: this.productsService.getAll() };
  }

  @ApiResponse({
    status: 200,
    type: ReturnDataProductsAPI,
    description: 'Successfully in delete product.',
  })
  @Delete()
  @HttpCode(200)
  delete(): IReturnDataProducts {
    this.productsService.delete();
    return { data: this.productsService.getAll() };
  }
}
