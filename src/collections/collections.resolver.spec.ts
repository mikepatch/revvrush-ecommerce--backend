import { Test, TestingModule } from '@nestjs/testing';
import { CollectionsResolver } from 'src/collections/collections.resolver';
import { CollectionsService } from 'src/collections/collections.service';

describe('ProductCollectionsResolver', () => {
  let resolver: CollectionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectionsResolver, CollectionsService],
    }).compile();

    resolver = module.get<CollectionsResolver>(CollectionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
