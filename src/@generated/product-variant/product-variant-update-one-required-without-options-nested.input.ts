import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantCreateWithoutOptionsInput } from './product-variant-create-without-options.input';
import { Type } from 'class-transformer';
import { ProductVariantCreateOrConnectWithoutOptionsInput } from './product-variant-create-or-connect-without-options.input';
import { ProductVariantUpsertWithoutOptionsInput } from './product-variant-upsert-without-options.input';
import { Prisma } from '@prisma/client';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { ProductVariantUpdateToOneWithWhereWithoutOptionsInput } from './product-variant-update-to-one-with-where-without-options.input';

@InputType()
export class ProductVariantUpdateOneRequiredWithoutOptionsNestedInput {

    @Field(() => ProductVariantCreateWithoutOptionsInput, {nullable:true})
    @Type(() => ProductVariantCreateWithoutOptionsInput)
    create?: ProductVariantCreateWithoutOptionsInput;

    @Field(() => ProductVariantCreateOrConnectWithoutOptionsInput, {nullable:true})
    @Type(() => ProductVariantCreateOrConnectWithoutOptionsInput)
    connectOrCreate?: ProductVariantCreateOrConnectWithoutOptionsInput;

    @Field(() => ProductVariantUpsertWithoutOptionsInput, {nullable:true})
    @Type(() => ProductVariantUpsertWithoutOptionsInput)
    upsert?: ProductVariantUpsertWithoutOptionsInput;

    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;

    @Field(() => ProductVariantUpdateToOneWithWhereWithoutOptionsInput, {nullable:true})
    @Type(() => ProductVariantUpdateToOneWithWhereWithoutOptionsInput)
    update?: ProductVariantUpdateToOneWithWhereWithoutOptionsInput;
}
