import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductVariantInput {
  @Field(() => String, { description: 'Product variant name' })
  name: string;

  @Field(() => Int, { description: 'Product variant stock', defaultValue: 0 })
  stock: number;

  @Field(() => Int, { description: 'Product variant price', nullable: true })
  price?: number;

  @Field(() => String, { description: 'Product variant productId' })
  productId: string;

  @Field(() => [CreateProductVariantOptionInput], {
    description: 'Product variant options',
  })
  options: CreateProductVariantOptionInput[];
}

@InputType()
export class CreateProductVariantOptionInput {
  @Field(() => String, { description: 'Product variant option name' })
  name: string;

  @Field(() => [String], { description: 'Product variant option values' })
  values: string[];

  // @Field(() => String, { description: 'Product variant option variantId' })
  // productVariantId: string;
}
