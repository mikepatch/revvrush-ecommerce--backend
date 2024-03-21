import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Cart as CartClient } from '@prisma/client';
import { CartItem } from 'src/carts/entities/cart-item.entity';

@ObjectType()
export class Cart implements CartClient {
  @Field(() => ID, { description: 'Cart ID' })
  id: string;

  @Field(() => ID, { description: 'User ID' })
  userId: string;

  @Field(() => [CartItem], {
    description: 'Items in the cart',
    nullable: 'itemsAndList',
  })
  items: CartItem[];

  @Field({ description: 'Product createdAt' })
  createdAt: Date;

  @Field({ description: 'Product updatedAt' })
  updatedAt: Date;
}
