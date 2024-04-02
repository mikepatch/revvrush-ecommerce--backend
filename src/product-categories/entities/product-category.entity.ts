import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ProductCategory as ProductCategoryClient } from '@prisma/client';

import { Product } from 'src/products/entities/product.entity';

@ObjectType()
export class ProductCategory implements ProductCategoryClient {
  @Field(() => ID, { description: 'Product category ID' })
  id: string;

  @Field({ description: 'Product category name' })
  name: string;

  @Field({ description: 'Product category slug', nullable: true })
  slug: string;

  @Field(() => ID, { description: 'Parent category ID', nullable: true })
  parentCategoryId: string;

  @Field({ description: 'Category created at' })
  createdAt: Date;

  @Field({ description: 'Category updated at' })
  updatedAt: Date;

  @Field(() => [Product], {
    description: 'Products in this category',
    nullable: 'items',
  })
  products?: Product[];
}

@ObjectType()
export class ProductCategoriesList {
  @Field(() => [ProductCategory], { description: 'List of product categories' })
  data: ProductCategory[];
}
