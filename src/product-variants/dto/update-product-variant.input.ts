import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';
import {
  CreateProductVariantInput,
  CreateProductVariantOptionInput,
} from './create-product-variant.input';

@InputType()
class UpdateProductVariantOptionInput extends PartialType(
  CreateProductVariantOptionInput,
) {}

@InputType()
export class UpdateProductVariantInput extends OmitType(
  CreateProductVariantInput,
  ['options', 'productId'] as const,
) {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => [UpdateProductVariantOptionInput], { nullable: true })
  options?: UpdateProductVariantOptionInput[];

  @Field(() => String, { nullable: true })
  productId?: string;
}
