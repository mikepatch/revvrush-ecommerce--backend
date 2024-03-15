import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Collection as CollectionClient } from '@prisma/client';

import { Product } from 'src/products/entities/product.entity';

@ObjectType()
export class Collection implements CollectionClient {
  @Field(() => ID, { description: 'Product collection ID' })
  id: string;

  @Field(() => String, { description: 'Product collection name' })
  name: string;

  @Field(() => String, {
    description: 'Product collection slug',
    nullable: true,
  })
  slug: string;

  @Field(() => String, {
    description: 'Product collection description',
    nullable: true,
  })
  description: string;

  @Field(() => [ID], { description: 'Product IDs in the collection' })
  productIds: string[];

  @Field(() => [Product], { description: 'Products in the collection' })
  products: Product[];

  @Field(() => String, { description: 'Product collection cover image URL' })
  coverImage: string;

  @Field(() => String)
  createdAt: Date;

  @Field(() => String)
  updatedAt: Date;
}
