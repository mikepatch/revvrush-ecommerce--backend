import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateCollectionInput } from './create-collection.input';

@InputType()
export class UpdateCollectionInput extends PartialType(CreateCollectionInput) {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => [String], { nullable: true })
  productIds?: string[];
}
