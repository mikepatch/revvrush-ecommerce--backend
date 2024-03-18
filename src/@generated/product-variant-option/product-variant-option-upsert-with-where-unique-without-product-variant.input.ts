import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductVariantOptionWhereUniqueInput } from './product-variant-option-where-unique.input';
import { Type } from 'class-transformer';
import { ProductVariantOptionUpdateWithoutProductVariantInput } from './product-variant-option-update-without-product-variant.input';
import { ProductVariantOptionCreateWithoutProductVariantInput } from './product-variant-option-create-without-product-variant.input';

@InputType()
export class ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput {

    @Field(() => ProductVariantOptionWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;

    @Field(() => ProductVariantOptionUpdateWithoutProductVariantInput, {nullable:false})
    @Type(() => ProductVariantOptionUpdateWithoutProductVariantInput)
    update!: ProductVariantOptionUpdateWithoutProductVariantInput;

    @Field(() => ProductVariantOptionCreateWithoutProductVariantInput, {nullable:false})
    @Type(() => ProductVariantOptionCreateWithoutProductVariantInput)
    create!: ProductVariantOptionCreateWithoutProductVariantInput;
}
