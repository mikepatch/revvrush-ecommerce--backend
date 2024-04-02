import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';

import { CreateProductReviewInput } from './dto/create-product-review.input';
import { UpdateProductReviewInput } from './dto/update-product-review.input';
import {
  ProductReview,
  ProductReviewListWithMeta,
} from 'src/product-reviews/entities/product-review.entity';
import { ProductReviewsService } from 'src/product-reviews/product-reviews.service';
import {
  ProductReviewOrderByWithRelationInput,
  ProductReviewWhereInput,
} from 'prisma/generated';
import { Prisma } from '@prisma/client';

@Resolver(() => ProductReview)
export class ProductReviewsResolver {
  constructor(private readonly productReviewsService: ProductReviewsService) {}

  @Mutation(() => ProductReview)
  async createProductReview(
    @Args('createProductReviewInput')
    createProductReviewInput: CreateProductReviewInput,
  ) {
    return await this.productReviewsService.create(createProductReviewInput);
  }

  @Query(() => ProductReviewListWithMeta, { name: 'productReviews' })
  async getProductReviews(
    @Args('where', {
      name: 'where',
      type: () => ProductReviewWhereInput,
      nullable: true,
    })
    where?: Prisma.ProductReviewWhereInput,
    @Args('orderBy', {
      type: () => ProductReviewOrderByWithRelationInput,
      nullable: true,
    })
    orderBy?: Prisma.ProductReviewOrderByWithRelationInput,
  ): Promise<ProductReviewListWithMeta> {
    return await this.productReviewsService.findAll({ where, orderBy });
  }

  @Query(() => ProductReview, { name: 'productReview' })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return await this.productReviewsService.findOne(id);
  }

  @Mutation(() => ProductReview)
  async updateProductReview(
    @Args('updateProductReviewInput')
    updateProductReviewInput: UpdateProductReviewInput,
  ) {
    return await this.productReviewsService.update(
      updateProductReviewInput.id,
      updateProductReviewInput,
    );
  }

  @Mutation(() => ProductReview)
  async removeProductReview(@Args('id', { type: () => Int }) id: number) {
    return await this.productReviewsService.remove(id);
  }
}
