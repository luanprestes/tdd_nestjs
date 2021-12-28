import { Controller, Get, Post, HttpCode, Body, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductModelAPI, ProductTypes } from './products.interfaces';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiTags,
  ApiProperty,
} from '@nestjs/swagger';

interface ReturnDataProductsType {
  data: ProductTypes[];
}

class ReturnDataProductsAPI implements ReturnDataProductsType {
  @ApiProperty({ type: [ProductModelAPI] })
  data: ProductTypes[];
}

@ApiTags('products')
@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @HttpCode(201)
  @ApiCreatedResponse({ type: ReturnDataProductsAPI })
  getAll(): ReturnDataProductsType {
    return { data: this.productsService.getAll() };
  }

  @Post()
  @HttpCode(201)
  @ApiBody({ type: ProductModelAPI })
  @ApiCreatedResponse({ type: ReturnDataProductsAPI })
  create(@Body() product: ProductTypes): ReturnDataProductsType {
    this.productsService.create(product);
    return { data: this.productsService.getAll() };
  }

  @Delete()
  @HttpCode(201)
  @ApiCreatedResponse({ type: ReturnDataProductsAPI })
  delete(): ReturnDataProductsType {
    this.productsService.delete();
    return { data: this.productsService.getAll() };
  }
}
