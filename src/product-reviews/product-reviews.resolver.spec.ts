import { Test, TestingModule } from '@nestjs/testing';
import { ProductReviewsResolver } from './product-reviews.resolver';
import { ProductReviewsService } from './product-reviews.service';

describe('ReviewsResolver', () => {
  let resolver: ReviewsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReviewsResolver, ReviewsService],
    }).compile();

    resolver = module.get<ReviewsResolver>(ReviewsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
