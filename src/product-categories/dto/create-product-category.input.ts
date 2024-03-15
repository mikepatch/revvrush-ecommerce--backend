import { InputType, Field } from '@nestjs/graphql';

@InputType({ description: 'New product category input' })
export class CreateProductCategoryInput {
  @Field({ description: 'Product category name' })
  name: string;

  @Field({ description: 'Parent category ID', nullable: true })
  parentCategoryId?: string;
}
