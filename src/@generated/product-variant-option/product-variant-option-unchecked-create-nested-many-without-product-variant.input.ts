import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantOptionCreateWithoutProductVariantInput } from './product-variant-option-create-without-product-variant.input';
import { Type } from 'class-transformer';
import { ProductVariantOptionCreateOrConnectWithoutProductVariantInput } from './product-variant-option-create-or-connect-without-product-variant.input';
import { ProductVariantOptionCreateManyProductVariantInputEnvelope } from './product-variant-option-create-many-product-variant-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductVariantOptionWhereUniqueInput } from './product-variant-option-where-unique.input';

@InputType()
export class ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput {

    @Field(() => [ProductVariantOptionCreateWithoutProductVariantInput], {nullable:true})
    @Type(() => ProductVariantOptionCreateWithoutProductVariantInput)
    create?: Array<ProductVariantOptionCreateWithoutProductVariantInput>;

    @Field(() => [ProductVariantOptionCreateOrConnectWithoutProductVariantInput], {nullable:true})
    @Type(() => ProductVariantOptionCreateOrConnectWithoutProductVariantInput)
    connectOrCreate?: Array<ProductVariantOptionCreateOrConnectWithoutProductVariantInput>;

    @Field(() => ProductVariantOptionCreateManyProductVariantInputEnvelope, {nullable:true})
    @Type(() => ProductVariantOptionCreateManyProductVariantInputEnvelope)
    createMany?: ProductVariantOptionCreateManyProductVariantInputEnvelope;

    @Field(() => [ProductVariantOptionWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;
}
