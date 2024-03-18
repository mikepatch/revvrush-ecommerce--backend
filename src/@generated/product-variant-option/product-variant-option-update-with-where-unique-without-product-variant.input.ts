import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductVariantOptionWhereUniqueInput } from './product-variant-option-where-unique.input';
import { Type } from 'class-transformer';
import { ProductVariantOptionUpdateWithoutProductVariantInput } from './product-variant-option-update-without-product-variant.input';

@InputType()
export class ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput {

    @Field(() => ProductVariantOptionWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;

    @Field(() => ProductVariantOptionUpdateWithoutProductVariantInput, {nullable:false})
    @Type(() => ProductVariantOptionUpdateWithoutProductVariantInput)
    data!: ProductVariantOptionUpdateWithoutProductVariantInput;
}
