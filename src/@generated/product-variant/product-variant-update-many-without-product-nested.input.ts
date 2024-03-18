import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantCreateWithoutProductInput } from './product-variant-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductVariantCreateOrConnectWithoutProductInput } from './product-variant-create-or-connect-without-product.input';
import { ProductVariantUpsertWithWhereUniqueWithoutProductInput } from './product-variant-upsert-with-where-unique-without-product.input';
import { ProductVariantCreateManyProductInputEnvelope } from './product-variant-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { ProductVariantUpdateWithWhereUniqueWithoutProductInput } from './product-variant-update-with-where-unique-without-product.input';
import { ProductVariantUpdateManyWithWhereWithoutProductInput } from './product-variant-update-many-with-where-without-product.input';
import { ProductVariantScalarWhereInput } from './product-variant-scalar-where.input';

@InputType()
export class ProductVariantUpdateManyWithoutProductNestedInput {

    @Field(() => [ProductVariantCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductVariantCreateWithoutProductInput)
    create?: Array<ProductVariantCreateWithoutProductInput>;

    @Field(() => [ProductVariantCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductVariantCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductVariantCreateOrConnectWithoutProductInput>;

    @Field(() => [ProductVariantUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductVariantUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<ProductVariantUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => ProductVariantCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductVariantCreateManyProductInputEnvelope)
    createMany?: ProductVariantCreateManyProductInputEnvelope;

    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;

    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;

    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;

    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;

    @Field(() => [ProductVariantUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductVariantUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<ProductVariantUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [ProductVariantUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => ProductVariantUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<ProductVariantUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [ProductVariantScalarWhereInput], {nullable:true})
    @Type(() => ProductVariantScalarWhereInput)
    deleteMany?: Array<ProductVariantScalarWhereInput>;
}
