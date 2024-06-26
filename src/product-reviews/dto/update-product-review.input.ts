import { CreateProductReviewInput } from './create-product-review.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateProductReviewInput extends PartialType(
  CreateProductReviewInput,
) {
  @Field(() => ID)
  id: string;
}
