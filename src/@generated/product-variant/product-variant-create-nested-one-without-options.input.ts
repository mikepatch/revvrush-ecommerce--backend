import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantCreateWithoutOptionsInput } from './product-variant-create-without-options.input';
import { Type } from 'class-transformer';
import { ProductVariantCreateOrConnectWithoutOptionsInput } from './product-variant-create-or-connect-without-options.input';
import { Prisma } from '@prisma/client';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';

@InputType()
export class ProductVariantCreateNestedOneWithoutOptionsInput {

    @Field(() => ProductVariantCreateWithoutOptionsInput, {nullable:true})
    @Type(() => ProductVariantCreateWithoutOptionsInput)
    create?: ProductVariantCreateWithoutOptionsInput;

    @Field(() => ProductVariantCreateOrConnectWithoutOptionsInput, {nullable:true})
    @Type(() => ProductVariantCreateOrConnectWithoutOptionsInput)
    connectOrCreate?: ProductVariantCreateOrConnectWithoutOptionsInput;

    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
}
