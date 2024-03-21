import { InputType, Field, ID, Int } from '@nestjs/graphql';

@InputType()
export class CreateCartItemInput {
  @Field(() => ID, { description: 'Cart ID' })
  cartId: string;

  @Field(() => ID, { description: 'Product ID' })
  productId: string;

  @Field(() => Int, { description: 'Product quantity' })
  quantity: number;
}
