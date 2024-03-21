import { CreateCartItemInput } from 'src/carts/dto/create-cart-item.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateCartItemInput extends PartialType(CreateCartItemInput) {
  @Field(() => ID, { description: 'Cart ID', nullable: true })
  cartId?: string;

  @Field(() => ID, { description: 'Product ID', nullable: true })
  productId?: string;

  @Field(() => Int, { description: 'Product quantity', nullable: true })
  quantity?: number;
}
