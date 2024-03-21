import { Module } from '@nestjs/common';

import { CartsService } from './carts.service';
import { CartsResolver } from './carts.resolver';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Module({
  providers: [CartsResolver, CartsService, PrismaService],
})
export class CartsModule {}
