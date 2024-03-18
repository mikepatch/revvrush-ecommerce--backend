import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductVariantOptionWhereUniqueInput } from './product-variant-option-where-unique.input';
import { Type } from 'class-transformer';
import { ProductVariantOptionCreateWithoutProductVariantInput } from './product-variant-option-create-without-product-variant.input';

@InputType()
export class ProductVariantOptionCreateOrConnectWithoutProductVariantInput {

    @Field(() => ProductVariantOptionWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;

    @Field(() => ProductVariantOptionCreateWithoutProductVariantInput, {nullable:false})
    @Type(() => ProductVariantOptionCreateWithoutProductVariantInput)
    create!: ProductVariantOptionCreateWithoutProductVariantInput;
}
