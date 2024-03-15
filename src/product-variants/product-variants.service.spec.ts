import { Test, TestingModule } from '@nestjs/testing';
import { ProductVariantsService } from './product-variants.service';
import { PrismaService } from 'src/shared/prisma/prisma.service';

describe('ProductVariantsService', () => {
  let service: ProductVariantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductVariantsService, PrismaService],
    }).compile();

    service = module.get<ProductVariantsService>(ProductVariantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
