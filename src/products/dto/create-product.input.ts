import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field()
  price: number;

  // @Field()
  // stock: number;

  @Field()
  categoryId: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  images?: string[];

  @Field()
  description?: string;
}
