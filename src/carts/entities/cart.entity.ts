import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

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
    nullable: 'items',
  })
  items: CartItem[];

  @Field({ description: 'Product createdAt' })
  createdAt: Date;

  @Field({ description: 'Product updatedAt' })
  updatedAt: Date;
}

@ObjectType()
export class CartMeta {
  @Field(() => Float, { description: 'Total price of the cart' })
  totalPrice: number;
}

@ObjectType()
export class CartWithMeta {
  @Field(() => Cart, { description: 'Cart' })
  data: Cart;

  @Field(() => CartMeta, { description: 'Cart meta' })
  meta: CartMeta;
}
