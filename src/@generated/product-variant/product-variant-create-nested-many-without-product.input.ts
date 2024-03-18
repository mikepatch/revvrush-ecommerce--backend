import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantCreateWithoutProductInput } from './product-variant-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductVariantCreateOrConnectWithoutProductInput } from './product-variant-create-or-connect-without-product.input';
import { ProductVariantCreateManyProductInputEnvelope } from './product-variant-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';

@InputType()
export class ProductVariantCreateNestedManyWithoutProductInput {

    @Field(() => [ProductVariantCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductVariantCreateWithoutProductInput)
    create?: Array<ProductVariantCreateWithoutProductInput>;

    @Field(() => [ProductVariantCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductVariantCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductVariantCreateOrConnectWithoutProductInput>;

    @Field(() => ProductVariantCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductVariantCreateManyProductInputEnvelope)
    createMany?: ProductVariantCreateManyProductInputEnvelope;

    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;
}
