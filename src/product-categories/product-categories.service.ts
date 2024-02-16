import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateProductCategoryInput } from './dto/create-product-category.input';
import { UpdateProductCategoryInput } from './dto/update-product-category.input';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductCategoriesService {
  constructor(private prisma: PrismaService) {}

  createProductCategory(
    createProductCategoryInput: CreateProductCategoryInput,
  ) {
    return 'This action adds a new productCategory';
  }

  getProductCategories(
    skip?: number,
    take?: number,
    cursor?: Prisma.ProductCategoryWhereUniqueInput,
    where?: Prisma.ProductCategoryWhereInput,
    orderBy?: Prisma.ProductCategoryOrderByWithRelationInput,
  ) {
    return this.prisma.productCategory.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  getProductCategoryById(id: number) {
    return `This action returns a #${id} productCategory`;
  }

  updateProductCategory(
    id: number,
    updateProductCategoryInput: UpdateProductCategoryInput,
  ) {
    return `This action updates a #${id} productCategory`;
  }

  removeProductCategory(id: number) {
    return `This action removes a #${id} productCategory`;
  }
}
