import { ObjectType, Field, ID, Int, Float } from '@nestjs/graphql';

import { ProductCategory } from 'src/product-categories/entities/product-category.entity';
import { Product as ProductClient } from '@prisma/client';
import { Collection as CollectionClient } from '@prisma/client';
import { Collection } from 'src/collections/entities/collection.entity';
import { ProductVariant } from 'src/product-variants/entities/product-variant.entity';
import { ProductReview } from 'src/product-reviews/entities/product-review.entity';

@ObjectType()
export class Product implements ProductClient {
  @Field(() => ID, { description: 'Product ID' })
  id: string;

  @Field(() => ID, { description: 'Product category id' })
  categoryId: string;

  @Field(() => String, { description: 'Product name' })
  name: string;

  @Field({ description: 'Product slug' })
  slug: string;

  @Field(() => Int, { description: 'Product price' })
  price: number;

  @Field(() => Float, { description: 'Product avg rating', nullable: true })
  avgRating: number;

  // @Field(() => Int, { description: 'Product stock', defaultValue: 0 })
  // stock: number;

  @Field(() => ProductCategory, {
    description: 'Product category',
    nullable: true,
  })
  category: ProductCategory;

  @Field(() => String, {
    description: 'Product description',
    defaultValue: '',
  })
  description: string;

  @Field(() => [String], {
    description: 'Product images',
    nullable: 'items',
  })
  images: string[];

  @Field({ description: 'Product createdAt' })
  createdAt: Date;

  @Field({ description: 'Product updatedAt' })
  updatedAt: Date;

  @Field(() => ID, { description: 'Product orderId' })
  orderId: string;

  @Field(() => [Collection], {
    description: 'Product collections',
    nullable: 'itemsAndList',
  })
  collections?: CollectionClient[];

  @Field(() => [ProductVariant], {
    description: 'Product variants',
    nullable: 'itemsAndList',
  })
  variants?: ProductVariant[];

  @Field(() => [ProductReview], {
    description: 'Product reviews',
    nullable: 'itemsAndList',
  })
  reviews?: ProductReview[];
}

@ObjectType()
export class ProductMeta {
  @Field(() => Int, { description: 'Total number of reviews' })
  totalReviews: number;
}

@ObjectType()
export class ProductWithMeta {
  @Field(() => Product, { description: 'Product' })
  data: ProductClient;

  @Field(() => ProductMeta, { description: 'Product metadata' })
  meta: ProductMeta;
}

@ObjectType()
export class ListMeta {
  @Field(() => Int, { description: 'Total number of records' })
  total: number;
}

@ObjectType()
export class ProductList {
  @Field(() => [Product], { description: 'List of products' })
  data: ProductClient[];

  @Field(() => ListMeta, { description: 'List metadata' })
  meta: ListMeta;
}
