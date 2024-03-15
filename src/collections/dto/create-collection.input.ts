import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateCollectionInput {
  @Field(() => String, { description: 'Product collection name' })
  name: string;

  @Field(() => String, {
    description: 'Product collection description',
    nullable: true,
  })
  description: string;

  @Field(() => [ID], { description: 'Product IDs in the collection' })
  productIds: string[];

  @Field(() => String, { description: 'Product collection cover image URL' })
  coverImage: string;
}
