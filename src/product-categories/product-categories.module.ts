import { Module } from '@nestjs/common';

import { PrismaService } from 'src/shared/prisma/prisma.service';
import { ProductCategoriesService } from './product-categories.service';
import { ProductCategoriesResolver } from './product-categories.resolver';
import { ProductsService } from 'src/products/products.service';

@Module({
  providers: [
    ProductCategoriesResolver,
    ProductCategoriesService,
    PrismaService,
    ProductsService,
  ],
})
export class ProductCategoriesModule {}
