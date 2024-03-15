import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Product } from 'src/products/entities/product.entity';

@ObjectType()
export class ProductVariant {
  @Field(() => ID, { description: 'Product variant ID' })
  id: string;

  @Field(() => String, { description: 'Product variant name' })
  name: string;

  @Field(() => Int, { description: 'Product variant price', nullable: true })
  price?: number;

  @Field(() => Int, { description: 'Product variant stock' })
  stock: number;

  @Field(() => String, { description: 'Product variant productId' })
  productId: string;

  @Field(() => Product, { description: 'Product variant product' })
  product: Product;

  @Field(() => [ProductVariantOption], {
    description: 'Product variant options',
  })
  options: ProductVariantOption[];

  @Field(() => Date, { description: 'Product variant createdAt' })
  createdAt: Date;

  @Field(() => Date, { description: 'Product variant updatedAt' })
  updatedAt: Date;
}

@ObjectType()
export class ProductVariantOption {
  @Field(() => ID, { description: 'Product variant option ID' })
  id: string;

  @Field(() => String, { description: 'Product variant option name' })
  name: string;

  @Field(() => [String], { description: 'Product variant option values' })
  values: string[];

  @Field(() => String, { description: 'Product variant option variantId' })
  productVariantId: string;

  // @Field(() => ProductVariant, {
  //   description: 'Product variant option variant',
  // })
  // productVariant: ProductVariant;
}
