import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { Type } from 'class-transformer';
import { ProductVariantCreateWithoutOptionsInput } from './product-variant-create-without-options.input';

@InputType()
export class ProductVariantCreateOrConnectWithoutOptionsInput {

    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;

    @Field(() => ProductVariantCreateWithoutOptionsInput, {nullable:false})
    @Type(() => ProductVariantCreateWithoutOptionsInput)
    create!: ProductVariantCreateWithoutOptionsInput;
}
