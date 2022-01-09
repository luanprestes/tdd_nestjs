import {
  Controller,
  Get,
  Post,
  HttpCode,
  Body,
  Delete,
  Param,
} from '@nestjs/common';
import { ApiBody, ApiTags, ApiResponse } from '@nestjs/swagger';

import {
  ProductModelAPI,
  ReturnDataProductsAPI,
  ReturnDeletedProductAPI,
} from './documents';

import { ProductDto } from './dtos/products.dto';

import { IReturnDataProducts, IReturnProductDeleted } from './interfaces';

import { ProductsService } from './products.service';
import { ProductEntity } from './entities/Product';

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
    type: ProductModelAPI,
    description: 'Successfully in create new product.',
  })
  @Post()
  @HttpCode(201)
  create(@Body() product: ProductDto): ProductEntity {
    const newProduct = this.productsService.create(product);
    return newProduct;
  }

  @ApiResponse({
    status: 200,
    type: ReturnDeletedProductAPI,
    description: 'Successfully in delete product.',
  })
  @Delete(':id')
  @HttpCode(200)
  delete(@Param('id') id: string): IReturnProductDeleted {
    return {
      deleted: this.productsService.delete(id),
    };
  }
}
