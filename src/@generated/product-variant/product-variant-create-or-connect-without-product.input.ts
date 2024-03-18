import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { Type } from 'class-transformer';
import { ProductVariantCreateWithoutProductInput } from './product-variant-create-without-product.input';

@InputType()
export class ProductVariantCreateOrConnectWithoutProductInput {

    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;

    @Field(() => ProductVariantCreateWithoutProductInput, {nullable:false})
    @Type(() => ProductVariantCreateWithoutProductInput)
    create!: ProductVariantCreateWithoutProductInput;
}
