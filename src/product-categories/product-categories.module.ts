import { Module } from '@nestjs/common';

import { PrismaService } from 'src/shared/prisma/prisma.service';
import { ProductCategoriesService } from './product-categories.service';
import { ProductCategoriesResolver } from './product-categories.resolver';

@Module({
  providers: [
    ProductCategoriesResolver,
    ProductCategoriesService,
    PrismaService,
  ],
})
export class ProductCategoriesModule {}
