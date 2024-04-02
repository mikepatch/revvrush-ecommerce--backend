import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';

import { ProductReview as ProductReviewClient } from '@prisma/client';

@ObjectType()
export class ProductReview implements Omit<ProductReviewClient, 'updatedAt'> {
  @Field(() => ID, { description: 'Review ID' })
  id: string;

  @Field(() => ID, { description: 'Review product id' })
  productId: string;

  @Field(() => String, { description: 'Review author' })
  name: string;

  @Field(() => String, { description: 'Review email' })
  email: string;

  @Field(() => Int, { description: 'Review rating' })
  rating: number;

  @Field(() => String, { description: 'Review headline' })
  headline: string;

  @Field(() => String, { description: 'Review content', nullable: true })
  content: string;

  @Field({ description: 'Review createdAt' })
  createdAt: Date;

  @Field({ description: 'Review updatedAt', nullable: true })
  updatedAt?: Date;
}

@ObjectType()
export class ProductReviewWithMeta {
  @Field(() => ProductReview)
  item: ProductReview;

  @Field(() => Int)
  total: number;
}

@ObjectType()
export class ProductReviewListMeta {
  @Field(() => Int, { description: 'Total number of record' })
  total: number;

  @Field(() => Float, { description: 'Average rating' })
  avgRating: number;
}

@ObjectType()
export class ProductReviewListWithMeta {
  @Field(() => [ProductReview], { description: 'List of reviews' })
  data: ProductReview[];

  @Field(() => ProductReviewListMeta, { description: 'List metadata' })
  meta: ProductReviewListMeta;
}
