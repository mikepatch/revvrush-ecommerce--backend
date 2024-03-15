import { Module } from '@nestjs/common';
import { ProductVariantsService } from './product-variants.service';
import { ProductVariantsResolver } from './product-variants.resolver';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Module({
  providers: [ProductVariantsResolver, ProductVariantsService, PrismaService],
})
export class ProductVariantsModule {}
