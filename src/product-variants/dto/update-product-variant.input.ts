import { CreateProductVariantInput } from './create-product-variant.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateProductVariantInput extends PartialType(
  CreateProductVariantInput,
) {
  @Field(() => ID)
  id: string;
}
