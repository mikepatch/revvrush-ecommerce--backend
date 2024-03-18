import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { Type } from 'class-transformer';
import { ProductVariantUpdateWithoutProductInput } from './product-variant-update-without-product.input';

@InputType()
export class ProductVariantUpdateWithWhereUniqueWithoutProductInput {

    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;

    @Field(() => ProductVariantUpdateWithoutProductInput, {nullable:false})
    @Type(() => ProductVariantUpdateWithoutProductInput)
    data!: ProductVariantUpdateWithoutProductInput;
}
