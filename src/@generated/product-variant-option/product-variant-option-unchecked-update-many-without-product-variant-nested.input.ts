import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantOptionCreateWithoutProductVariantInput } from './product-variant-option-create-without-product-variant.input';
import { Type } from 'class-transformer';
import { ProductVariantOptionCreateOrConnectWithoutProductVariantInput } from './product-variant-option-create-or-connect-without-product-variant.input';
import { ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput } from './product-variant-option-upsert-with-where-unique-without-product-variant.input';
import { ProductVariantOptionCreateManyProductVariantInputEnvelope } from './product-variant-option-create-many-product-variant-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductVariantOptionWhereUniqueInput } from './product-variant-option-where-unique.input';
import { ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput } from './product-variant-option-update-with-where-unique-without-product-variant.input';
import { ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput } from './product-variant-option-update-many-with-where-without-product-variant.input';
import { ProductVariantOptionScalarWhereInput } from './product-variant-option-scalar-where.input';

@InputType()
export class ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput {

    @Field(() => [ProductVariantOptionCreateWithoutProductVariantInput], {nullable:true})
    @Type(() => ProductVariantOptionCreateWithoutProductVariantInput)
    create?: Array<ProductVariantOptionCreateWithoutProductVariantInput>;

    @Field(() => [ProductVariantOptionCreateOrConnectWithoutProductVariantInput], {nullable:true})
    @Type(() => ProductVariantOptionCreateOrConnectWithoutProductVariantInput)
    connectOrCreate?: Array<ProductVariantOptionCreateOrConnectWithoutProductVariantInput>;

    @Field(() => [ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput], {nullable:true})
    @Type(() => ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput)
    upsert?: Array<ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput>;

    @Field(() => ProductVariantOptionCreateManyProductVariantInputEnvelope, {nullable:true})
    @Type(() => ProductVariantOptionCreateManyProductVariantInputEnvelope)
    createMany?: ProductVariantOptionCreateManyProductVariantInputEnvelope;

    @Field(() => [ProductVariantOptionWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;

    @Field(() => [ProductVariantOptionWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;

    @Field(() => [ProductVariantOptionWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;

    @Field(() => [ProductVariantOptionWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;

    @Field(() => [ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput], {nullable:true})
    @Type(() => ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput)
    update?: Array<ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput>;

    @Field(() => [ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput], {nullable:true})
    @Type(() => ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput)
    updateMany?: Array<ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput>;

    @Field(() => [ProductVariantOptionScalarWhereInput], {nullable:true})
    @Type(() => ProductVariantOptionScalarWhereInput)
    deleteMany?: Array<ProductVariantOptionScalarWhereInput>;
}
