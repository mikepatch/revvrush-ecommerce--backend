import { CreateProductInput } from './create-product.input';
import { Field, Float, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => Float, { description: 'Product rating', nullable: true })
  avgRating?: number;
}
