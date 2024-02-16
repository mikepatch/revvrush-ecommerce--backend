import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class ProductCategory {
  @Field(() => ID, { description: 'Product ID' })
  id: string;

  @Field(() => String, { description: 'Product name' })
  name: string;
}
