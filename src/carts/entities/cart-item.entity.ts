import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { CartItem as CartItemClient } from '@prisma/client';

import { Product } from 'src/products/entities/product.entity';

@ObjectType()
export class CartItem implements CartItemClient {
  @Field(() => ID, { description: 'CartProduct ID' })
  id: string;

  @Field(() => ID, { description: 'Cart ID' })
  cartId: string;

  @Field(() => ID, { description: 'Product ID' })
  productId: string;

  @Field(() => Int, { description: 'Product quantity' })
  quantity: number;

  @Field(() => Product, { description: 'Product' })
  product: Product;

  @Field({ description: 'Product createdAt' })
  createdAt: Date;

  @Field({ description: 'Product updatedAt' })
  updatedAt: Date;
}
