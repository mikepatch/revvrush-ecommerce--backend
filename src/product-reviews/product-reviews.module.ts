import { Module } from '@nestjs/common';
import { ProductReviewsService } from './product-reviews.service';
import { ProductReviewsResolver } from './product-reviews.resolver';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Module({
  providers: [ProductReviewsResolver, ProductReviewsService, PrismaService],
})
export class ProductReviewsModule {}
